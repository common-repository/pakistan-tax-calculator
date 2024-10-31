<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
/**
 * Configuration page template
 *
 * @const ptxc_MainUrl
 * @var int $grp_index
 * @var Array $calc_grp_lst
 * @var Array $calc_lst
 * @var int $ptxc_id
 * @var string $ptxc_tag
 * @var string $ptxc_heading
 * @var string $ptxc_description
 * @var string $ptxc_status
 * @var string $ptxc_shortcode
 * @var bool $ptxc_multi_shortcode
 */
?>
<div class="ptxc-wrapper ptxc-mr-t">
    <div class="ptxc-panel ptxc-pt-3 ptxc-pb-5">
        <div class=" ptxc-div ptxc-div-arround ptxc-div-media">
            <img src="<?php echo esc_url(ptxc_MainUrl.'/source/content/images/'); ?>tax-calculator.svg" class="ptxc-logo" alt="">
        </div>
        <?php 
            $grp_index = 0;
            foreach ($calc_grp_lst as $grp) { 
                ?>
                <div class="ptxc-container">
                    <div class="ptxc-row ptxc-div-flex ptxc-div-between ptxc-config-header ptxc-mx">
                        <?php 
                            if($grp_index == 0){
                                ?>
                                    <div class="ptxc-col-10 ptxc-main-heading">
                                        <div class="ptxc-col-12">
                                            <h2><?php echo esc_html($grp->ptxc_heading); ?></h2>
                                            <p><?php echo esc_html($grp->ptxc_config_desc); ?></p>
                                        </div>
                                    </div>
                                    <div class="ptxc-col-2 ptxc-text-right ptxc-search" >
                                        <input type="text" id="ptxc-configuration-search" placeholder="Quick Search" style=" background-image: url('<?php echo esc_url(ptxc_MainUrl.'/source/content/images/'); ?>searchicon.png');">
                                    </div>
                                    
                                <?php
                            }
                            else{
                                ?>
                                    <div class="ptxc-col-12 ptxc-main-heading">
                                        <div class="ptxc-col-12">
                                            <h2><?php echo esc_html($grp->ptxc_heading); ?></h2>
                                            <p><?php echo esc_html($grp->ptxc_config_desc); ?></p>
                                        </div>
                                    </div>
                                    
                                <?php
                            }
                            $grp_index++;
                        ?>
                    </div>
                        
                    <div class="ptxc-row ptxc-main-row-media ptxc-activation-content ptxc-pt-3">
                        <?php
                            $calc_lst = $this->config->ptxc_GetCalcByGRPKey($grp->group_auth_key);

                            foreach ($calc_lst as $ptxc_data) {
                                $ptxc_id = $ptxc_data->id;
                                $ptxc_tag = $ptxc_data->ptxc_tag;
                                
                                $ptxc_heading = $ptxc_data->ptxc_heading;
                                $ptxc_description = $ptxc_data->ptxc_desc;
                                $ptxc_status = $ptxc_data->ptxc_status;
                                $ptxc_shortcode = $ptxc_data->ShortCode;
                                $ptxc_multi_shortcode = $ptxc_data->is_multi_shortcode;
                            ?>
                                <div class="ptxc-col-6 mr-t-5">
                                    <div class="ptxc-main-box">
                                        <div class="ptxc-row ptxc-box " >
                                        <?php
                                            if($ptxc_tag != NULL){
                                            ?>
                                            <div class="ptxc-ribbon ptxc-green"><span><?php echo esc_html($ptxc_tag);?></span></div>
                                        <?php } ?> 
                                            
                                            <?php
                                                if($ptxc_tag != "Pro"){
                                                    ?>
                                                        <div class="ptxc-col-6 ptxc-box-heading <?php  if($ptxc_tag != NULL && $ptxc_tag != "") { echo 'ptxc-pd-l-2 '; } else { echo 'ptxc-box-heading-without-ribbon'; } ?>">
                                                            <h4><?php echo esc_html($ptxc_heading);?></h4>
                                                        </div>
                                                        <div class="ptxc-col-6 ptxc-text-right ptxc-box-switch">
                                                            <span>Status</span>
                                                            <label class="switch">
                                                                <input type="checkbox" id="test-id" ptxc_calc_id="<?php echo esc_html($ptxc_id);?>" value="<?php echo esc_html($ptxc_status);?>">
                                                                <span class="slider round"></span>
                                                            </label>
                                                        </div>
                                                    <?php
                                                }
                                                else{
                                                    ?>
                                                        <div class="ptxc-col-8 ptxc-box-heading <?php  if($ptxc_tag != NULL && $ptxc_tag != "") { echo 'ptxc-pd-l-2 '; } else { echo 'ptxc-box-heading-without-ribbon'; } ?>">
                                                            <h4><?php echo esc_html($ptxc_heading);?></h4>
                                                        </div>
                                                        <div class="ptxc-col-3">
                                                            <button onclick="window.open('https:\/\/paktaxcalculator.pk/pakistan-tax-calculator-plugin/', '_blank');"  class="ptxc-btn ptxc-btn-default ptxc-pull-right">Purchase here</button>
                                                        </div>
                                                    <?php
                                                }

                                                if($ptxc_shortcode != null && $ptxc_shortcode != ""){
                                                    ?>
                                                        <div class="ptxc-col-12 ptxc-floating-label-content ptxc-col-12 ptxc-input-grp">
                                                            <label>Short Code : </label>
                                                            <input class="ptxc-formcontrol ptxc-floating-input ptxc-copyinput" value="<?php echo "[".esc_html($ptxc_shortcode)."]"; ?>" readonly />
                                                            <button class="ptxc-btn ptxc-btn-default ptxc-btn-copy ptxc-floating-btn">Copy</button>
                                                        </div>
                                                    <?php
                                                }
                                            ?>
                                            
                                            
                                            <div class="ptxc-col-12 ptxc-pd-l">
                                                <?php if($ptxc_multi_shortcode == 0){
                                                        if($ptxc_shortcode != null && $ptxc_shortcode != ""){
                                                            ?>
                                                                <div class="ptxc-card ptxc-not-shortcode">
                                                                    <p class="ptxc-paragraph">
                                                                    <?php echo esc_html($ptxc_description);?>
                                                                    </p>
                                                                </div>
                                                            <?php
                                                        } else {
                                                            ?>
                                                                <div class="ptxc-card">
                                                                    <p class="ptxc-paragraph">
                                                                    <?php echo esc_html($ptxc_description);?>
                                                                    </p>
                                                                </div>
                                                            <?php
                                                        } ?>
                                                    
                                                <?php } else { ?>
                                                    <div class="">
                                                        <p class="ptxc-paragraph">
                                                            This calculator have multi short codes. 
                                                            <a href="<?php 
                                                            $nonce_url = wp_nonce_url( add_query_arg( array( 'ptxc_id' => $ptxc_id ), admin_url('/admin.php?page=ptxc_configuration') ), 'ptxc_configuration_nonce' );
                                                            echo esc_url($nonce_url);
                                                            ?>">click here for detail</a>
                                                        </p>
                                                    </div>
                                                <?php }?>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                        <?php
                            }
                        ?>
                    </div>
                </div>
            <?php 
        }
        ?>
    </div>
</div>
  








