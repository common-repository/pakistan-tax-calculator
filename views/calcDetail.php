<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
/**
 * Calculator detail page template
 *
 * @const ptxc_MainUrl
 * @var object $calc
 */
?>
<div class="ptxc-wrapper ptxc-mr-t">
    <div class="ptxc-panel ptxc-pt-3 ptxc-pb-5">
        <div class=" ptxc-div ptxc-div-arround ptxc-div-media">
            <img src="<?php echo esc_url(ptxc_MainUrl.'/source/content/images/'); ?>tax-calculator.svg" class="ptxc-logo" alt="">
        </div>
            
        <div class="ptxc-container">
            <div class="ptxc-row ptxc-div-flex ptxc-div-between ptxc-config-header ptxc-mx">
                <div class="ptxc-col-10 ptxc-main-heading">
                    <div class="ptxc-col-12">
                        <h2><?php echo esc_html($calc->ptxc_heading); ?></h2>
                        <p><?php echo esc_html($calc->ptxc_desc); ?></p>
                    </div>
                </div>
                <div class="ptxc-col-2 ptxc-text-right ptxc-search" >
                    <input type="text" id="ptxc-configuration-search" placeholder="Quick Search" style=" background-image: url('<?php echo esc_url(ptxc_MainUrl.'/source/content/images/'); ?>searchicon.png');">
                </div>
            </div>
            <a href="<?php echo esc_url(admin_url('/admin.php?page=ptxc_configuration')); ?>" class="btn-back">Back to main page</a>
                
            <div class="ptxc-row ptxc-main-row-media ptxc-activation-content ptxc-pt-3">
                <?php
                    $jsonString = json_decode("[".$calc->rules."]");
                    if(!is_null($jsonString) && !empty($jsonString) && !is_null($jsonString[0]->main) && !is_null($jsonString[0]->main->ptxc_main_years)){
                        foreach ($jsonString[0]->main->ptxc_main_years as $calculation_type) {
                            ?>
                                <div class="ptxc-col-4 mr-t-5">
                                    <div class="ptxc-main-box">
                                        <div class="ptxc-row ptxc-box " >
                                            <div class="ptxc-col-12 ptxc-box-heading ptxc-box-heading-without-ribbon" >
                                                <h4><?php echo esc_html($calc->ptxc_heading) .' for '.esc_html($calculation_type->year); ?> </h4>
                                            </div>
                                            <div class="ptxc-box-heading-without-ribbon">
                                                <label><b>Short Code : </b></label>
                                                <div class="ptxc-col-12 ptxc-floating-label-content ptxc-input-grp ">
                                                        <input class="ptxc-formcontrol ptxc-floating-input ptxc-copyinput" value='<?php echo "[".esc_html($calc->ShortCode)." index=\"".esc_html($calculation_type->year)."\"]"; ?>' readonly />
                                                        <button class="ptxc-btn ptxc-btn-default ptxc-btn-copy ptxc-floating-btn">Copy</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            <?php
                        }
                    }
                ?>
            </div>
        </div>
    </div>
</div>
  








