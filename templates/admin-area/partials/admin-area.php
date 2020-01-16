<?php
if(!is_user_logged_in())
    wp_redirect(wp_login_url());
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <meta name="description" content="Web site created using create-react-app"/>
    <title>React App</title>
    <link href="<?php echo $base_path ?>static/css/2.7f669fb7.chunk.css" rel="stylesheet">
    <link href="<?php echo $base_path ?>static/css/main.8ab70d19.chunk.css" rel="stylesheet">
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

    window.API_NONCE = {NONCE: "12345679"}
</script>

<script src="<?php echo $base_path ?>static/js/runtime-main.12df12ac.js"></script>
<script src="<?php echo $base_path ?>static/js/2.fb79a4a3.chunk.js"></script>
<script src="<?php echo $base_path ?>static/js/main.b614e0df.chunk.js"></script>

</html>