<?php

/**
 * Fired during plugin activation
 *
 * @link       isislab.unisa@gmail.com
 * @since      1.0.0
 *
 * @package    Storylet
 * @subpackage Storylet/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Storylet
 * @subpackage Storylet/includes
 * @author     ISISLab <isislab.unisa@gmail.com>
 */

class Storylet_Activator {

	/**
	 *
	 *
	 *
	 * @since    1.0.0
	 */
	public static function activate()
	{
		self::createDB();
		self::createVirtualPages();
	}

	private static function createVirtualPages()
	{
		add_rewrite_rule('^storylet','index.php?storylet=1','top');
		flush_rewrite_rules();
	}

	private static function createDB()
	{
		// Required to use dbDelta
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

		/* STORYLET */
		$storylet =  self::createTableName('storylet');

		$sql = "CREATE TABLE $storylet (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  name varchar(255) DEFAULT '',
			  description varchar(255) DEFAULT '',
			  ownerId mediumint(9) UNSIGNED,
			  templateId mediumint(9) UNSIGNED,
			  themeId mediumint(9) UNSIGNED,
			  PRIMARY KEY  (id)
			) $charset_collate;";

		dbDelta($sql);

		/* STORYLET TEMPLATE */
		$storylet_template =  self::createTableName('storylet_template');

		$sql = "CREATE TABLE $storylet_template (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  name varchar(255) DEFAULT '',
			  description varchar(255) DEFAULT '',
			  type varchar(255) DEFAULT '',
			  tag varchar(255) DEFAULT '',
			  settings varchar(255) DEFAULT '',
			  slideTemplateList varchar(255) DEFAULT '',
			  PRIMARY KEY  (id)
			) $charset_collate;";

		dbDelta($sql);

		/* SLIDE */
		$slide =  self::createTableName('slide');

		$sql = "CREATE TABLE $slide (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  storyletId mediumint(9) UNSIGNED,
			  slideTemplateId mediumint(9) UNSIGNED,
			  HTML text DEFAULT '',
			  PRIMARY KEY  (id)
			) $charset_collate;";

		dbDelta($sql);

		/* SLIDE TEMPLATE */
		$slide_template =  self::createTableName('slide_template');

		$sql = "CREATE TABLE $slide_template (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  name varchar(255) DEFAULT '',
			  description varchar(255) DEFAULT '',
			  type varchar(255) DEFAULT '',			  
			  componentTemplateList text DEFAULT '',
			  componentPosition text DEFAULT '',
			  impressSettings text DEFAULT '',
			  PRIMARY KEY  (id)
			) $charset_collate;";

		dbDelta($sql);

		/* COMPONENT */
		$component =  self::createTableName('component');

		$sql = "CREATE TABLE $component (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  componentTemplateId mediumint(9) UNSIGNED,
			  slideId mediumint(9) UNSIGNED,
			  componentValues text DEFAULT '',
			  PRIMARY KEY  (id)
			) $charset_collate;";

		dbDelta($sql);

		/* COMPONENT TEMPLATE */
		$component_template =  self::createTableName('component_template');

		$sql = "CREATE TABLE $component_template (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  name varchar(255) DEFAULT '',
			  description varchar(255) DEFAULT '',
			  type varchar(255) DEFAULT '',	
			  properties text DEFAULT '',
			  PRIMARY KEY  (id)
			) $charset_collate;";

		dbDelta($sql);

		/* THEME */
		$theme =  self::createTableName('theme');

		$sql = "CREATE TABLE $theme (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  name varchar(255) DEFAULT '',
			  description varchar(255) DEFAULT '',
			  resourcesList text DEFAULT '',
			  PRIMARY KEY  (id)
			) $charset_collate;";

		dbDelta($sql);
	}

	private static function createTableName($table_name)
	{
		global $wpdb;
		return $wpdb->prefix . 'story_' . $table_name;
	}
}
