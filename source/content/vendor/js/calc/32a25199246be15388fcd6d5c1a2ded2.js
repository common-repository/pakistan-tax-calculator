function ptxc_32a25199246be15388fcd6d5c1a2ded2_Calculators(_elem) {
  debugger
  var elem = document.getElementById(_elem.id);
var ptxc_32a25199246be15388fcd6d5c1a2ded2_modal_index = 0;

var ptxc_32a25199246be15388fcd6d5c1a2ded2_formula_bar = elem.querySelector("#ptxc_32a25199246be15388fcd6d5c1a2ded2-formula_bar");
ptxc_32a25199246be15388fcd6d5c1a2ded2_formula_bar.setAttribute('style','display:none;');
var ptxc_32a25199246be15388fcd6d5c1a2ded2_formula_text = elem.querySelector("#ptxc_32a25199246be15388fcd6d5c1a2ded2-formula_text");
var ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_obj = elem.querySelector("#ptxc_32a25199246be15388fcd6d5c1a2ded2-income");
var ptxc_32a25199246be15388fcd6d5c1a2ded2_year_obj = elem.querySelector("#ptxc_32a25199246be15388fcd6d5c1a2ded2-calculation-years");
ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_obj.oninput = function (event) {  if (this.value == undefined || this.value == '') { ptxc_32a25199246be15388fcd6d5c1a2ded2_calculate_Income (0,ptxc_32a25199246be15388fcd6d5c1a2ded2_year_obj.value); } else { ptxc_32a25199246be15388fcd6d5c1a2ded2_calculate_Income (this.value,ptxc_32a25199246be15388fcd6d5c1a2ded2_year_obj.value); }}
ptxc_32a25199246be15388fcd6d5c1a2ded2_year_obj.onchange = function () { ptxc_32a25199246be15388fcd6d5c1a2ded2_calculate_Income (ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_obj.value,this.value); }
var ptxc_32a25199246be15388fcd6d5c1a2ded2_year_desc_html = '';
var ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_txt,ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_yaer,ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_calculate_base,ptxc_32a25199246be15388fcd6d5c1a2ded2_taxes_obj;
const ptxc_32a25199246be15388fcd6d5c1a2ded2_formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PKR'
  });
function ptxc_32a25199246be15388fcd6d5c1a2ded2_calculate_Income (ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_txt_,ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_yaer_)
{
    
    var ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_yaer_txt___ = ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_yaer_.replace('On or ',' ');
    elem.querySelector('#ptxc_32a25199246be15388fcd6d5c1a2ded2_table_Heading').innerText = ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_yaer_txt___;
    elem.querySelector('#ptxc_32a25199246be15388fcd6d5c1a2ded2_table_td1').innerText = ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_yaer_txt___.replace(' - Individual / AOP','');
    ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_obj.setAttribute('placeholder','Capital Gain on Properties - '+ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_yaer_.replace('On or ',' '));
    
         ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_txt = ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_txt_;
    
    ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_yaer = ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_yaer_;
    var ptxc_32a25199246be15388fcd6d5c1a2ded2_year_list = ptxc_32a25199246be15388fcd6d5c1a2ded2_json_obj;
    for(ptxc_32a25199246be15388fcd6d5c1a2ded2_index_i = 0;ptxc_32a25199246be15388fcd6d5c1a2ded2_index_i < ptxc_32a25199246be15388fcd6d5c1a2ded2_year_list.length;ptxc_32a25199246be15388fcd6d5c1a2ded2_index_i++)
    {
        if (ptxc_32a25199246be15388fcd6d5c1a2ded2_year_list[ptxc_32a25199246be15388fcd6d5c1a2ded2_index_i].year == ptxc_32a25199246be15388fcd6d5c1a2ded2_Formula_yaer)
        {
            ptxc_32a25199246be15388fcd6d5c1a2ded2_year_desc_html = ptxc_32a25199246be15388fcd6d5c1a2ded2_year_list[ptxc_32a25199246be15388fcd6d5c1a2ded2_index_i].Full_Desc;
            var ptxc_32a25199246be15388fcd6d5c1a2ded2_taxes = ptxc_32a25199246be15388fcd6d5c1a2ded2_year_list[ptxc_32a25199246be15388fcd6d5c1a2ded2_index_i].taxes;
            ptxc_32a25199246be15388fcd6d5c1a2ded2_taxes_obj = ptxc_32a25199246be15388fcd6d5c1a2ded2_taxes[0];
            
        }
    }
    var ptxc_32a25199246be15388fcd6d5c1a2ded2_income = parseInt(ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_txt);
    var ptxc_32a25199246be15388fcd6d5c1a2ded2_CommissionPercentagePrice = (ptxc_32a25199246be15388fcd6d5c1a2ded2_income / 100) * parseFloat(ptxc_32a25199246be15388fcd6d5c1a2ded2_taxes_obj.Tax_Rate);
    var ptxc_32a25199246be15388fcd6d5c1a2ded2_Tax =  ptxc_32a25199246be15388fcd6d5c1a2ded2_CommissionPercentagePrice;
    
    console.log(ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_txt);
     if(ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_txt_ > 0)
     {
        elem.querySelector('#ptxc_32a25199246be15388fcd6d5c1a2ded2-yearly_income_id').innerText = ptxc_32a25199246be15388fcd6d5c1a2ded2_formatter.format(Math.round(ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_txt));
        elem.querySelector('#ptxc_32a25199246be15388fcd6d5c1a2ded2-yearly_tax_id').innerText = ptxc_32a25199246be15388fcd6d5c1a2ded2_formatter.format(Math.round(ptxc_32a25199246be15388fcd6d5c1a2ded2_Tax));
        ptxc_32a25199246be15388fcd6d5c1a2ded2_formula_text.innerText = "("+ptxc_32a25199246be15388fcd6d5c1a2ded2_Income_obj.value+" / 100) * "+ptxc_32a25199246be15388fcd6d5c1a2ded2_taxes_obj.Tax_Rate;
        ptxc_32a25199246be15388fcd6d5c1a2ded2_formula_bar.setAttribute('style','display:inline-block !important;');
     }
     else
     {
        elem.querySelector('#ptxc_32a25199246be15388fcd6d5c1a2ded2-yearly_income_id').innerText = '';
        elem.querySelector('#ptxc_32a25199246be15388fcd6d5c1a2ded2-yearly_tax_id').innerText = '';
        ptxc_32a25199246be15388fcd6d5c1a2ded2_formula_text.innerText = "";
        ptxc_32a25199246be15388fcd6d5c1a2ded2_formula_bar.setAttribute('style','display:none !important;');
     }
    
}
}
function ptxc_32a25199246be15388fcd6d5c1a2ded2_CalculatorsContents() {
    debugger;
    var TabContents = document.querySelectorAll('.ptxc_32a25199246be15388fcd6d5c1a2ded2-content');
    [].forEach.call(TabContents, ptxc_32a25199246be15388fcd6d5c1a2ded2_Calculators);
  }

  ptxc_32a25199246be15388fcd6d5c1a2ded2_CalculatorsContents();

function ptxc_32a25199246be15388fcd6d5c1a2ded2_isNumberKey(evt) 
{
    if(evt.target.value.length >= 13) return false;
  var ptxc_32a25199246be15388fcd6d5c1a2ded2_charCode = (evt.which) ? evt.which : evt.keyCode
  if(ptxc_32a25199246be15388fcd6d5c1a2ded2_charCode == 46)
  return true;
  if (ptxc_32a25199246be15388fcd6d5c1a2ded2_charCode > 31 && (ptxc_32a25199246be15388fcd6d5c1a2ded2_charCode < 48 || ptxc_32a25199246be15388fcd6d5c1a2ded2_charCode > 57))
    return false;
  return true;
}

var styles = window.getComputedStyle(document.documentElement);

var primaryColor = styles.getPropertyValue('--wp--preset--color--primary');
var secondaryColor = styles.getPropertyValue('--wp--preset--color--secondary');

var formElement = document.querySelector('.ptxc_32a25199246be15388fcd6d5c1a2ded2-table th');

if(formElement != undefined)
{
    formElement.style.backgroundColor = primaryColor;
    formElement.style.color = secondaryColor;
}

