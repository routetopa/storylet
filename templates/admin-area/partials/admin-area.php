<?php
if(!is_user_logged_in())
    wp_redirect(wp_login_url());

$current_user = wp_get_current_user();


?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <meta name="description" content="Web site created using create-react-app"/>
    <title>React App</title>
    <link href="<?php echo $base_path ?>static/css/2.7156d6df.chunk.css" rel="stylesheet">
    <link href="<?php echo $base_path ?>static/css/main.3a5c9144.chunk.css" rel="stylesheet">
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>

<script type="text/javascript">
    window.API_ENDPOINT = {
        GET_CLASS       : '<?php echo rest_url() ?>admin-class/v1/teacher-class',
        CRUD_CLASS      : '<?php echo rest_url() ?>admin-class/v1/class',
        CRUD_STUDENT    : '<?php echo rest_url() ?>admin-class/v1/student',
        CRUD_STORYLET   : '<?php echo rest_url() ?>storylet/v1/storylet',
        STORYLET_VIEWER : '<?php echo site_url(); ?>/storylet-viewer',
        SITE_URL        : '<?php echo $relative_path ?>/'
    };

    window.USER_INFO = {
        name   : '<?php echo $current_user->user_firstname ?>',
        surname: '<?php echo $current_user->user_lastname ?>'
    };

    window.API_NONCE = {
        NONCE: '<?php echo wp_create_nonce( 'wp_rest' ); ?>'
    };

</script>

<script src="<?php echo $base_path ?>static/js/runtime-main.12df12ac.js"></script>
<script src="<?php echo $base_path ?>static/js/2.e386a147.chunk"></script>
<script src="<?php echo $base_path ?>static/js/main.87797e66.chunk.js"></script>

</html>