<?php

require_once (plugin_dir_path( __FILE__ ) . '../model/ClassModel.php');
require_once (plugin_dir_path( __FILE__ ) . '../model/StudentModel.php');
require_once (plugin_dir_path( __FILE__ ) . '../model/StoryletModel.php');
require_once (ABSPATH.'wp-admin/includes/user.php');

class AdminClass_API extends WP_REST_Controller
{
    protected $namespace;
    protected $rest_base;

    public function __construct() {
        $this->namespace = 'admin-class/v1';
        //$this->rest_base = 'adminclass';
    }

    public function run()
    {
        // HANDLE CLASS
        register_rest_route($this->namespace, '/class(?:/(?P<classid>\d+))?', array(
            array(
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => array( $this, 'get_class' ),
                'permission_callback' => array( $this, 'get_class_permissions_check' ),
            ),
            array(
                'methods'             => WP_REST_Server::CREATABLE,
                'callback'            => array( $this, 'create_class' ),
                'permission_callback' => array( $this, 'insert_class_permissions_check' ),
            ),
            array(
                'methods'             => WP_REST_Server::EDITABLE,
                'callback'            => array( $this, 'update_class' ),
                'permission_callback' => array( $this, 'insert_class_permissions_check' ),
                'args'                => $this->get_endpoint_args_for_item_schema( false ),
            ),
            array(
                'methods'             => WP_REST_Server::DELETABLE,
                'callback'            => array( $this, 'delete_class' ),
                'permission_callback' => array( $this, 'insert_class_permissions_check' ),
                'args'                => $this->get_endpoint_args_for_item_schema( false ),
            ),
            'schema' => null
        ));

        // HANDLE TEACHER
        register_rest_route($this->namespace, '/teacher-class', array(
            array(
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => array( $this, 'get_teacher_class' ),
                'permission_callback' => array( $this, 'get_class_permissions_check' ),
                'args'                => $this->get_endpoint_args_for_item_schema( false )
            ),
            'schema' => null
        ));

        // HANDLE STUDENT
        register_rest_route($this->namespace, '/student/(?P<studentid>\d+)', array(
            array(
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => array( $this, 'get_student' ),
                'permission_callback' => array( $this, 'get_class_permissions_check' ),
                'args'                => $this->get_endpoint_args_for_item_schema( false )
            ),
            array(
                'methods'             => WP_REST_Server::EDITABLE,
                'callback'            => array( $this, 'edit_student' ),
                'permission_callback' => array( $this, 'insert_class_permissions_check' ),
                'args'                => $this->get_endpoint_args_for_item_schema( false ),
            ),
            array(
                'methods'             => WP_REST_Server::DELETABLE,
                'callback'            => array( $this, 'delete_student' ),
                'permission_callback' => array( $this, 'insert_class_permissions_check' ),
                'args'                => $this->get_endpoint_args_for_item_schema( false ),
            ),
            'schema' => null
        ));
    }

    public function create_class( $request )
    {
        try
        {
            $current_user = wp_get_current_user();

            $parameters         = $request->get_params();
            $users              = array();

            $class              = new ClassModel();
            $class->teacherId   = $current_user->ID;
            $class->class       = $parameters['class'];
            $class->section     = $parameters['section'];
            $class->description = $parameters['description'];
            $class->size        = $parameters['size'];
            $class->save();

            for($i=1; $i<=$parameters['size']; $i++)
            {
                $user_name = $parameters['class'] . "_" . $parameters['section'] . "_" . $i;
                $user_id   = username_exists( $user_name );

                if (!$user_id /*&& false == email_exists( $user_email )*/ )
                {
                    $random_password = wp_generate_password( $length = 12, $include_standard_special_chars = false );
                    $user_id = wp_create_user( $user_name, $random_password);

                    $student            = new StudentModel();
                    $student->userId    = $user_id;
                    $student->teacherId = $current_user->ID;
                    $student->classId   = $class->id;
                    $student->username  = $user_name;
                    $student->password  = $random_password;
                    $student->save();

                    array_push($users, $student);

                } else {
                    return rest_ensure_response(['status' => 'K0', 'error' => 'User already exists']);
                }
            }

            return rest_ensure_response(['status' => 'OK', 'created_class_id' => $class->id, "users" => $users]);

        } catch (Exception $e) {
            return rest_ensure_response(['status' => 'KO', 'error' => $e->getMessage()]);
        }
    }

    public function update_class( $request )
    {
        try
        {
            if(isset($request['classid']))
            {
                $class = ClassModel::find($request['classid']);
                $class->class = $request['class'];
                $class->section = $request['section'];
                $class->description = $request['description'];
                $class->save();

                return rest_ensure_response(['status' => 'OK', 'data' => $class]);
            } else {
                return rest_ensure_response(['status' => 'KO', 'error' => 'classid param required']);
            }

        } catch (Exception $e) {
            return rest_ensure_response(['status' => 'KO', 'error' => $e->getMessage()]);
        }
    }

    public function delete_class( $request )
    {
        try
        {
            ClassModel::where('id', '=', $request['classid'])->delete();

            $students = StudentModel::where('classId', '=', $request['classid'])->get();

            foreach ($students as &$student)
                wp_delete_user($student->userId);

            StudentModel::where('classId', '=', $request['classid'])->delete();

            return rest_ensure_response(['status' => 'OK', 'data' => $request['classid']]);

        } catch (Exception $e) {
            return rest_ensure_response(['status' => 'KO', 'error' => $e->getMessage()]);
        }
    }

    public function get_teacher_class( $request )
    {
        try
        {
            $current_user = wp_get_current_user();
            $teacher_id = $current_user->ID;
            $classes = ClassModel::where('teacherId', '=', $teacher_id)->get();

            foreach ($classes as &$class)
            {
                $students = StudentModel::where('classId', '=', $class->id);
                $class->setStudents($students->get());
                $class->setStories(StoryletModel::whereIn('ownerId', $students->pluck('userId')->toArray())->get());
            }

            return rest_ensure_response(['status' => 'OK', 'data' => $classes]);

        } catch (Exception $e) {
            return rest_ensure_response(['status' => 'KO', 'error' => $e->getMessage()]);
        }
    }

    public function get_student ( $request )
    {
        try
        {
            $student = StudentModel::find($request['studentid']);

            return rest_ensure_response(['status' => 'OK', 'data' => $student]);
        } catch (Exception $e) {
            return rest_ensure_response(['status' => 'KO', 'error' => $e->getMessage()]);
        }
    }

    public function edit_student ( $request )
    {
        try
        {
            global $wpdb;

            $student = StudentModel::find($request['studentid']);

            if($student->username != $request['username'] && username_exists($request['username']))
                return rest_ensure_response(['status' => 'KO', 'error' => 'Username in use']);

            $student->username = $request['username'];
            $student->password = $request['password'];
            $student->name = $request['name'];
            $student->surname = $request['surname'];
            $student->save();

            $wpdb->update($wpdb->users, array('user_login' => $student->username), array('ID' => $student->userId));
            wp_set_password($student->password, $student->userId);

            return rest_ensure_response(['status' => 'OK', 'data' => $request['studentid']]);
        } catch (Exception $e) {
            return rest_ensure_response(['status' => 'KO', 'error' => $e->getMessage()]);
        }
    }

    public function delete_student ( $request )
    {
        try
        {
            $student = StudentModel::find($request['studentid']);
            wp_delete_user($student->userId);

            $student->delete();

            return rest_ensure_response(['status' => 'OK', 'deleted' => $student, 'student' => $request['studentid']]);
        } catch (Exception $e) {
            return rest_ensure_response(['status' => 'KO', 'error' => $e->getMessage()]);
        }
    }


    public function get_class_permissions_check( $request )
    {
        return true;
    }

    public function insert_class_permissions_check( $request )
    {
        return true;
    }
}