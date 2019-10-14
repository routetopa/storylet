<?php

require_once (plugin_dir_path( __FILE__ ) . '../model/StoryletModel.php');

class Storylet_API extends WP_REST_Controller
{
	protected $namespace;
	protected $rest_base;

	public function __construct() {
		$this->namespace = 'storylet/v1';
		$this->rest_base = 'storylet';
	}

	public function run()
	{
		register_rest_route($this->namespace, '/' . $this->rest_base, array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_storylet' ),
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
	}

	public function get_storylet_permissions_check( $request )
	{
		/*if ( ! current_user_can( 'read' ) ) {
			return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot view the category resource.' ), array( 'status' => $this->authorization_status_code() ) );
		}*/
		return true;
	}

	public function update_storylet_permissions_check( $request )
	{
		/*if ( ! current_user_can( 'manage_options' ) ) {
			return new WP_Error( 'rest_forbidden', esc_html__( 'You cannot update the category resource.' ), array( 'status' => $this->authorization_status_code() ) );
		}*/
		return true;
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