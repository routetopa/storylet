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
		add_rewrite_rule('^storylet$','index.php?storylet=1','top');
        add_rewrite_rule('^storylet-creator','index.php?storylet-creator=1','top');
        add_rewrite_rule('^storylet-viewer','index.php?storylet-viewer=1','top');
        add_rewrite_rule('^admin-area','index.php?admin-area=1','top');
        add_rewrite_rule('^my-storylet','index.php?my-storylet=1','top');
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
			  ownerId mediumint(9) UNSIGNED,
			  templateId mediumint(9) UNSIGNED,
			  story text DEFAULT '',
			  metadata text DEFAULT '',
			  status SMALLINT UNSIGNED,
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
			  template text DEFAULT '',
			  metadata text DEFAULT '',
			  classId mediumint(9) UNSIGNED,
			  PRIMARY KEY  (id)
			) $charset_collate;";

		dbDelta($sql);

		/* CLASS */
        $class =  self::createTableName('class');

        $sql = "CREATE TABLE $class (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  teacherId mediumint(9) UNSIGNED,
			  class varchar(255) DEFAULT '',
			  section varchar(255) DEFAULT '',
			  description varchar(255) DEFAULT '',
			  size SMALLINT UNSIGNED,
			  imagePath varchar(255) DEFAULT '',
			  PRIMARY KEY  (id)
			) $charset_collate;";

        dbDelta($sql);

        /* STUDENT */
        $student =  self::createTableName('student');

        $sql = "CREATE TABLE $student (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  userId mediumint(9) UNSIGNED,
			  teacherId mediumint(9) UNSIGNED,
			  classId mediumint(9) UNSIGNED,
			  username varchar(255) DEFAULT '',
			  password varchar(255) DEFAULT '',			
			  name varchar(255) DEFAULT '',			
			  surname varchar(255) DEFAULT '',			
			  status varchar(255) DEFAULT '',			
			  PRIMARY KEY  (id)
			) $charset_collate;";

        dbDelta($sql);


        /* IMAGES */
        $image =  self::createTableName('image');

        $sql = "CREATE TABLE $image (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  classId mediumint(9) UNSIGNED,
			  teacherId mediumint(9) UNSIGNED,
			  name varchar(255) DEFAULT '',			
			  description varchar(255) DEFAULT '',			
			  path varchar(255) DEFAULT '',			
			  PRIMARY KEY  (id)
			) $charset_collate;";

        dbDelta($sql);

        /* IMAGES */
        $student_image =  self::createTableName('student_image');

        $sql = "CREATE TABLE $student_image (
			  id mediumint(9) UNSIGNED NOT NULL AUTO_INCREMENT,
			  userId mediumint(9) UNSIGNED,
			  name varchar(255) DEFAULT '',			
			  description varchar(255) DEFAULT '',			
			  path varchar(255) DEFAULT '',			
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
