<?php
namespace ptxc_admin_initial{
    require_once(ptxc_MainPath.'source/hook/intro.php');
    require_once(ptxc_MainPath.'source/hook/configuration.php');
    use Exception;
    use ptxc_intro;
    use ptxc_config;

    class ptxc_initialize{

        const Admin_css = ptxc_MainUrl."/source/content/css/";
        const Admin_js = ptxc_MainUrl."/source/content/vendor/js/";
        public $intro ;
        public $config ;
        /**
         * This initialize class calls a functionality that runs on the administrator side
         */
        public function __construct(){
            
            $this->intro = new ptxc_intro\ptxc_intro();
            $this->config = new ptxc_config\ptxc_configuration();
            add_action( 'admin_head', array($this,'ptxc_my_custom_dashicons'));
            add_action( 'admin_menu', array($this,'ptxc_tax_calculator_menu') );
	        add_action( 'admin_enqueue_scripts', array($this,'ptxc_tax_calculator_admin_enque'),100 );
            add_action( 'admin_post_calc_config', array($this,'ptxc_activationFunction') );
            add_action( 'admin_post_nopriv_calc_config', array($this,'ptxc_activationFunction') );
            add_action( 'admin_footer', array($this,'ptxc_loaderforloading') );

        }
        function ptxc_my_custom_dashicons() {
            wp_enqueue_style( 
                'ptxc_my_custom_dashicons'
                , $this::Admin_css.'ptxc-style.css'
                ,array(),
                wp_get_theme()->get('Version') 
            );

            wp_add_inline_style( 'ptxc_my_custom_dashicons', '.dashicons-ptc {
                display: inline-block;
                width: 20px;
                height: 36px;
                --svg: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3E%3Cpath fill=\'%23000\' d=\'M15 2H5c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1M6.5 16.8c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2s1.2.6 1.2 1.2s-.5 1.2-1.2 1.2m0-3.6c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2s1.2.6 1.2 1.2s-.5 1.2-1.2 1.2m0-3.4c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2s1.2.6 1.2 1.2s-.5 1.2-1.2 1.2m3.5 7c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2s1.2.6 1.2 1.2s-.5 1.2-1.2 1.2m0-3.6c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2s1.2.6 1.2 1.2s-.5 1.2-1.2 1.2m0-3.4c-.7 0-1.2-.6-1.2-1.2s.5-1.4 1.2-1.4s1.2.6 1.2 1.2s-.5 1.4-1.2 1.4m4.8 5.7c0 .7-.6 1.2-1.2 1.2s-1.2-.6-1.2-1.2V12c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2zm-1.3-5.7c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2s1.2.6 1.2 1.2s-.5 1.2-1.2 1.2M15 6.4H5V3h10z\'/%3E%3C/svg%3E");
                background-color: currentColor;
                -webkit-mask-image: var(--svg);
                mask-image: var(--svg);
                -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
                -webkit-mask-size: 100% 100%;
                mask-size: 100% 100%;
                margin-top: 8px !important;
            }
            .ptxc-ptc-menu{
                display: flex !important;
                align-items: center;
            }
            .ptxc-ptc-menu .wp-menu-name{
                padding-left:5px !important;
            }');
             
        }
        
       
        /**
         * This function is being used to register the plugin in the admin menu
         */
        public function ptxc_tax_calculator_menu(){
            add_menu_page('Pakistan Tax Calculator introduction', 'Pakistan Tax Calculator', 'administrator','ptxc_intro', array($this,'ptxc_intro_tax_calculator_view'), "dashicons-ptc" );
		    if ($this->config->ptxc_count_all_calculator() > 0) {
                add_submenu_page('ptxc_intro','Pakistan Tax Calculator introduction', 'Intro', 'administrator', 'ptxc_intro',  array($this,'ptxc_intro_tax_calculator_view') );
		        add_submenu_page('ptxc_intro','Pakistan Tax Calculator configuration', 'Configuration', 'administrator', 'ptxc_configuration',  array($this,'ptxc_config_tax_calculator_view') );
            }
        }
        /**
         * This function is being used to enqueue CSS and JavaScript in the admin panel
         */
        public function ptxc_tax_calculator_admin_enque($hook){
            wp_enqueue_style( 
                'ptxc_admin_main_styles'
                , $this::Admin_css.'main-admin.css'
                ,array(),
                wp_get_theme()->get('Version')  
            );

            if( !strpos( $hook, "txc" )){
                return;
            }
            wp_enqueue_style( 
                'ptxc_admin_styles'
                , $this::Admin_css.'admin.css'
                ,array(),
                wp_get_theme()->get('Version')  
            );
            wp_enqueue_style('dashicons');
            wp_enqueue_script( 'ptxc_admin_scripts', $this::Admin_js.'admin.js', array( 'jquery' ), '0.5.1', true );
            
            if ('pakistan-tax-calculator_page_ptxc_configuration' == $hook){
                wp_enqueue_style( 
                    'ptxc_admin_configuration_styles'
                    , $this::Admin_css.'admin-configuration.css'
                    ,array(),
                    wp_get_theme()->get('Version')
                );
                wp_enqueue_script( 'ptxc_admin_configuration_scripts', $this::Admin_js.'admin-configuration.js', array( 'jquery' ), '0.5.1', true );
                wp_localize_script(
                    'ptxc_admin_configuration_scripts',
                    'ptxc_ajax',
                    array(
                        'ajax_url' => admin_url('admin-ajax.php')
                        ,'nonce' => wp_create_nonce('ptxc_activation_calculator_nonce')
                    )
                );
                wp_add_inline_style( 
                    'ptxc_calcDetail',
                    '.ptxc-search{
                        align-items: baseline;
                    }
                    .ptxc-floating-input, .ptxc-floating-select {
                        width: 100%;
                    }
                    .ptxc-box-heading-without-ribbon {
                        width: calc(100% - 5px);
                        padding-left: 5px;
                    }
                    .ptxc-main-box {
                        padding-bottom: 20px;
                        height: auto;
                    }'
                );
            }
        }
        /**
         * This function is being used to display the introduction page of the plugin
         */
        public function ptxc_intro_tax_calculator_view(){
            require_once(ptxc_MainPath.'views/intro.php');
        }

        /**
         * This function is used to display 2 pages, 
         * the first being the configuration page 
         * and the second being the calculator detail page
         */
        public function ptxc_config_tax_calculator_view(){
            
            // Verify nonce to ensure security
            if ( isset( $_GET['_wpnonce'] ) && wp_verify_nonce( sanitize_text_field( wp_unslash($_GET['_wpnonce'])), 'ptxc_configuration_nonce' ) ) {
                // Process the GET parameter if nonce is verified
                if ( isset( $_GET["ptxc_id"] ) ) {
                    $ptxc_id = sanitize_key( $_GET["ptxc_id"] );
                    
                    // Ensure that ptxc_id is a valid integer
                    if ( !is_null( $ptxc_id ) && filter_var( $ptxc_id, FILTER_VALIDATE_INT ) !== false ) {
                        $calc = $this->config->ptxc_get_calculator( $ptxc_id );
                        require_once( ptxc_MainPath . 'views/calcDetail.php' );
                    } else {
                        $calc_grp_lst = $this->config->ptxc_Get_Calc_Grp_List();
                        require_once( ptxc_MainPath . 'views/configuration.php' );
                    }
                } else {
                    $calc_grp_lst = $this->config->ptxc_Get_Calc_Grp_List();
                    require_once( ptxc_MainPath . 'views/configuration.php' );
                }
            } else {
                $calc_grp_lst = $this->config->ptxc_Get_Calc_Grp_List();
                require_once( ptxc_MainPath . 'views/configuration.php' );
            }
            
        }

        /**
         * This function is being used for plugin configuration
         */
        public function ptxc_activationFunction() {
            if (!isset($_POST['ptxc_calculator_activation_nonce']) || wp_verify_nonce(sanitize_text_field( wp_unslash($_POST['ptxc_calculator_activation_nonce'])), 'calc_config')){
                $this->ptxc_Create_tax_group_table();
                $this->ptxc_Create_tax_table();
                wp_redirect( admin_url( 'admin.php?page=ptxc_configuration') );
                exit;
            }
            echo 'invalid Request';
            exit;
        }
        
        /**
         * This function provides HTML for the plugin loader
         */
        public function ptxc_loaderforloading(){
            ?>
                <div class="ptxc_ring_outer" id="ptxc_main_loader" style="display: none;">
                    <div class="ptxc_ring" >
                    Loading...
                    <span></span>
                </div></div>
            <?php
        }
        
        /**
         * This function is for creating or updating a plugin JSON file
         */
        public function ptxc_getJsonByFileName($filename) {
            $json_str = file_get_contents(ptxc_MainPath."source/content/template/json/".$filename,true);
            if(!is_null(json_decode($json_str))){
                return $json_str;
            }
            return "only json value allowed";
        }

        /**
        * This function creates a table for the calculator in the database and adds data to it
        */
        public function ptxc_Create_tax_table() { 
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator';
            $charset_collate = $wpdb->get_charset_collate();
            $sql = "CREATE TABLE IF NOT EXISTS ".$wpdb->prefix . "tax_calculator (
                id BIGINT(20) NOT NULL AUTO_INCREMENT,
                ptxc_tag VARCHAR(255),
                ptxc_heading VARCHAR(255) NOT NULL,
                ShortCode VARCHAR(255) NOT NULL,
                ptxc_desc LONGTEXT NOT NULL,
                ptxc_status VARCHAR(255) NOT NULL,
                ptxc_auth_key VARCHAR(255) NOT NULL,
                grp_auth_key VARCHAR(255) NOT NULL,
                rules LONGTEXT NOT NULL,
                is_multi_shortcode INT(1) NOT NULL,
                PRIMARY KEY (id)
            ) $charset_collate;";
            require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
            dbDelta($sql);
            if (!$this->config->ptxc_tableCalculatorExist()) {
                $GRP = $this->ptxc_Get_Calc_lst();
                foreach ($GRP as $item) {
                    $wpdb->insert($table_name, $item);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                }
            }
        }
        /**
         * This function makes an API call for get calculator data from publisher
         */
        public function ptxc_Get_Calc_lst(){
            $GRP = array();
            $GRP_temp = array();
            $GRP_temp[0] = array('ShortCode' => 'salary_income','rules' => $this->ptxc_getJsonByFileName(md5("Salary Income").'.json'),'is_multi_shortcode' => 1, 'ptxc_tag' => '','ptxc_heading' => 'Salary Income','ptxc_desc' => 'The Tax Income Calculator is like a helpful friend that makes figuring out your taxes easy. It is a simple tool made for people to guess how much they might owe in taxes based on how much money they make and the tax rules. You just have to put in details like your yearly earnings, if you are single or married, any deductions you have, and any special credits you might get. The calculator then quickly gives you an idea of how much you might owe or get back as a refund. It looks at things like tax rates, standard or special deductions, personal exemptions, and tax credits to make its guess. This nifty tool is great for planning your money, making smart choices, and getting ready for tax time without any stress. It is a handy way to see what you might owe in taxes, so you can stay on top of your money game.','ptxc_status' => 'active','ptxc_auth_key' => md5('Salary Income'),'grp_auth_key' => md5('Income Tax Calculators'));
            $GRP_temp[1] = array('ShortCode' => 'business_income','rules' => $this->ptxc_getJsonByFileName(md5("Business Income").'.json'),'is_multi_shortcode' => 1, 'ptxc_tag' => '','ptxc_heading' => 'Business Income','ptxc_desc' => 'The Business Tax Calculator is like a super-smart assistant for businesses. It helps them figure out exactly how much they might owe in taxes. This calculator is made specifically for businesses and considers things like how much money the company makes, the costs it has, any special things it can deduct, and the tax rates that apply. Business owners just need to put in their financial info, and the calculator quickly tells them an estimate of how much they might have to pay in taxes. It is easy to use and helps businesses make smart money decisions, plan their budgets well, and make sure they follow all the tax rules. Whether it is a big corporation, a partnership, or a single owner business, the Business Tax Calculator makes the tricky job of figuring out taxes simple, so businesses can focus on growing and being successful.','ptxc_status' => 'active','ptxc_auth_key' => md5('Business Income'),'grp_auth_key' => md5('Income Tax Calculators'));
            $GRP_temp[2] = array('ShortCode' => '','rules' => $this->ptxc_getJsonByFileName(md5("Corporate Tax Rate").'.json'),'is_multi_shortcode' => 0, 'ptxc_tag' => 'Pro','ptxc_heading' => 'Corporate Tax Rate','ptxc_desc' => 'The Company Annual Income Tax Calculator is like a helpful assistant for businesses. It is an easy-to-use and strong tool made just for companies. With this tool, businesses can guess how much tax they might have to pay based on how much money they make in a year. They just need to put in some financial info, like how much they earn, what they can deduct, any special tax benefits, and the tax rates for companies. Then, the calculator quickly tells them an estimate of how much tax they might owe. It is a useful tool that helps businesses make smart money choices, plan their budgets well, and follow the tax rules. Whether it is a small startup or a big company, this calculator makes the hard job of figuring out corporate taxes easy, so businesses can focus on growing and being successful while also planning their taxes smartly.','ptxc_status' => 'active','ptxc_auth_key' => md5('Corporate Tax Rate'),'grp_auth_key' => md5('Income Tax Calculators'));
            $GRP_temp[3] = array('ShortCode' => '','rules' => $this->ptxc_getJsonByFileName(md5("Super Tax").'.json'),'is_multi_shortcode' => 0, 'ptxc_tag' => 'Pro','ptxc_heading' => 'Super Tax','ptxc_desc' => 'The High Income Annual Tax Calculator is a smart and easy-to-use tool made for people who earn a lot of money. It helps them figure out how much tax they might have to pay based on their yearly earnings. All they need to do is put in some important financial details, like their total income, deductions, any special tax benefits, and the tax rates that apply to them. Once they enter this info, the calculator quickly gives them an estimate of how much tax they might owe. This tool is super useful for high earners to make wise money decisions, plan for their taxes, and make sure they are following all the tax rules. Whether you are a seasoned executive or a successful entrepreneur, this calculator makes the tough job of figuring out taxes easy, so you can focus on your financial goals and plan your taxes smartly.','ptxc_status' => 'active','ptxc_auth_key' => md5('Super Tax'),'grp_auth_key' => md5('Income Tax Calculators'));
            $GRP_temp[4] = array('ShortCode' => '','rules' => $this->ptxc_getJsonByFileName(md5("Agricultural Land Tax").'.json'),'is_multi_shortcode' => 0, 'ptxc_tag' => 'Pro','ptxc_heading' => 'Agricultural Land Tax','ptxc_desc' => 'The Agricultural Land Tax calculator quickly figures out how much tax you owe for your farmland. It does this by looking at the value of your land and the current tax rates. This easy-to-use tool is great for farmers and landowners, making it simple to understand and plan for your taxes. It brings transparency and accuracy to the tax assessment process, helping you make smart financial decisions in the agricultural sector.','ptxc_status' => 'active','ptxc_auth_key' => md5('Agricultural Land Tax'),'grp_auth_key' => md5('Agriculture Tax Calculators'));
            $GRP_temp[5] = array('ShortCode' => '','rules' => $this->ptxc_getJsonByFileName(md5("Agricultural Income Tax").'.json'),'is_multi_shortcode' => 0, 'ptxc_tag' => 'Pro','ptxc_heading' => 'Agricultural Income Tax','ptxc_desc' => 'The Agricultural Income Tax calculator is an easy way to figure out how much tax you might owe if you are a farmer. You just need to put in how much money you make from farming each year, and the calculator uses the current tax rules to estimate how much tax you might have to pay. It looks at things like the size of your land, how much you harvest, and the money you make from farming. It also considers any special deductions or exemptions related to farming income. This tool makes it simple to calculate the tax on your agricultural income, ensuring that the calculations are accurate and follow the rules for people in the farming sector.','ptxc_status' => 'active','ptxc_auth_key' => md5('Agricultural Income Tax'),'grp_auth_key' => md5('Agriculture Tax Calculators'));
            $GRP_temp[6] = array('ShortCode' => 'capital_gain_on_securities','rules' => $this->ptxc_getJsonByFileName(md5("Capital Gain on Securities").'.json'),'is_multi_shortcode' => 0, 'ptxc_tag' => '','ptxc_heading' => 'Capital Gain on Securities','ptxc_desc' => 'The Capital Gain Securities Tax calculator is like a helpful tool for investors. It helps them figure out how much tax they have to pay on the money they make when they sell things like stocks, bonds, or real estate. This calculator looks at things like how long they have held onto the investment, how much they bought it for, and how much they sold it for to calculate the profits. It is useful for investors to know how much tax they owe on the money they make from their investments, so they can plan their money better. The calculator might also give them tips on how to save on taxes, like selling investments that have lost value or holding onto things for a longer time to get lower tax rates. In short, this tool makes the tricky job of figuring out taxes on investment gains easy, helping investors make smart money choices.','ptxc_status' => 'active','ptxc_auth_key' => md5('Capital Gain on Securities'),'grp_auth_key' => md5('Capital Gain Tax Calculators'));
            $GRP_temp[7] = array('ShortCode' => 'capital_gain_on_funds','rules' => $this->ptxc_getJsonByFileName(md5("Capital Gain on Funds").'.json'),'is_multi_shortcode' => 0, 'ptxc_tag' => '','ptxc_heading' => 'Capital Gain on Funds','ptxc_desc' => 'Capital gain mutual fund tax is about the taxes you might have to pay on the money you make from investing in mutual funds. This usually happens when you sell or cash in your mutual fund shares. The money you make can be considered short-term or long-term gains, depending on how long you have kept your investment. There are different tax rates for these two types of gains. To pay less in taxes and get more money from your investments, some people use special accounts that have tax benefits. It is important to think about these tax rules when you are taking care of your mutual fund investments.','ptxc_status' => 'active','ptxc_auth_key' => md5('Capital Gain on Funds'),'grp_auth_key' => md5('Capital Gain Tax Calculators'));
            $GRP_temp[8] = array('ShortCode' => 'capital_gain_on_properties','rules' => $this->ptxc_getJsonByFileName(md5("Capital Gain on Properties").'.json'),'is_multi_shortcode' => 0, 'ptxc_tag' => '','ptxc_heading' => 'Capital Gain on Properties','ptxc_desc' => 'Capital gains tax on properties is a tax you have to pay on the money you make when you sell a house or a business space. If you sell the property for more money than what you paid for it, that extra money is called a capital gain, and you might have to pay tax on it. Different countries have different rules about how much tax you have to pay and if there are any special cases where you do not have to pay. Some places even have different tax rates depending on how long you have owned the property, encouraging people to keep their investments for a longer time. People who own properties often use smart money strategies to pay less tax while still following the local rules.','ptxc_status' => 'active','ptxc_auth_key' => md5('Capital Gain on Properties'),'grp_auth_key' => md5('Capital Gain Tax Calculators'));
            $GRP = $GRP_temp;
            return $GRP;
        }
        /**
        * This function creates a table for the calculator group in the database and adds data to it
        */
        function ptxc_Create_tax_group_table(){
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator_group';
            
                $charset_collate = $wpdb->get_charset_collate();
                $sql = "CREATE TABLE IF NOT EXISTS ".$wpdb->prefix . "tax_calculator_group (
                    id INT(20) NOT NULL AUTO_INCREMENT,
                    ptxc_heading VARCHAR(255) NOT NULL,
                    ptxc_config_desc LONGTEXT NOT NULL,
                    ptxc_shortcode_desc LONGTEXT NOT NULL,
                    group_auth_key VARCHAR(255) NOT NULL,
                    PRIMARY KEY (id)
                ) $charset_collate;";

                require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
                dbDelta($sql);
                if (!$this->config->ptxc_tabletax_calculator_groupExist()) {
                    $GRP = $this->ptxc_Get_Calc_Groups();
                    foreach ($GRP as $item) {
                        $wpdb->insert($table_name,$item);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                    }
                }
        }
        /**
         * This function makes an API call for get calculator group data from publisher
         */
        public function ptxc_Get_Calc_Groups() {
            $GRP = array();
            $GRP_temp = array();
            $GRP_temp[0] = array('ptxc_heading' => 'Income Tax Calculators','ptxc_config_desc' => 'The activation and deactivation of an Income Tax Calculator as a WordPress plugin feature are crucial aspects of its functionality. Deactivation, on the other hand, removing its functionality from the website, which can be useful for troubleshooting or temporarily removing the calculator.','group_auth_key' => md5('Income Tax Calculators'),'ptxc_shortcode_desc' => 'Introducing our Tax Calculator Plugin featuring dynamic shortcodes for simplified income tax management on your website. Seamlessly integrate this plugin for users to calculate income tax obligations directly on your site. Customizable, user-friendly, and compliant with tax regulations, it offers real-time calculations, enhancing financial planning while safeguarding sensitive data, making it an invaluable addition to your website.');
            $GRP_temp[1] = array('ptxc_heading' => 'Agriculture Tax Calculators','ptxc_config_desc' => 'Activate and deactivate the Tax Calculator within our plugin, providing essential functionality to agricultural businesses. Integration is seamless, enabling users to compute tax obligations conveniently. Deactivation offers flexibility for maintenance or when the tool isn\'t required, empowering efficient tax management for accurate financial planning and compliance. Harness the versatility of our Tax Calculator Plugin for agricultural stakeholders.','group_auth_key' => md5('Agriculture Tax Calculators'), 'ptxc_shortcode_desc' => 'Simplify agricultural taxation with our Tax Calculator Plugin convenient shortcodes. Seamlessly integrate them into your website, offering farmers and businesses a customizable tool for tax calculations. Users get real-time estimates, aiding financial planning, all while ensuring data security and compliance, making tax management in agriculture effortless.');
            $GRP_temp[2] = array('ptxc_heading' => 'Capital Gain Tax Calculators','ptxc_config_desc' => 'Activate and deactivate the Capital Gain Tax Calculator integrated as a plugin, essential for investors and professionals. Seamless integration simplifies tax calculations. Deactivation offers flexibility for updates or when not needed, ensuring precise financial planning and tax compliance, highlighting the convenience of our Tax Calculator Plugin.','group_auth_key' => md5('Capital Gain Tax Calculators'), 'ptxc_shortcode_desc' => 'Enhance your website\'s financial capabilities with our Tax Calculator Plugin\'s versatile shortcodes. Seamlessly integrate them, providing users a customizable tool for effortless capital gains tax calculation. Real-time estimates aid informed financial decisions, prioritizing compliance and security for a reliable and user-friendly addition to your site.');
            $GRP = $GRP_temp;
            return $GRP;
        }
        
        
        /**
         * This function is fetching calculator group data from the database based on the Authorization key 
         */
        public function ptxc_get_calculator_grp_by_auth_key($key) {
            $key = sanitize_key($key);
            global $wpdb;
            $table_name = $wpdb->prefix . 'tax_calculator_group';
            if($this->config->ptxc_tabletax_calculator_groupExist()) {
                $results = $wpdb->get_results($wpdb->prepare("SELECT * FROM ". $wpdb->prefix . "tax_calculator_group Where group_auth_key = %s", $key) , OBJECT);  // phpcs:ignore WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.SchemaChange
                if(count($results) > 0)
                    return $results[0];
            }
            return null;
        }
    }
}


