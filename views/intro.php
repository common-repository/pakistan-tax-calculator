<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
/**
 * Introduction page template
 *
 * @const ptxc_MainUrl
 */
?>
<div class="ptxc-wrapper">
    <div class="ptxc-div-flex ptxc-mr-t-1">
        <image src="<?php echo esc_url(ptxc_MainUrl.'/source/content/images/'); ?>tax-calculator.svg" class="ptxc-logo" alt="Tax Calculator" />
    </div>
    <div class="ptxc-panel ptxc-intor-div ptxc-mr-t-1">
        <div class="ptxc-intor">
            <h1>Welcome to our Pakistan Tax Calculator</h1>
            <p>Welcome to our Pakistan Tax Calculator! We understand that navigating the complexities of taxes can be a daunting task. Whether you're an individual looking to estimate your income tax liability or a business seeking to calculate your tax obligations accurately, our Pakistan Tax Calculator plugin is here to simplify the process for you. Designed with user-friendliness in mind, this tool aims to provide a hassle-free experience, allowing you to input relevant financial details and quickly receive estimates. Take control of your financial planning, make informed decisions, and confidently approach tax season with our intuitive Pakistan Tax Calculator at your fingertips.</p>
            <p>After activating your Pakistan Tax Calculator plugin, click on the "Go to Configuration" button. You will now have access to all tax calculator shortcodes. To use a calculator, ensure your Status switch button is enabled. Then, click on the copy button. Next, go to your page editor, insert a shortcode widget, paste the shortcode, and save the page. For additional details on calculators and shortcodes, click the "Read More" button or "Click here for details" link.</p>
        </div>
    </div>
    <?php 
        if($this->config->ptxc_count_all_calculator() == 0){
            ?>
                <div class="ptxc-div-flex ptxc-mr-t-1">
                    <form action="<?php echo esc_url(admin_url( 'admin-post.php'));?>" method="post">
                        <?php wp_nonce_field('calc_config', 'ptxc_calculator_activation_nonce'); ?>
                        <input type="hidden" name="action" value="calc_config" />
                        <button type="submit" onclick="ptxc_loader_toggle();"  class="ptxc-btn-config ptxc-mr-t-1">Go to configuration</button>
                    </form>
                </div>
            <?php
        }
    ?>
</div>
       