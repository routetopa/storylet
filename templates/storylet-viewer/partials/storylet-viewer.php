<?php
if(!is_user_logged_in())
    wp_redirect(wp_login_url());
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <base href="<?php echo $base_path ?>" />
    <title>Storylet Viewer</title>
    <link type='text/css' media='all' href="<?php echo $base_path ?>static/css/main.38d519f9.chunk.css" rel="stylesheet">
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>

<script type="text/javascript">

    window.STATIC = {
        IMAGE_BASE_PATH: "<?php echo plugins_url() ?>/storylet/templates/storylet-creator/"
    };

    window.API_ENDPOINT = {
        GET_STORYLET_TEMPLATE: '<?php echo rest_url() ?>storylet/v1/storylet-template',
        GET_STORYLET: '<?php echo rest_url() ?>storylet/v1/storylet',
        STORYLET_CREATOR_URL: '<?php echo get_site_url() ?>/storylet-creator/'
    };

    window.STORY = {
        DATA: <?php echo $storylet ?>
    };

    window.API_NONCE = {
        NONCE: '<?php echo wp_create_nonce( 'wp_rest' ); ?>'
    };
</script>

<script type="text/javascript" src="<?php echo $base_path ?>static/js/runtime-main.d702a1ba.js"></script>
<script type="text/javascript" src="<?php echo $base_path ?>static/js/2.2a31b2aa.chunk.js"></script>
<script type="text/javascript" src="<?php echo $base_path ?>static/js/main.2ab5990b.chunk.js"></script>
</html>