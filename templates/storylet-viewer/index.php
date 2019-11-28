<?php
    if(!is_user_logged_in())
        wp_redirect(wp_login_url());

    require_once (plugin_dir_path( __FILE__ ) . '../../model/StoryletModel.php');

    $base_path =  plugin_dir_url( __FILE__ );

    $storylet_id = preg_replace('/\D/', '', $_SERVER['REQUEST_URI']);

    $storylet = StoryletModel::find(intval($storylet_id));

    if($storylet && get_current_user_id() == $storylet->ownerId)
        require_once plugin_dir_path(dirname(__FILE__)) . '/storylet-viewer/partials/storylet-viewer.php';
    else
        require_once plugin_dir_path( dirname( __FILE__ ) ) . '/storylet-viewer/partials/error.php';