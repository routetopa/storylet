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
    <title>Storylet Creator</title>
    <link href="<?php echo $base_path ?>static/css/main.88791bc0.chunk.css" rel="stylesheet">

</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>
<script type="text/javascript">

    window.API_ENDPOINT = {
        GET_STORYLET_TEMPLATE: '<?php echo rest_url() ?>/storylet/v1/storylet-template',
        SAVE_STORYLET: '<?php echo rest_url() ?>storylet/v1/storylet',
    };

    window.STORY = {
        DATA:<?php echo json_encode($storylet) ?>
    };

    window.API_NONCE = {
        NONCE: '<?php echo wp_create_nonce( 'wp_rest' ); ?>'
    };

    window.STATIC = {
        SITE_URL: '<?php echo site_url(); ?>/',
        IMAGE_BASE_PATH : '<?php echo plugins_url('storylet/images/') ?>'
    };

</script>

<script src="<?php echo $base_path ?>static/js/runtime-main.30fdea02.js"></script>
<script src="<?php echo $base_path ?>static/js/2.97ce432c.chunk.js"></script>
<script src="<?php echo $base_path ?>static/js/main.8e97dd64.chunk.js"></script>
</html>