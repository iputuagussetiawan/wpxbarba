<?php

// ======================================
// Functions Partial -- start
// ======================================

include_once 'inc/functions-custom.php';
include_once 'inc/functions-plugin.php';
include_once 'inc/functions-style-script.php';
include_once 'inc/functions-acf.php';
include_once 'inc/functions-polylang.php';
include_once 'inc/functions-theme-setup.php';
include_once 'inc/functions-basic-auth.php';

// ======================================
// Functions Partial -- end
// ======================================

// add class to li element
function add_additional_class_on_li($classes, $item, $args) {
    if(isset($args->add_li_class)) {
        $classes[] = $args->add_li_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);

// add class to a element
function add_menu_link_class( $atts, $item, $args ) {
    if (property_exists($args, 'link_class')) {
        $atts['class'] = $args->link_class;
    }
    return $atts;
}
add_filter( 'nav_menu_link_attributes', 'add_menu_link_class', 1, 3 );