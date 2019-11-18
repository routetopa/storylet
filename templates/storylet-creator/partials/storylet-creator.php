<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <base href="<?php echo $base_path ?>" />
    <title>Storylet Creator</title>
    <link href="<?php echo $base_path ?>static/css/main.81b47b40.chunk.css" rel="stylesheet">

</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
</body>
<script type="text/javascript">
    window.API_ENDPOINT = {
        GET_STORYLET_TEMPLATE: '<?php echo rest_url() ?>/storylet/v1/storylet-template',
    };

    window.STORY = {
        DATA:<?php echo json_encode($storylet) ?>
    };

    window.API_NONCE = {
        NONCE: '<?php echo wp_create_nonce( 'wp_rest' ); ?>'
    };
</script>

<script src="<?php echo $base_path ?>static/js/runtime-main.eaeebcef.js"></script>
<script src="<?php echo $base_path ?>static/js/2.9d7a4fe5.chunk.js"></script>
<script src="<?php echo $base_path ?>static/js/main.230edda1.chunk.js"></script>
</html>