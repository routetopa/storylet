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
    <base href="<?php echo $base_path ?>" />
    <title>My Storylet</title>
    <link type='text/css' media='all' href="<?php echo $base_path ?>static/css/2.1e105a3b.chunk.css" rel="stylesheet">
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>

<script type="text/javascript">

    window.API_ENDPOINT = {
        GET_MY_STORY: "http://test.com/wp/wp-json/storylet/v1/my-storylet",
        STORYLET_VIEWER: "http://test.com/wp/storylet-viewer",
        STORYLET_CREATOR: "http://test.com/wp/storylet-creator",
        CRUD_STORYLET: "http://test.com/wp/wp-json/storylet/v1/storylet",
        SITE_URL: "/wp/"
    };

    window.USER_INFO = {
        name   : '<?php echo $current_user->user_firstname ?>',
        surname: '<?php echo $current_user->user_lastname ?>'
    };

    window.API_NONCE = {
        NONCE: '<?php echo wp_create_nonce( 'wp_rest' ); ?>'
    };
</script>

<script type="text/javascript" src="<?php echo $base_path ?>static/js/runtime-main.5034be3e.js"></script>
<script type="text/javascript" src="<?php echo $base_path ?>static/js/2.0f36f5ee.chunk.js"></script>
<script type="text/javascript" src="<?php echo $base_path ?>static/js/main.e253ebd5.chunk.js"></script>
</html>