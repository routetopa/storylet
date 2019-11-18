<?php
    if(!is_user_logged_in())
        wp_redirect(wp_login_url());

    $base_path =  plugin_dir_url( __FILE__ );
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <base href="<?php echo $base_path ?>" />
    <title>Storylet List</title>
    <link type='text/css' media='all' href="<?php echo $base_path ?>static/css/main.d6dbe800.chunk.css" rel="stylesheet">
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>

<script type="text/javascript">
    window.API_ENDPOINT = {
        GET_STORYLET_TEMPLATE: '<?php echo rest_url() ?>storylet/v1/storylet-template',
        CREATE_STORYLET: '<?php echo rest_url() ?>storylet/v1/storylet',
        STORYLET_CREATOR_URL: '<?php echo get_site_url() ?>/storylet-creator/'
    };

    window.API_NONCE = {
        NONCE: '<?php echo wp_create_nonce( 'wp_rest' ); ?>'
    };
</script>

<script type="text/javascript" src="<?php echo $base_path ?>static/js/runtime-main.907d235e.js"></script>
<script type="text/javascript" src="<?php echo $base_path ?>static/js/2.96932e0f.chunk.js"></script>
<script type="text/javascript" src="<?php echo $base_path ?>static/js/main.36e25ef6.chunk.js"></script>
</html>