<?php

/**
 * Fired during plugin deactivation
 *
 * @link       isislab.unisa@gmail.com
 * @since      1.0.0
 *
 * @package    Storylet
 * @subpackage Storylet/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    Storylet
 * @subpackage Storylet/includes
 * @author     ISISLab <isislab.unisa@gmail.com>
 */
class Storylet_Deactivator {

	/**
	 * Drop all the plugin related db tables.
	 *
	 *
	 * @since    1.0.0
	 */
	public static function deactivate()
	{
		//self::removeDB();
		self::removeVirtualPages();
	}

	private static function removeVirtualPages()
	{
		flush_rewrite_rules();
	}

	private static function removeDB()
	{
		global $wpdb;

		$table = $wpdb->prefix . "story_storylet";
		$wpdb->query("DROP TABLE IF EXISTS $table");

		$table = $wpdb->prefix . "story_storylet_template";
		$wpdb->query("DROP TABLE IF EXISTS $table");

		$table = $wpdb->prefix . "story_slide";
		$wpdb->query("DROP TABLE IF EXISTS $table");

		$table = $wpdb->prefix . "story_slide_template";
		$wpdb->query("DROP TABLE IF EXISTS $table");

		$table = $wpdb->prefix . "story_component";
		$wpdb->query("DROP TABLE IF EXISTS $table");

		$table = $wpdb->prefix . "story_component_template";
		$wpdb->query("DROP TABLE IF EXISTS $table");

		$table = $wpdb->prefix . "story_theme";
		$wpdb->query("DROP TABLE IF EXISTS $table");
	}
}
