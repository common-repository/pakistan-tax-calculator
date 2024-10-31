function ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Calculators(_elem) {
    debugger
    var elem = document.getElementById(_elem.id);
var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_modal_index = 0;
var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_formula_bar = elem.querySelector("#ptxc_33a9fa7d5b97cc0c94249c1c48101c07-formula_bar");
ptxc_33a9fa7d5b97cc0c94249c1c48101c07_formula_bar.setAttribute('style','display:none;');
var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_formula_text = elem.querySelector("#ptxc_33a9fa7d5b97cc0c94249c1c48101c07-formula_text");
var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_obj = elem.querySelector("#ptxc_33a9fa7d5b97cc0c94249c1c48101c07-income");
var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_obj = elem.querySelector("#ptxc_33a9fa7d5b97cc0c94249c1c48101c07-calculation-years");
var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_calculate_base = elem.querySelector("#ptxc_33a9fa7d5b97cc0c94249c1c48101c07-calculation-base");
ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_obj.oninput = function (event) {  if (this.value == undefined || this.value == '') { ptxc_33a9fa7d5b97cc0c94249c1c48101c07_calculate_Income (0,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_obj.value,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_calculate_base.value); } else { ptxc_33a9fa7d5b97cc0c94249c1c48101c07_calculate_Income (this.value,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_obj.value,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_calculate_base.value); }}
ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_obj.onchange = function () { ptxc_33a9fa7d5b97cc0c94249c1c48101c07_calculate_Income (ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_obj.value,this.value,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_calculate_base.value); }
ptxc_33a9fa7d5b97cc0c94249c1c48101c07_calculate_base.onchange = function () { ptxc_33a9fa7d5b97cc0c94249c1c48101c07_calculate_Income (ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_obj.value,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_obj.value,this.value); }
var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_desc_html = '';
var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_txt,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_yaer,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_calculate_base,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_taxes_obj;
const ptxc_33a9fa7d5b97cc0c94249c1c48101c07_formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PKR',
  
  });
function ptxc_33a9fa7d5b97cc0c94249c1c48101c07_calculate_Income (ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_txt_,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_yaer_,ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_calculate_base_)
{
    var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_yaer_txt___ = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_yaer_.replace('On or ',' ');
    elem.querySelector('#ptxc_33a9fa7d5b97cc0c94249c1c48101c07_table_Heading').innerText = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_yaer_txt___;
    elem.querySelector('#ptxc_33a9fa7d5b97cc0c94249c1c48101c07_table_td1').innerText = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_yaer_txt___.replace(' - Individual / AOP','');
    ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_obj.setAttribute('placeholder','Capital Gain on Securities purchased '+ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_yaer_.replace('On or ',' '));
         ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_txt = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_txt_;
    ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_yaer = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_yaer_;
    ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_calculate_base = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_calculate_base_;
    var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_list = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_json_obj;
    for(ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_i = 0;ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_i < ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_list.length;ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_i++)
    {
        if (ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_list[ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_i].year == ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_yaer)
        {
            ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_desc_html = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_list[ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_i].Full_Desc;
            var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_taxes = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_year_list[ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_i].taxes;
            
            for(ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_y = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_taxes.length - 1; ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_y >= 0 ; ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_y--)
            {
                if(ptxc_33a9fa7d5b97cc0c94249c1c48101c07_taxes[ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_y].Enclosure == ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Formula_calculate_base){
                    ptxc_33a9fa7d5b97cc0c94249c1c48101c07_taxes_obj = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_taxes[ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_y];
                    ptxc_33a9fa7d5b97cc0c94249c1c48101c07_index_y = -1;
                }
            }
        }
    }
    var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_income = parseInt(ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_txt);
    var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_CommissionPercentagePrice = (ptxc_33a9fa7d5b97cc0c94249c1c48101c07_income / 100) * parseFloat(ptxc_33a9fa7d5b97cc0c94249c1c48101c07_taxes_obj.Tax_Rate);
    var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Tax =  ptxc_33a9fa7d5b97cc0c94249c1c48101c07_CommissionPercentagePrice;
    
    console.log(ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_txt);
     if(ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_txt_ > 0)
     {
        elem.querySelector('#ptxc_33a9fa7d5b97cc0c94249c1c48101c07-yearly_income_id').innerText = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_formatter.format(Math.round(ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_txt));
        elem.querySelector('#ptxc_33a9fa7d5b97cc0c94249c1c48101c07-yearly_tax_id').innerText = ptxc_33a9fa7d5b97cc0c94249c1c48101c07_formatter.format(Math.round(ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Tax));
        ptxc_33a9fa7d5b97cc0c94249c1c48101c07_formula_text.innerText = "("+ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Income_obj.value+" / 100) * "+ptxc_33a9fa7d5b97cc0c94249c1c48101c07_taxes_obj.Tax_Rate;
        ptxc_33a9fa7d5b97cc0c94249c1c48101c07_formula_bar.setAttribute('style','display:inline-block !important;');
     }
     else
     {
        elem.querySelector('#ptxc_33a9fa7d5b97cc0c94249c1c48101c07-yearly_income_id').innerText = '';
        elem.querySelector('#ptxc_33a9fa7d5b97cc0c94249c1c48101c07-yearly_tax_id').innerText = '';
        ptxc_33a9fa7d5b97cc0c94249c1c48101c07_formula_text.innerText = "";
        ptxc_33a9fa7d5b97cc0c94249c1c48101c07_formula_bar.setAttribute('style','display:none !important;');
     }
    
}
}   
function ptxc_33a9fa7d5b97cc0c94249c1c48101c07_CalculatorsContents() {
    debugger;
    var TabContents = document.querySelectorAll('.ptxc_33a9fa7d5b97cc0c94249c1c48101c07-content');
    [].forEach.call(TabContents, ptxc_33a9fa7d5b97cc0c94249c1c48101c07_Calculators);
  }

  ptxc_33a9fa7d5b97cc0c94249c1c48101c07_CalculatorsContents();
function ptxc_33a9fa7d5b97cc0c94249c1c48101c07_isNumberKey(evt) 
{
    if(evt.target.value.length >= 13) return false;
  var ptxc_33a9fa7d5b97cc0c94249c1c48101c07_charCode = (evt.which) ? evt.which : evt.keyCode
  if(ptxc_33a9fa7d5b97cc0c94249c1c48101c07_charCode == 46)
  return true;
  if (ptxc_33a9fa7d5b97cc0c94249c1c48101c07_charCode > 31 && (ptxc_33a9fa7d5b97cc0c94249c1c48101c07_charCode < 48 || ptxc_33a9fa7d5b97cc0c94249c1c48101c07_charCode > 57))
    return false;
  return true;
}

var styles = window.getComputedStyle(document.documentElement);

var primaryColor = styles.getPropertyValue('--wp--preset--color--primary');
var secondaryColor = styles.getPropertyValue('--wp--preset--color--secondary');

var formElement = document.querySelector('.ptxc_33a9fa7d5b97cc0c94249c1c48101c07-table th');

if(formElement != undefined)
{
    formElement.style.backgroundColor = primaryColor;
    formElement.style.color = secondaryColor;
}

