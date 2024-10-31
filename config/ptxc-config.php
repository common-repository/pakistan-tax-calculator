<?php 
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      


/**
 * Define allowed HTML tags and attributes for sanitization.
 *
 * This function returns an array of HTML tags and their allowed attributes.
 * The array structure is designed to be used with functions like wp_kses()
 * to sanitize user input and ensure that only the specified HTML tags and attributes
 * are allowed.
 *
 * @return array An associative array of allowed HTML tags and their attributes.
 */
function ptxc_allowed_html(){

    $allowed_html = array(
        'a' => array(
            'href' => array(),
            'title' => array(),
            'target' => array(),
            'rel' => array(),
        ),
        'abbr' => array(
            'title' => array(),
        ),
        'acronym' => array(
            'title' => array(),
        ),
        'address' => array(),
        'area' => array(
            'shape' => array(),
            'coords' =>  array(),
            'href' => array(),
            'alt' => array(),
            'target' => array(),
            'download' => array(),
            'ping' => array(),
            'rel' => array(),
            'referrerpolicy' => array(),
        ),
        'article' => array(),
        'aside' => array(),
        'audio' => array(
            'autoplay' => array(),
            'controls' => array(),
            'loop' => array(),
            'preload' => array(),
            'src' => array(),
        ),
        'b' => array(),
        'blockquote' => array(
            'cite' => array(),
        ),
        'br' => array(),
        'button' => array(
            'disabled' => array(),
            'type' => array(),
        ),
        'canvas' => array(
            'width' => array(),
            'height' => array(),
        ),
        'caption' => array(),
        'cite' => array(),
        'code' => array(),
        'col' => array(
            'span' => array(),
        ),
        'colgroup' => array(
            'span' => array(),
        ),
        'data' => array(
            'value' => array(),
        ),
        'datalist' => array(),
        'dd' => array(),
        'del' => array(
            'cite' => array(),
            'datetime' => array(),
        ),
        'details' => array(
            'open' => array(),
        ),
        'dfn' => array(),
        'dialog' => array(),
        'div' => array(),
        'dl' => array(),
        'dt' => array(),
        'em' => array(),
        'embed' => array(
            'src' => array(),
            'type' => array(),
            'width' => array(),
            'height' => array(),
        ),
        'fieldset' => array(),
        'figcaption' => array(),
        'figure' => array(),
        'footer' => array(),
        'form' => array(
            'action' => array(),
            'method' => array(),
        ),
        'h1' => array(),
        'h2' => array(),
        'h3' => array(),
        'h4' => array(),
        'h5' => array(),
        'h6' => array(),
        'header' => array(),
        'hr' => array(),
        'i' => array(),
        'iframe' => array(
            'src' => array(),
            'width' => array(),
            'height' => array(),
            'frameborder' => array(),
            'allowfullscreen' => array(),
            'allow' => array(),
        ),
        'img' => array(
            'src' => array(),
            'srcset' => array(),
            'sizes' => array(),
            'alt' => array(),
            'title' => array(),
            'width' => array(),
            'height' => array(),
        ),
        'input' => array(
            'type' => array(),
            'name' => array(),
            'value' => array(),
            'checked' => array(),
            'disabled' => array(),
            'readonly' => array(),
            'placeholder' => array(),
            'maxlength' => array(),
            'required' => array(),
            'autocomplete' => array(),
            'pattern' => array(),
        ),
        'ins' => array(
            'cite' => array(),
            'datetime' => array(),
        ),
        'kbd' => array(),
        'label' => array(
            'for' => array(),
        ),
        'legend' => array(),
        'li' => array(),
        'main' => array(),
        'map' => array(
            'name' => array(),
        ),
        'mark' => array(),
        'menu' => array(),
        'menuitem' => array(
            'type' => array(),
            'label' => array(),
            'icon' => array(),
            'disabled' => array(),
            'checked' => array(),
            'radiogroup' => array(),
        ),
        'meter' => array(
            'value' => array(),
            'min' => array(),
            'max' => array(),
            'low' => array(),
            'high' => array(),
            'optimum' => array(),
        ),
        'nav' => array(),
        'noscript' => array(),
        'object' => array(
            'data' => array(),
            'type' => array(),
            'width' => array(),
            'height' => array(),
            'name' => array(),
            'usemap' => array(),
            'form' => array(),
            'classid' => array(),
            'codebase' => array(),
            'codetype' => array(),
        ),
        'ol' => array(
            'reversed' => array(),
            'start' => array(),
            'type' => array(),
        ),
        'optgroup' => array(
            'disabled' => array(),
            'label' => array(),
        ),
        'option' => array(
            'disabled' => array(),
            'label' => array(),
            'selected' => array(),
            'value' => array(),
        ),
        'output' => array(
            'for' => array(),
            'form' => array(),
            'name' => array(),
        ),
        'p' => array(),
        'param' => array(
            'name' => array(),
            'value' => array(),
        ),
        'picture' => array(),
        'pre' => array(),
        'progress' => array(
            'value' => array(),
            'max' => array(),
        ),
        'q' => array(
            'cite' => array(),
        ),
        'rp' => array(),
        'rt' => array(),
        'ruby' => array(),
        's' => array(),
        'samp' => array(),
        'script' => array(
            'type' => array(),
            'src' => array(),
            'async' => array(),
            'defer' => array(),
            'crossorigin' => array(),
            'nonce' => array(),
        ),
        'section' => array(),
        'select' => array(
            'name' => array(),
            'size' => array(),
            'multiple' => array(),
            'disabled' => array(),
            'autofocus' => array(),
        'required' => array(),
        'autocomplete' => array(),
        'readonly' => array(),
        'disabled' => array(),
        ),
        'slot' => array(),
        'small' => array(),
        'source' => array(
            'src' => array(),
            'type' => array(),
            'srcset' => array(),
            'sizes' => array(),
            'media' => array(),
        ),
        'span' => array(),
        'strong' => array(),
        'style' => array(
            'type' => array(),
            'media' => array(),
            'scoped' => array(),
        ),
        'sub' => array(),
        'summary' => array(),
        'sup' => array(),
        'table' => array(),
        'tbody' => array(),
        'td' => array(
            'colspan' => array(),
            'rowspan' => array(),
            'headers' => array(),
            'scope' => array(),
            'abbr' => array(),
        ),
        'template' => array(),
        'textarea' => array(
            'name' => array(),
            'rows' => array(),
            'cols' => array(),
            'maxlength' => array(),
            'autofocus' => array(),
            'required' => array(),
            'readonly' => array(),
            'disabled' => array(),
            'placeholder' => array(),
            'autocomplete' => array(),
            'wrap' => array(),
        ),
        'tfoot' => array(),
        'th' => array(
            'colspan' => array(),
            'rowspan' => array(),
            'headers' => array(),
            'scope' => array(),
            'abbr' => array(),
        ),
        'thead' => array(),
        'time' => array(
            'datetime' => array(),
        ),
        'title' => array(),
        'tr' => array(),
        'track' => array(
            'default' => array(),
            'kind' => array(),
            'label' => array(),
            'src' => array(),
            'srclang' => array(),
        ),
        'u' => array(),
        'ul' => array(),
        'var' => array(),
        'video' => array(
            'src' => array(),
            'autoplay' => array(),
            'controls' => array(),
            'loop' => array(),
            'muted' => array(),
            'preload' => array(),
            'width' => array(),
            'height' => array(),
        ),
        'wbr' => array()
    );


    // Add any additional attributes for specific tags as needed
    $allowed_html['form']['enctype'] = array();
    $allowed_html['input']['accept'] = array();
    $allowed_html['input']['autocomplete'] = array();
    $allowed_html['input']['autofocus'] = array();
    $allowed_html['input']['min'] = array();
    $allowed_html['input']['max'] = array();
    $allowed_html['input']['step'] = array();
    $allowed_html['textarea']['autofocus'] = array();
    $allowed_html['textarea']['maxlength'] = array();
    $allowed_html['select']['autofocus'] = array();
    foreach ($allowed_html as &$attributes) {
        $attributes['class'] = array();
        $attributes['id'] = array();
        $attributes['onclick'] = array();
        $attributes['onchange'] = array();
        $attributes['onkeypress'] = array();
    }
    
    return $allowed_html;
}

// This if-else condition differentiates between the admin panel and website functionality
if (is_admin()){
    require_once (ptxc_MainPath.'source/core/admin_initial.php');
    new ptxc_admin_initial\ptxc_initialize();   
} else {
    require_once (ptxc_MainPath.'source/core/Web_initial.php');
    $web_obj = new ptxc_Web_initial\ptxc_initialize();
    // This foreach loop registers the shortcodes of the plugin calculator
    foreach ($web_obj->shortcode->ptxc_get_all_calculator() as $calc) {
        if(!is_null($calc->ShortCode) && !empty($calc->ShortCode))
            add_shortcode( $calc->ShortCode , array($web_obj->shortcode,'ptxc_calc_shortcode_tag'));
    }

}