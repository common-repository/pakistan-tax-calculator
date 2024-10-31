<?php
namespace ptxc_config{

    use Exception;

    class ptxc_Configuration {
        /**
         * This class is being used for the configuration page of the plugin
         */
        public function __construct() {
            add_action('wp_ajax_ptxc_active_checkbox',array($this,'ptxc_active_checkbox'));
            add_action('wp_ajax_nopriv_ptxc_active_checkbox',array($this,'ptxc_active_checkbox'));
        }
        /**
         * This function fetches the calculator list from the database
         */
        public function ptxc_showdata() {
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator';
            if($this->ptxc_tableCalculatorExist()){
                $results = $wpdb->get_results("SELECT * FROM " . $wpdb->prefix . "tax_calculator" , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                return $results;
            } else {
                return array();
            }
        }
        /**
         * This function checks whether prefix_tax_calculator table exists in the database or not
         */
        public function ptxc_tableCalculatorExist(){
            try {
                global $wpdb;
                if($wpdb->get_var("SHOW TABLES LIKE '".$wpdb->prefix . "tax_calculator'") == $wpdb->prefix . "tax_calculator") // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                {
                    $results = $wpdb->get_results("SELECT * FROM  ".$wpdb->prefix . "tax_calculator Limit 1" , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                    if(!empty($results)){
                        return $results[0]->id > 0;
                    }
                }
                
            } catch (Exception $e) { }
            return false;
        }
        /**
         * This function checks whether prefix_tax_calculator_group table exists in the database or not
         */
        public function ptxc_tabletax_calculator_groupExist(){
            try {
                global $wpdb;
                if($wpdb->get_var("SHOW TABLES LIKE '".$wpdb->prefix . "tax_calculator_group'") == $wpdb->prefix . "tax_calculator_group") // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                {
                    $results = $wpdb->get_results("SELECT * FROM  ".$wpdb->prefix . "tax_calculator_group Limit 1" , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                    if(!empty($results)){
                        return $results[0]->id > 0;
                    }
                }
                
            } catch (Exception $e) { }
            return false;
        }
        /**
         * This function fetches the active calculator list from the database
         */
        public function ptxc_get_active_calculator() {
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator';
            if($this->ptxc_tableCalculatorExist()){
                $results = $wpdb->get_results("SELECT * FROM ".$wpdb->prefix . "tax_calculator_group Where ptxc_status = 'active'" , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                return $results;
            }
        }
        /**
         * This function fetches the first active calculator from the database
         */
        public function ptxc_get_first_active_calculator() {
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator';
            if($this->ptxc_tableCalculatorExist()){
                $results = $wpdb->get_results("SELECT * FROM ".$wpdb->prefix . "tax_calculator Where ptxc_status = 'active' LIMIT 1" , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                return $results;
            } else {
                return array();
            }
        }
        /**
         * This function retrieves calculator data from the database based on the ID
         */
        public function ptxc_get_calculator($id) { 
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator';
            if($this->ptxc_tableCalculatorExist() && filter_var($id,FILTER_VALIDATE_INT)  !== false){
                $results = $wpdb->get_results($wpdb->prepare("SELECT * FROM ".$wpdb->prefix . "tax_calculator Where id = %d", $id) , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                if(count($results) > 0)
                    return $results[0];
            }
            return null;
        }

        /**
         * This function retrieves calculator data from the database based on the calculator group Authorization key
         */
        public function ptxc_GetCalcByGRPKey($key) {
            $key = sanitize_key($key);
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator';
            if($this->ptxc_tableCalculatorExist()){
                $results = $wpdb->get_results($wpdb->prepare("SELECT id,ptxc_tag,ptxc_heading,ptxc_desc,ptxc_status,ShortCode,is_multi_shortcode FROM ".$wpdb->prefix . "tax_calculator Where grp_auth_key = %s", $key) , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                return $results;
            } else {
                return array();
            }
        }


        public function ptxc_Get_Calc_Grp_List() {
            global $wpdb;
            $table_name_grp = $wpdb->prefix . 'tax_calculator_group';
            $table_name = $wpdb->prefix . 'tax_calculator';
        
            // Check if the tables exist
            if ($this->ptxc_tableCalculatorExist() && $this->ptxc_tabletax_calculator_groupExist()) {
                // Execute the query
                $results = $wpdb->get_results("SELECT * FROM  ".$wpdb->prefix . "tax_calculator_group", OBJECT);   // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
        
                return $results;
            } else {
                return array();
            }
        }
        
        /**
         * This function retrieves the active calculator count from the database
         */
        public function ptxc_count_active_calculator() {
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator';
            if($this->ptxc_tableCalculatorExist()){
                $results = $wpdb->get_results("SELECT count(*) as totalcalc FROM ".$wpdb->prefix . "tax_calculator Where ptxc_status = 'active'" , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                return $results;
            } else {
                return array();
            }
        }
        /**
         * This function retrieves the  calculator count from the database
         */
        public function ptxc_count_all_calculator() {
            try {
                global $wpdb;
                $table_name = $wpdb->prefix . 'tax_calculator';
                if ($this->ptxc_tableCalculatorExist()) {
                    $results = $wpdb->get_results("SELECT count(*) as totalcalc FROM ".$wpdb->prefix . "tax_calculator " , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                    if(!is_null($results) && !empty($results) && count($results) > 0){
                        return $results[0]->totalcalc;
                    }
                }
            } catch (Exception $th) { }
            return 0;
        }
        /**
         * This function is being used to change the status of the calculator from database
         */
        function ptxc_active_deactive_calc( $id , $status){
            $status = sanitize_title($status);
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator';
            if($this->ptxc_tableCalculatorExist()  && filter_var($id,FILTER_VALIDATE_INT)  !== false&& ($status == "active" || $status == "deactive")){
                $results = $wpdb->update($table_name, array('ptxc_status'=>$status), array('id'=>$id));  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                return esc_html($results);
                exit;
            } else {
                echo "0";
                exit;
            }
        }
        /**
         * This function is being used to change the status and Get Post data from plugin UI  
         */
        public function ptxc_active_checkbox(){
            check_ajax_referer('ptxc_activation_calculator_nonce', 'nonce');
            if (!isset($_POST['ptxc_activation_calculator_nonce']) || wp_verify_nonce(sanitize_text_field( wp_unslash($_POST['ptxc_activation_calculator_nonce'])), 'ptxc_active_checkbox')){
                if(isset($_POST['ptxc_id']) && isset($_POST['ptxc_status'])){
                    $ptxc_id = sanitize_title(wp_unslash($_POST['ptxc_id']));
                    $ptxc_status = sanitize_title(wp_unslash($_POST['ptxc_status']));
                    if(filter_var($ptxc_id,FILTER_VALIDATE_INT)  !== false && ($ptxc_status == "active" || $ptxc_status == "deactive")){
                        $this->ptxc_active_deactive_calc($ptxc_id,$ptxc_status);
                    }
                }
            }
        }
    }

}
?>