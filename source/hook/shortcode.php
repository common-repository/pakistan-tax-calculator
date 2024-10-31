<?php
namespace ptxc_shortcode{

    use Exception;

    class ptxc_shortcode {
        const web_css = ptxc_MainUrl."/source/content/css/calc/";
        const web_js = ptxc_MainUrl."/source/content/vendor/js/calc/";
        /**
         * This class is being used to create content for the shortcode of this plugin
         */
        public function __construct() {}
        /**
         * This function is being used to register the content of the shortcode
         */
        public function ptxc_calc_shortcode_tag($atts, $content , $tag){
            
            if($this->ptxc_Is_pugin_active() && !is_null($tag) && !empty($tag)){
                $calc_shortcode = sanitize_title($tag);
                $calc = $this->ptxc_get_calculator_by_shortcode($calc_shortcode);
                if(!is_null($calc) && !empty($calc)){
                    if(!is_null($atts) && !empty($atts) && array_key_exists('index',$atts)){
                        $calc_index = sanitize_title($atts['index']);
                        return $this->ptxc_shortcodeContent($calc, $calc_index);
                    } else {
                        return $this->ptxc_shortcodeContent( $calc,-1 );
                    }
                }
            }
        }
        /**
         * The function is return the content of this shortcode from the database, the calculator HTML file, and enqueuing the CSS and JavaScript files of the shortcode
         */
        public function ptxc_shortcodeContent($calc,$index = ""){
            $ShortCode_HTML = "";
            if(!is_null($calc) && !empty($calc)){
                $newfname = ptxc_MainPath."models/shortcode_model.php";
                $ptxc_auth_key = sanitize_key($calc->ptxc_auth_key);
                wp_enqueue_style( 
					'ptxc_styles' . $ptxc_auth_key,                          // Handle
					$this::web_css . $ptxc_auth_key . '.css',                // Source
					array(),                                                 // Dependencies (empty if none)
					wp_get_theme()->get('Version')    // Version based on file modification time
				);
                
                require_once($newfname);
                $_obj = new ptxc_shortcode_model();
                $ptxc_years_json_obj = json_decode($calc->rules);
                if(!is_null($ptxc_years_json_obj) && !empty($ptxc_years_json_obj)){
                    $year_obj = $ptxc_years_json_obj->main;
                    if(!is_null($year_obj) && !empty($year_obj)){
                        $json_script = wp_json_encode(array_reverse($year_obj->ptxc_main_years));
                        if(!is_null($json_script) && !empty($json_script)){
                            $allowed_html = ptxc_allowed_html();
                            $html = wp_kses($_obj->ptxc_GetShortCodeHtml($ptxc_auth_key), $allowed_html);
                            if($html != ""){
                                $script_version = wp_get_theme()->get('Version');
                                wp_register_script( 'ptxc_js_script_for_json_obj'.esc_attr($ptxc_auth_key), ptxc_MainUrl."/source/content/vendor/js/my-script.js", array(), $script_version, true );
                                wp_enqueue_script( 'ptxc_js_script_for_json_obj'.esc_attr($ptxc_auth_key) );
                                wp_add_inline_script( 'ptxc_js_script_for_json_obj'.esc_attr($ptxc_auth_key), "
                                var ptxc_".esc_attr($ptxc_auth_key)."_json_obj_str = '".$json_script."';
                                ptxc_".esc_attr($ptxc_auth_key)."_json_obj_str = ptxc_".esc_attr($ptxc_auth_key)."_json_obj_str.replace('\\r\\n','').replace('\\\"','\"').replace('\\/','/');
                                var ptxc_".esc_attr($ptxc_auth_key)."_json_obj = JSON.parse(ptxc_".esc_attr($ptxc_auth_key)."_json_obj_str);
                                ", "before");
                                $seconds = microtime(true);
                                $seconds = str_replace('.','',(string) $seconds);

                                $ShortCode_HTML = "<div class='ptxc-content' id='ptxc-tabcontent_$seconds'>$html</div>";
                                if ($index != -1) {
                                    $index = sanitize_title($index);
                                    wp_register_script( 'ptxc_js_script_for_sub_calcultors_'.esc_attr($ptxc_auth_key), ptxc_MainUrl."/source/content/vendor/js/my-script.js", array(), $script_version, true );
                                    wp_enqueue_script( 'ptxc_js_script_for_sub_calcultors_'.esc_attr($ptxc_auth_key) );
                                    wp_add_inline_script( 'ptxc_js_script_for_sub_calcultors_'.esc_attr($ptxc_auth_key), "try {
                                        debugger
                                        var newHiddenInput = document.createElement('input');
                                        newHiddenInput.type = 'hidden';
                                        newHiddenInput.id = 'ptxc_".esc_attr($ptxc_auth_key)."-calculation-years';
                                        newHiddenInput.value = '".esc_attr($index)."';
                                        document.querySelector('#ptxc_".esc_attr($ptxc_auth_key)."-tabcontent_".esc_attr($seconds)." #ptxc_".esc_attr($ptxc_auth_key)."-calculation-years').parentElement.remove();
                                        document.querySelector('#ptxc_".esc_attr($ptxc_auth_key)."-tabcontent_".esc_attr($seconds)." .ptxc_".esc_attr($ptxc_auth_key)."-col-6').appendChild(newHiddenInput);
                                        document.querySelector('#ptxc_".esc_attr($ptxc_auth_key)."-tabcontent_".esc_attr($seconds)." #ptxc_".esc_attr($ptxc_auth_key)."-calculation-years').parentElement.classList.remove('ptxc_".esc_attr($ptxc_auth_key)."-col-6');
                                        document.querySelector('#ptxc_".esc_attr($ptxc_auth_key)."-tabcontent_".esc_attr($seconds)." #ptxc_".esc_attr($ptxc_auth_key)."-calculation-years').parentElement.classList.add('ptxc_".esc_attr($ptxc_auth_key)."-col-12');

                                    } catch(err) {}
                                    try {
                                        var newHiddenInput = document.createElement('input');
                                        newHiddenInput.type = 'hidden';
                                        newHiddenInput.id = 'ptxc_".esc_attr($ptxc_auth_key)."-calcultionType';
                                        newHiddenInput.value = '".esc_attr($index)."';
                                        document.querySelector('#ptxc_".esc_attr($ptxc_auth_key)."-tabcontent_".esc_attr($seconds)." #ptxc_".esc_attr($ptxc_auth_key)."-calcultionType').remove();
                                        document.querySelector('#ptxc_".esc_attr($ptxc_auth_key)."-tabcontent_".esc_attr($seconds)." .ptxc_".esc_attr($ptxc_auth_key)."-col-12').appendChild(newHiddenInput);
                                        document.querySelector('#ptxc_".esc_attr($ptxc_auth_key)."-tabcontent_".esc_attr($seconds)." .ptxc_".esc_attr($ptxc_auth_key)."-col-12').classList.remove('mt-1');
                                    } catch(err) {}", "before" );
                                   
                                }
                                wp_enqueue_script( 'ptxc_scripts'.$ptxc_auth_key, $this::web_js.$ptxc_auth_key.'.js', array( 'jquery' ), '0.5.1', true );
                                $ShortCode_HTML = str_replace('ptxc','ptxc_'.esc_attr($ptxc_auth_key),$ShortCode_HTML);
                                $this->ptxc_removeNewTag($calc);
                                return $ShortCode_HTML;
                            }
                            
                        }
                        
                    }
                }
            }
        }

        /**
         * This function removes the 'New' tag from calculator data in the database
         */
        public function ptxc_removeNewTag($calc){
            if($calc->ptxc_tag == "New" && filter_var($calc->id,FILTER_VALIDATE_INT)  !== false){
                global $wpdb;
                $table_name = $wpdb->prefix . 'tax_calculator';
                if($this->ptxc_tableCalculatorExist()){
                    $table_name = esc_sql($table_name); // Sanitize the table name
                    $calc_id = intval($calc->id);
                    $wpdb->update($table_name,array('ptxc_tag' => ''),array( 'id' => $calc_id ));   // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                }
            }
        }
        /**
         * This function checks whether the plugin is active or not
         */
        public function ptxc_Is_pugin_active(){
            
            return $this->ptxc_tabletax_calculator_groupExist();
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
                
            } catch (Exception $e) {
            }
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
                
            } catch (Exception $e) {
            }
            return false;
        }
        /**
         * This function fetches the calculator list from the database
         */
        public function ptxc_get_all_calculator() {
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator';
            if($this->ptxc_tableCalculatorExist()){
                $results = $wpdb->get_results("SELECT * FROM  ".$wpdb->prefix . "tax_calculator" , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                return $results;
            } else{
                return array();
            }
        }

        /**
         * This function retrieves calculator data from the database based on the Shortcode
         */
        public function ptxc_get_calculator_by_shortcode($shortcode) {
            $shortcode = sanitize_title($shortcode);
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator';
            if($this->ptxc_tableCalculatorExist()){
                $results = $wpdb->get_results($wpdb->prepare("SELECT * FROM ".$wpdb->prefix . "tax_calculator Where ShortCode = %s and ptxc_status = 'active' ", $shortcode) , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                if(count($results) > 0)
                    return $results[0];
            }
            return null;
        }
    }
}