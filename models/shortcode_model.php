<?php 
namespace ptxc_shortcode{
    class ptxc_shortcode_model{
        /**
         * The function is being used to return code from an HTML file based on the name
         */
        public function ptxc_GetShortCodeHtml($authkey) {
            // Sanitize the authkey to ensure it's safe to use
            $authkey = sanitize_key($authkey);
            $url = ptxc_MainUrl . "/source/content/template/html/" . $authkey . '.html';
            // Use wp_remote_get to retrieve the HTML content
            $response = wp_remote_get($url);
            // Check for errors in the response
            if (is_wp_error($response)) {
                return ''; // Handle error appropriately, here we return an empty string
            }
        
            // Get the body content of the response
            $html = wp_remote_retrieve_body($response);
            
            // Sanitize the HTML content
            $allowed_html = ptxc_allowed_html();
            $html = wp_kses($html, $allowed_html);
        
            return $html;
        }
        
    }
    
}