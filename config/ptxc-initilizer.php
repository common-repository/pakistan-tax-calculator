<?php 
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
/**
 * We have created the constant 'ptxc_MainPath' to facilitate the interconnection of files
 */
define("ptxc_MainPath",plugin_dir_path(__DIR__));

//The 'static_Resources' consumes all runtime code
require_once  ptxc_MainPath.'source/hook/generator/pipe/staticResources.php';
use ptxc_staticResources as ptxc_sr;
new ptxc_sr\ptxc_static_Resources();

