<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       isislab.unisa@gmail.com
 * @since      1.0.0
 *
 * @package    Storylet
 * @subpackage Storylet/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Storylet
 * @subpackage Storylet/admin
 * @author     ISISLab <isislab.unisa@gmail.com>
 */
class Storylet_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		add_action('admin_menu', array($this, 'add_plugin_page'));
	}

	public function add_plugin_page()
	{
		// This page will be under "Settings"
		add_options_page(
			'Storylet',
			'Storylet',
			'manage_options',
			'storylet-admin',
			array( $this, 'create_admin_page' )
		);
	}

	public function create_admin_page()
	{
		?> <h1>HELLO WORLD!</h1>
           <div id="root"></div>
        <?php
	}


	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Storylet_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Storylet_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( 'uno', plugin_dir_url(__FILE__) . '../component/admin-area/build/static/css/2.f6c8dd44.chunk.css', array(), $this->version, 'all' );
		wp_enqueue_style( 'due', plugin_dir_url(__FILE__) . '../component/admin-area/build/static/css/main.34de6062.chunk.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Storylet_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Storylet_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( 'pippo', plugin_dir_url(__FILE__) . '../component/admin-area/build/static/js/runtime-main.12df12ac.js', [], $this->version, true );
		wp_enqueue_script( 'baudo', plugin_dir_url(__FILE__) . '../component/admin-area/build/static/js/2.c6c21784.chunk.js', [], $this->version, true );
		wp_enqueue_script( 'capellone', plugin_dir_url(__FILE__) . '../component/admin-area/build/static/js/main.f498ae84.chunk.js', [], $this->version, true);

	}

}
