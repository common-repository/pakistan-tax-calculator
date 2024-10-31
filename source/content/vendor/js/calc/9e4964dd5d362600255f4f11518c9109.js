function ptxc_9e4964dd5d362600255f4f11518c9109_Calculators(_elem) {
    debugger
    var elem = document.getElementById(_elem.id);
    var ptxc_9e4964dd5d362600255f4f11518c9109_modal_index = 0;
    var ptxc_9e4964dd5d362600255f4f11518c9109_formula_bar = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109-formula_bar");
    ptxc_9e4964dd5d362600255f4f11518c9109_formula_bar.setAttribute('style','display:none;');
    var ptxc_9e4964dd5d362600255f4f11518c9109_formula_text = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109-formula_text");
    var ptxc_9e4964dd5d362600255f4f11518c9109_Income_obj = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109-income");
    var ptxc_9e4964dd5d362600255f4f11518c9109_year_obj = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109-calculation-years");
    var ptxc_9e4964dd5d362600255f4f11518c9109_calculate_base = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109-calculation-base");
    var ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_link = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_link");
    var ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal");
    var ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_cancel = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109_cancel");
    ptxc_9e4964dd5d362600255f4f11518c9109_Modal_Toggle(ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal);
    ptxc_9e4964dd5d362600255f4f11518c9109_Income_obj.oninput = function (event) {  if (this.value == undefined || this.value == '') { ptxc_9e4964dd5d362600255f4f11518c9109_calculate_Income (0,ptxc_9e4964dd5d362600255f4f11518c9109_year_obj.value,ptxc_9e4964dd5d362600255f4f11518c9109_calculate_base.value); } else { ptxc_9e4964dd5d362600255f4f11518c9109_calculate_Income (this.value,ptxc_9e4964dd5d362600255f4f11518c9109_year_obj.value,ptxc_9e4964dd5d362600255f4f11518c9109_calculate_base.value); }}
    ptxc_9e4964dd5d362600255f4f11518c9109_year_obj.onchange = function () { ptxc_9e4964dd5d362600255f4f11518c9109_calculate_Income (ptxc_9e4964dd5d362600255f4f11518c9109_Income_obj.value,this.value,ptxc_9e4964dd5d362600255f4f11518c9109_calculate_base.value); }
    ptxc_9e4964dd5d362600255f4f11518c9109_calculate_base.onchange = function () { ptxc_9e4964dd5d362600255f4f11518c9109_update_setting_against_base(this.value); }
    if(ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_link != undefined){
    ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_link.onclick = function () { ptxc_9e4964dd5d362600255f4f11518c9109_Modal_Toggle(ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal); }
    }
    ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_cancel.onclick = function () { ptxc_9e4964dd5d362600255f4f11518c9109_Modal_Toggle(ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal); }
    var ptxc_9e4964dd5d362600255f4f11518c9109_year_desc_html = '';
    var ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt,ptxc_9e4964dd5d362600255f4f11518c9109_Formula_yaer,ptxc_9e4964dd5d362600255f4f11518c9109_Formula_calculate_base,ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj;
    function ptxc_9e4964dd5d362600255f4f11518c9109_update_setting_against_base(ptxc_9e4964dd5d362600255f4f11518c9109_Formula_calculate_base_)
    {
        if(ptxc_9e4964dd5d362600255f4f11518c9109_Formula_calculate_base_ == "monthly"){
            ptxc_9e4964dd5d362600255f4f11518c9109_Income_obj.setAttribute("placeholder","Your Monthly Salary");
            ptxc_9e4964dd5d362600255f4f11518c9109_Income_obj.value = '';
            ptxc_9e4964dd5d362600255f4f11518c9109_calculate_Income (0,ptxc_9e4964dd5d362600255f4f11518c9109_year_obj.value,ptxc_9e4964dd5d362600255f4f11518c9109_Formula_calculate_base_);
        }
        else{
            ptxc_9e4964dd5d362600255f4f11518c9109_Income_obj.setAttribute("placeholder","Your Yearly Salary");
            ptxc_9e4964dd5d362600255f4f11518c9109_Income_obj.value = '';
            ptxc_9e4964dd5d362600255f4f11518c9109_calculate_Income (0,ptxc_9e4964dd5d362600255f4f11518c9109_year_obj.value,ptxc_9e4964dd5d362600255f4f11518c9109_Formula_calculate_base_);
        }
    }
    const ptxc_9e4964dd5d362600255f4f11518c9109_formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PKR'
    });
    function ptxc_9e4964dd5d362600255f4f11518c9109_calculate_Income (ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt_,ptxc_9e4964dd5d362600255f4f11518c9109_Formula_yaer_,ptxc_9e4964dd5d362600255f4f11518c9109_Formula_calculate_base_)
    {


        if(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt_ == '')
        {
            ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt_ = 0;
        }
        if(ptxc_9e4964dd5d362600255f4f11518c9109_Formula_calculate_base_ == "monthly")
        {
            ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt = parseFloat(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt_) * 12;
        }
        else 
        {
            ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt = ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt_;
        }
        
        ptxc_9e4964dd5d362600255f4f11518c9109_Formula_yaer = ptxc_9e4964dd5d362600255f4f11518c9109_Formula_yaer_;
        ptxc_9e4964dd5d362600255f4f11518c9109_Formula_calculate_base = ptxc_9e4964dd5d362600255f4f11518c9109_Formula_calculate_base_;
        var ptxc_9e4964dd5d362600255f4f11518c9109_year_list = ptxc_9e4964dd5d362600255f4f11518c9109_json_obj;
        for(ptxc_9e4964dd5d362600255f4f11518c9109_index_i = 0;ptxc_9e4964dd5d362600255f4f11518c9109_index_i < ptxc_9e4964dd5d362600255f4f11518c9109_year_list.length;ptxc_9e4964dd5d362600255f4f11518c9109_index_i++)
        {
            if (ptxc_9e4964dd5d362600255f4f11518c9109_year_list[ptxc_9e4964dd5d362600255f4f11518c9109_index_i].year == ptxc_9e4964dd5d362600255f4f11518c9109_Formula_yaer)
            {
                ptxc_9e4964dd5d362600255f4f11518c9109_year_desc_html = ptxc_9e4964dd5d362600255f4f11518c9109_year_list[ptxc_9e4964dd5d362600255f4f11518c9109_index_i].Full_Desc;
                var ptxc_9e4964dd5d362600255f4f11518c9109_taxes = ptxc_9e4964dd5d362600255f4f11518c9109_year_list[ptxc_9e4964dd5d362600255f4f11518c9109_index_i].taxes;
                for(ptxc_9e4964dd5d362600255f4f11518c9109_index_y = ptxc_9e4964dd5d362600255f4f11518c9109_taxes.length - 1; ptxc_9e4964dd5d362600255f4f11518c9109_index_y >= 0 ; ptxc_9e4964dd5d362600255f4f11518c9109_index_y--)
                {
                    if (parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt) > parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_taxes[ptxc_9e4964dd5d362600255f4f11518c9109_index_y].Fixed_price) && parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt) > parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_taxes[ptxc_9e4964dd5d362600255f4f11518c9109_index_y].Range_price))
                    {
                        ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj = ptxc_9e4964dd5d362600255f4f11518c9109_taxes[ptxc_9e4964dd5d362600255f4f11518c9109_index_y];
                        ptxc_9e4964dd5d362600255f4f11518c9109_index_y = -1;
                    }
                    else if (parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt) > parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_taxes[ptxc_9e4964dd5d362600255f4f11518c9109_index_y].Fixed_price) && parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt) < parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_taxes[ptxc_9e4964dd5d362600255f4f11518c9109_index_y].Range_price))
                    {
                        ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj = ptxc_9e4964dd5d362600255f4f11518c9109_taxes[ptxc_9e4964dd5d362600255f4f11518c9109_index_y];
                        ptxc_9e4964dd5d362600255f4f11518c9109_index_y = -1;
                    }
                    else if(parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt) < parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_taxes[ptxc_9e4964dd5d362600255f4f11518c9109_index_y].Fixed_price) && parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_taxes[ptxc_9e4964dd5d362600255f4f11518c9109_index_y].Range_price) == 0)
                    {
                        ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj = ptxc_9e4964dd5d362600255f4f11518c9109_taxes[ptxc_9e4964dd5d362600255f4f11518c9109_index_y];
                        ptxc_9e4964dd5d362600255f4f11518c9109_index_y = -1;
                    }
                }
            }
        }

        var ptxc_9e4964dd5d362600255f4f11518c9109_income = parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt) - parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj.Fixed_price);
        var ptxc_9e4964dd5d362600255f4f11518c9109_CommissionPercentagePrice = (ptxc_9e4964dd5d362600255f4f11518c9109_income / 100) * parseFloat(ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj.Commission_percentage);
        var ptxc_9e4964dd5d362600255f4f11518c9109_Tax = parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj.Additional_commissoin_price) + ptxc_9e4964dd5d362600255f4f11518c9109_CommissionPercentagePrice;
        var ptxc_9e4964dd5d362600255f4f11518c9109_IncomeWithoutTax = parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt) - ptxc_9e4964dd5d362600255f4f11518c9109_Tax;
        
        var ptxc_9e4964dd5d362600255f4f11518c9109_monthly_CommissionPercentagePrice = ptxc_9e4964dd5d362600255f4f11518c9109_CommissionPercentagePrice / 12;
        var ptxc_9e4964dd5d362600255f4f11518c9109_monthly_Additional_commissoin_price = parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj.Additional_commissoin_price) / 12;
        var ptxc_9e4964dd5d362600255f4f11518c9109_monthly_Tax = ptxc_9e4964dd5d362600255f4f11518c9109_monthly_Additional_commissoin_price + ptxc_9e4964dd5d362600255f4f11518c9109_monthly_CommissionPercentagePrice;
        var ptxc_9e4964dd5d362600255f4f11518c9109_mothly_income = parseInt(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt) / 12;
        var ptxc_9e4964dd5d362600255f4f11518c9109_monthly_IncomeWithoutTax = ptxc_9e4964dd5d362600255f4f11518c9109_mothly_income - ptxc_9e4964dd5d362600255f4f11518c9109_monthly_Tax;
        
        
        if(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt_ > 0)
        {
            elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-yearly_income_id').innerText = ptxc_9e4964dd5d362600255f4f11518c9109_formatter.format(Math.round(ptxc_9e4964dd5d362600255f4f11518c9109_Income_txt));
            elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-yearly_tax_id').innerText = ptxc_9e4964dd5d362600255f4f11518c9109_formatter.format(Math.round(ptxc_9e4964dd5d362600255f4f11518c9109_Tax));
            elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-yearly_after_tax').innerText =  ptxc_9e4964dd5d362600255f4f11518c9109_formatter.format(Math.round(ptxc_9e4964dd5d362600255f4f11518c9109_IncomeWithoutTax));

            elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-monthly_income_id').innerText = ptxc_9e4964dd5d362600255f4f11518c9109_formatter.format(Math.round(ptxc_9e4964dd5d362600255f4f11518c9109_mothly_income));
        elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-monthly_tax_id').innerText = ptxc_9e4964dd5d362600255f4f11518c9109_formatter.format(Math.round(ptxc_9e4964dd5d362600255f4f11518c9109_monthly_Tax));
        elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-salary_after_tax').innerText = ptxc_9e4964dd5d362600255f4f11518c9109_formatter.format(Math.round(ptxc_9e4964dd5d362600255f4f11518c9109_monthly_IncomeWithoutTax));
        ptxc_9e4964dd5d362600255f4f11518c9109_formula_text.innerText = ptxc_9e4964dd5d362600255f4f11518c9109_Income_obj.value+" - (((("+ptxc_9e4964dd5d362600255f4f11518c9109_Income_obj.value+" - "+ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj.Fixed_price+") / 100) * "+ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj.Commission_percentage+") + "+ptxc_9e4964dd5d362600255f4f11518c9109_taxes_obj.Additional_commissoin_price+")";
        if(ptxc_9e4964dd5d362600255f4f11518c9109_Formula_calculate_base_ == "monthly")
        {
            ptxc_9e4964dd5d362600255f4f11518c9109_formula_text.innerText = "("+ptxc_9e4964dd5d362600255f4f11518c9109_formula_text.innerText+") / 12"
        }
        ptxc_9e4964dd5d362600255f4f11518c9109_formula_bar.setAttribute('style','display:inline-block !important;');

            
    }
        else
        {
            elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-yearly_income_id').innerText = '';
            elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-yearly_tax_id').innerText = '';
            elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-yearly_after_tax').innerText = '';
            elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-monthly_income_id').innerText = '';
            elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-monthly_tax_id').innerText = '';
            elem.querySelector('#ptxc_9e4964dd5d362600255f4f11518c9109-salary_after_tax').innerText = '';
            ptxc_9e4964dd5d362600255f4f11518c9109_formula_text.innerText = "";
            ptxc_9e4964dd5d362600255f4f11518c9109_formula_bar.setAttribute('style','display:none !important;');


        }
        elem.querySelector('#modal_content').innerHTML = ptxc_9e4964dd5d362600255f4f11518c9109_year_desc_html;
        ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_link = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_link");
        ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal");
        ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_cancel = elem.querySelector("#ptxc_9e4964dd5d362600255f4f11518c9109_cancel");
        ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_link.onclick = function () { ptxc_9e4964dd5d362600255f4f11518c9109_Modal_Toggle(ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal); }
        ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal_cancel.onclick = function () { ptxc_9e4964dd5d362600255f4f11518c9109_Modal_Toggle(ptxc_9e4964dd5d362600255f4f11518c9109_detail_modal); }
        
    }
    function ptxc_9e4964dd5d362600255f4f11518c9109_set_modal_content(){
        var ptxc_9e4964dd5d362600255f4f11518c9109_year_list = ptxc_9e4964dd5d362600255f4f11518c9109_json_obj;
        for(ptxc_9e4964dd5d362600255f4f11518c9109_index_i = 0;ptxc_9e4964dd5d362600255f4f11518c9109_index_i < ptxc_9e4964dd5d362600255f4f11518c9109_year_list.length;ptxc_9e4964dd5d362600255f4f11518c9109_index_i++)
        {
            if (ptxc_9e4964dd5d362600255f4f11518c9109_year_list[ptxc_9e4964dd5d362600255f4f11518c9109_index_i].year == ptxc_9e4964dd5d362600255f4f11518c9109_year_obj.value)
            {
                elem.querySelector('#modal_content').innerHTML = ptxc_9e4964dd5d362600255f4f11518c9109_year_list[ptxc_9e4964dd5d362600255f4f11518c9109_index_i].Full_Desc;
            }
        }
    }
    ptxc_9e4964dd5d362600255f4f11518c9109_set_modal_content();
    function  ptxc_9e4964dd5d362600255f4f11518c9109_Modal_Toggle(ptxc_9e4964dd5d362600255f4f11518c9109_Modal)
{
    if(ptxc_9e4964dd5d362600255f4f11518c9109_modal_index == 0)
    {
        ptxc_9e4964dd5d362600255f4f11518c9109_Modal.setAttribute('style', 'display:none;');
        ptxc_9e4964dd5d362600255f4f11518c9109_modal_index = 1;
    }
    else
    {
        ptxc_9e4964dd5d362600255f4f11518c9109_Modal.setAttribute('style', 'display:block;');
        ptxc_9e4964dd5d362600255f4f11518c9109_modal_index = 0 ;
    }
}
}

function ptxc_9e4964dd5d362600255f4f11518c9109_CalculatorsContents() {
    debugger;
    var TabContents = document.querySelectorAll('.ptxc_9e4964dd5d362600255f4f11518c9109-content');
    [].forEach.call(TabContents, ptxc_9e4964dd5d362600255f4f11518c9109_Calculators);
  }

  ptxc_9e4964dd5d362600255f4f11518c9109_CalculatorsContents();

function ptxc_9e4964dd5d362600255f4f11518c9109_isNumberKey(evt) 
{
    if(evt.target.value.length >= 13) return false;
  var ptxc_9e4964dd5d362600255f4f11518c9109_charCode = (evt.which) ? evt.which : evt.keyCode
  if(ptxc_9e4964dd5d362600255f4f11518c9109_charCode == 46)
  return true;
  if (ptxc_9e4964dd5d362600255f4f11518c9109_charCode > 31 && (ptxc_9e4964dd5d362600255f4f11518c9109_charCode < 48 || ptxc_9e4964dd5d362600255f4f11518c9109_charCode > 57))
    return false;
  return true;
}

var styles = window.getComputedStyle(document.documentElement);

var primaryColor = styles.getPropertyValue('--wp--preset--color--primary');
var secondaryColor = styles.getPropertyValue('--wp--preset--color--secondary');

var formElement = document.querySelector('.ptxc_9e4964dd5d362600255f4f11518c9109-table th');

formElement.style.backgroundColor = primaryColor;
formElement.style.color = secondaryColor;