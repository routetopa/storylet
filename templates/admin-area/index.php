<?php
    if(!is_user_logged_in())
        wp_redirect(wp_login_url() . "/?redirect_to=" .  get_site_url() . "/admin-area");

    $base_path =  plugin_dir_url( __FILE__ );
    $relative_path = substr(site_url(), strrpos(site_url(), '/'));

    $user = wp_get_current_user();

    if ( in_array( 'um_docente', (array) $user->roles ) )
        require_once plugin_dir_path(dirname(__FILE__)) . '/admin-area/partials/admin-area.php';
    else
        wp_redirect( wp_login_url() . "/?redirect_to=" .  get_site_url() . "/admin-area" );//require_once plugin_dir_path(dirname(__FILE__)) . '/admin-area/partials/error.php';