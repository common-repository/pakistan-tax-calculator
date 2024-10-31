<?php
namespace ptxc_staticResources{
    class ptxc_static_Resources{
        public function __construct(){

            register_deactivation_hook( ptxc_MainPath.'pakistan-tax-calculator.php', array( $this, 'ptxc_deactivationFunction' ) );
            
            // In the 'ptxc-config.php' file, there is initial runtime code that works with each reload
            require_once(ptxc_MainPath.'config/ptxc-config.php');
            
        }
        /**
         * This function is called during plugin de-activation and also remove plugin custom tables to mysql database
         */
        public function ptxc_deactivationFunction() {
            global $wpdb;
            $wpdb->query("DROP TABLE IF EXISTS ".$wpdb->prefix ."tax_calculator ;");  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
            $wpdb->query("DROP TABLE IF EXISTS ".$wpdb->prefix ."tax_calculator_group ;");  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
        }
        
    }
}
