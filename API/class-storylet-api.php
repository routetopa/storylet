<?php

require_once (plugin_dir_path( __FILE__ ) . '../model/StoryletModel.php');
require_once (plugin_dir_path( __FILE__ ) . '../model/StoryletTemplatetModel.php');

class Storylet_API extends WP_REST_Controller
{
	protected $namespace;
	protected $rest_base;

	public function __construct() {
		$this->namespace = 'storylet/v1';
		//$this->rest_base = 'storylet';
	}

	public function run()
	{
		// GET ALL STORYLET TEMPLATE
		register_rest_route($this->namespace, '/storylet-template', array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_storylet_template' ),
				'permission_callback' => array( $this, 'get_storylet_permissions_check' ),
			),
			/*array(
				'methods'         => WP_REST_Server::EDITABLE,
				'callback'        => array( $this, 'update_item' ),
				'permission_callback' => array( $this, 'update_item_permissions_check' ),
				'args'            => $this->get_endpoint_args_for_item_schema( false ),
			),*/
			'schema' => null,
			// SCHEMA IS AVAILABLE THROUGH OPTION REQUEST TO THIS ENDPOINT
			//'schema' => 'prefix_get_comment_schema',
		));

		register_rest_route($this->namespace, '/storylet', array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_storylet' ),
				'permission_callback' => array( $this, 'get_storylet_permissions_check' ),
			),
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'create_storylet' ),
				'permission_callback' => array( $this, 'insert_item_permissions_check' ),
				'args'                => $this->get_endpoint_args_for_item_schema( false ),
			),
			'schema' => null,
			// SCHEMA IS AVAILABLE THROUGH OPTION REQUEST TO THIS ENDPOINT
			//'schema' => 'prefix_get_comment_schema',
		));
	}

	public function get_storylet_permissions_check( $request )
	{
		/*if ( ! current_user_can( 'read' ) ) {
			return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the category resource.' ), array( 'status' => $this->authorization_status_code() ) );
		}*/
		return true;
	}

	public function insert_item_permissions_check( $request )
	{
	    return is_user_logged_in();
        /*if(!is_user_logged_in())
		    return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the category resource.' ), array() );
        return true;*/
	}

	public function get_storylet_template( $request )
	{
		$storylet_tamplates = StoryletTemplateModel::all()->toArray();

		foreach ($storylet_tamplates as &$s_t)
		{
			$s_t = array_merge($s_t, json_decode($s_t['settings'], true));
			$s_t['tag'] = json_decode($s_t['tag']);
			unset($s_t['settings']);
		}

		return rest_ensure_response(['status' => 'OK', 'data' => $storylet_tamplates]);
	}

	public function create_storylet( $request )
	{
		try
		{
			$parameters       = $request->get_params();
			$storyletTemplate = $parameters['storyletTemplate'];

			$storylet             = new StoryletModel();
			$storylet->templateId = intval( $storyletTemplate['id'] );
			$storylet->ownerId    = get_current_user_id();
			$storylet->save();

			return rest_ensure_response(['status'              => 'OK',
										 'created_storylet_id' => $storylet->ID ]);
		} catch (Exception $e) {
			return rest_ensure_response(['status' => 'K0', 'error' => $e->getMessage()]);
		}
	}

	public function get_storylet( $request )
	{
		return rest_ensure_response(['status' => 'OK', 'data' => StoryletModel::all()->toArray()]);
	}

	/*function prefix_get_comment_schema() {
		$schema = array(
			// This tells the spec of JSON Schema we are using which is draft 4.
			'$schema'              => 'http://json-schema.org/draft-04/schema#',
			// The title property marks the identity of the resource.
			'title'                => 'comment',
			'type'                 => 'object',
			// In JSON Schema you can specify object properties in the properties attribute.
			'properties'           => array(
				'id' => array(
					'description'  => esc_html__( 'Unique identifier for the object.', 'my-textdomain' ),
					'type'         => 'integer',
					'context'      => array( 'view', 'edit', 'embed' ),
					'readonly'     => true,
				),
				'author' => array(
					'description'  => esc_html__( 'The id of the user object, if author was a user.', 'my-textdomain' ),
					'type'         => 'integer',
				),
				'content' => array(
					'description'  => esc_html__( 'The content for the object.', 'my-textdomain' ),
					'type'         => 'string',
				),
			),
		);

		return $schema;
	}*/

}