<?php
    if(!is_user_logged_in())
        wp_redirect(wp_login_url());

    $base_path =  plugin_dir_url( __FILE__ );
    $user = wp_get_current_user();

    require_once plugin_dir_path(dirname(__FILE__)) . '/my-storylet/partials/my-storylet.php';
