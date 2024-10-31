<?php
/**
 * Plugin Name:       Pakistan Tax Calculator
 * Plugin URI:        https://paktaxcalculator.pk/pakistan-tax-calculator-plugin
 * Description:       Calculate different Taxes.
 * Version:           0.5.4
 * Requires at least: 6.5.1
 * Requires PHP:      7.0
 * Author:            Techup Solutions 
 * Author URI:        https://paktaxcalculator.pk/
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

if (!defined('ABSPATH')) { exit; }
if (!defined("WPINC")) { die; }

/**
 * The ptxc_MainUrl constant is used to attach the assets file
 */

 define('ptxc_MainUrl',plugin_dir_url(__FILE__));

/**
 * Welcome to Pakistan Tax Calculator
 * If you are reading this, you probably have an idea about programming.
 * This is perfect. We have used PHP OOP in this plugin. 
 * Its structure is designed similar to MVVM.
 */

// The absolute path to the main file of this plugin.
require_once plugin_dir_path(__FILE__).'config/ptxc-initilizer.php';


