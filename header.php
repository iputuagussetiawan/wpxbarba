<!DOCTYPE html>
<html lang="<?php echo getCurrentLang(); ?>">
<head>
    
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color" content="#10AF13">
    
    <?php wp_head(); ?>
</head>

<body data-barba="wrapper" <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div class="cb-loader">
        <div class="cb-loader-backdrop"></div>
        <div class="cb-loader-fill"></div>
    </div>
    <div id="barba-wrapper">

    <?php //show_debug_helper(); ?>