<?php 
namespace ptxc_Web_initial{
use Exception;
    require_once(ptxc_MainPath.'source/hook/shortcode.php');
    use ptxc_shortcode;
    class ptxc_initialize{
        public $shortcode ;
        /**
         * This initialize class calls a functionality that runs on the website side
         */
        public function __construct(){
            $this->shortcode = new ptxc_shortcode\ptxc_shortcode();
        }
        
        
    }
}