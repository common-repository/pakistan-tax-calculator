function ptxc_fe65738d10af5e229b796b392146efff_Calculators(_elem) {
    debugger
    var elem = document.getElementById(_elem.id);
var ptxc_fe65738d10af5e229b796b392146efff_modal_index = 0;
var ptxc_fe65738d10af5e229b796b392146efff_formula_bar = elem.querySelector("#ptxc_fe65738d10af5e229b796b392146efff-formula_bar");
ptxc_fe65738d10af5e229b796b392146efff_formula_bar.setAttribute('style','display:none;');
var ptxc_fe65738d10af5e229b796b392146efff_formula_text = elem.querySelector("#ptxc_fe65738d10af5e229b796b392146efff-formula_text");
var ptxc_fe65738d10af5e229b796b392146efff_Income_obj = elem.querySelector("#ptxc_fe65738d10af5e229b796b392146efff-income");
var ptxc_fe65738d10af5e229b796b392146efff_year_obj = elem.querySelector("#ptxc_fe65738d10af5e229b796b392146efff-calculation-years");
var ptxc_fe65738d10af5e229b796b392146efff_calculate_base = elem.querySelector("#ptxc_fe65738d10af5e229b796b392146efff-calculation-base");

ptxc_fe65738d10af5e229b796b392146efff_Income_obj.oninput = function (event) {  if (this.value == undefined || this.value == '') { ptxc_fe65738d10af5e229b796b392146efff_calculate_Income (0,ptxc_fe65738d10af5e229b796b392146efff_year_obj.value,ptxc_fe65738d10af5e229b796b392146efff_calculate_base.value); } else { ptxc_fe65738d10af5e229b796b392146efff_calculate_Income (this.value,ptxc_fe65738d10af5e229b796b392146efff_year_obj.value,ptxc_fe65738d10af5e229b796b392146efff_calculate_base.value); }}
ptxc_fe65738d10af5e229b796b392146efff_year_obj.onchange = function () { ptxc_fe65738d10af5e229b796b392146efff_calculate_Income (ptxc_fe65738d10af5e229b796b392146efff_Income_obj.value,this.value,ptxc_fe65738d10af5e229b796b392146efff_calculate_base.value); }
ptxc_fe65738d10af5e229b796b392146efff_calculate_base.onchange = function () { ptxc_fe65738d10af5e229b796b392146efff_calculate_Income (ptxc_fe65738d10af5e229b796b392146efff_Income_obj.value,ptxc_fe65738d10af5e229b796b392146efff_year_obj.value,this.value); }
var ptxc_fe65738d10af5e229b796b392146efff_year_desc_html = '';
var ptxc_fe65738d10af5e229b796b392146efff_Income_txt,ptxc_fe65738d10af5e229b796b392146efff_Formula_yaer,ptxc_fe65738d10af5e229b796b392146efff_Formula_calculate_base,ptxc_fe65738d10af5e229b796b392146efff_taxes_obj;

const ptxc_fe65738d10af5e229b796b392146efff_formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PKR',
  
  });
function ptxc_fe65738d10af5e229b796b392146efff_calculate_Income (ptxc_fe65738d10af5e229b796b392146efff_Income_txt_,ptxc_fe65738d10af5e229b796b392146efff_Formula_yaer_,ptxc_fe65738d10af5e229b796b392146efff_Formula_calculate_base_)
{
    var ptxc_fe65738d10af5e229b796b392146efff_Formula_yaer_txt___ = ptxc_fe65738d10af5e229b796b392146efff_Formula_yaer_.replace('On or ',' ');
    elem.querySelector('#ptxc_fe65738d10af5e229b796b392146efff_table_Heading').innerText = ptxc_fe65738d10af5e229b796b392146efff_Formula_yaer_txt___;
    elem.querySelector('#ptxc_fe65738d10af5e229b796b392146efff_table_td1').innerText = ptxc_fe65738d10af5e229b796b392146efff_Formula_yaer_txt___.replace(' - Individual / AOP','');
    ptxc_fe65738d10af5e229b796b392146efff_Income_obj.setAttribute('placeholder','Capital Gain on Properties - '+ptxc_fe65738d10af5e229b796b392146efff_Formula_yaer_.replace('On or ',' '));
    
         ptxc_fe65738d10af5e229b796b392146efff_Income_txt = ptxc_fe65738d10af5e229b796b392146efff_Income_txt_;
    ptxc_fe65738d10af5e229b796b392146efff_Formula_yaer = ptxc_fe65738d10af5e229b796b392146efff_Formula_yaer_;
    ptxc_fe65738d10af5e229b796b392146efff_Formula_calculate_base = ptxc_fe65738d10af5e229b796b392146efff_Formula_calculate_base_;
    var ptxc_fe65738d10af5e229b796b392146efff_year_list = ptxc_fe65738d10af5e229b796b392146efff_json_obj;
    for(ptxc_fe65738d10af5e229b796b392146efff_index_i = 0;ptxc_fe65738d10af5e229b796b392146efff_index_i < ptxc_fe65738d10af5e229b796b392146efff_year_list.length;ptxc_fe65738d10af5e229b796b392146efff_index_i++)
    {
        if (ptxc_fe65738d10af5e229b796b392146efff_year_list[ptxc_fe65738d10af5e229b796b392146efff_index_i].year == ptxc_fe65738d10af5e229b796b392146efff_Formula_yaer)
        {
            ptxc_fe65738d10af5e229b796b392146efff_year_desc_html = ptxc_fe65738d10af5e229b796b392146efff_year_list[ptxc_fe65738d10af5e229b796b392146efff_index_i].Full_Desc;
            var ptxc_fe65738d10af5e229b796b392146efff_taxes = ptxc_fe65738d10af5e229b796b392146efff_year_list[ptxc_fe65738d10af5e229b796b392146efff_index_i].taxes;
            
            for(ptxc_fe65738d10af5e229b796b392146efff_index_y = ptxc_fe65738d10af5e229b796b392146efff_taxes.length - 1; ptxc_fe65738d10af5e229b796b392146efff_index_y >= 0 ; ptxc_fe65738d10af5e229b796b392146efff_index_y--)
            {
                if(ptxc_fe65738d10af5e229b796b392146efff_taxes[ptxc_fe65738d10af5e229b796b392146efff_index_y].Enclosure == ptxc_fe65738d10af5e229b796b392146efff_Formula_calculate_base){
                    ptxc_fe65738d10af5e229b796b392146efff_taxes_obj = ptxc_fe65738d10af5e229b796b392146efff_taxes[ptxc_fe65738d10af5e229b796b392146efff_index_y];
                    ptxc_fe65738d10af5e229b796b392146efff_index_y = -1;
                }
            }
        }
    }
    var ptxc_fe65738d10af5e229b796b392146efff_income = parseInt(ptxc_fe65738d10af5e229b796b392146efff_Income_txt);
    var ptxc_fe65738d10af5e229b796b392146efff_CommissionPercentagePrice = (ptxc_fe65738d10af5e229b796b392146efff_income / 100) * parseFloat(ptxc_fe65738d10af5e229b796b392146efff_taxes_obj.Tax_Rate);
    var ptxc_fe65738d10af5e229b796b392146efff_Tax =  ptxc_fe65738d10af5e229b796b392146efff_CommissionPercentagePrice;
    
    console.log(ptxc_fe65738d10af5e229b796b392146efff_Income_txt);
     if(ptxc_fe65738d10af5e229b796b392146efff_Income_txt_ > 0)
     {
        elem.querySelector('#ptxc_fe65738d10af5e229b796b392146efff-yearly_income_id').innerText = ptxc_fe65738d10af5e229b796b392146efff_formatter.format(Math.round(ptxc_fe65738d10af5e229b796b392146efff_Income_txt));
        elem.querySelector('#ptxc_fe65738d10af5e229b796b392146efff-yearly_tax_id').innerText = ptxc_fe65738d10af5e229b796b392146efff_formatter.format(Math.round(ptxc_fe65738d10af5e229b796b392146efff_Tax));
        ptxc_fe65738d10af5e229b796b392146efff_formula_text.innerText = "("+ptxc_fe65738d10af5e229b796b392146efff_Income_obj.value+" / 100) * "+ptxc_fe65738d10af5e229b796b392146efff_taxes_obj.Tax_Rate;
        ptxc_fe65738d10af5e229b796b392146efff_formula_bar.setAttribute('style','display:inline-block !important;');
     }
     else
     {
        elem.querySelector('#ptxc_fe65738d10af5e229b796b392146efff-yearly_income_id').innerText = '';
        elem.querySelector('#ptxc_fe65738d10af5e229b796b392146efff-yearly_tax_id').innerText = '';
        ptxc_fe65738d10af5e229b796b392146efff_formula_text.innerText = "";
        ptxc_fe65738d10af5e229b796b392146efff_formula_bar.setAttribute('style','display:none !important;');
     }
     
}
}
function ptxc_fe65738d10af5e229b796b392146efff_CalculatorsContents() {
    debugger;
    var TabContents = document.querySelectorAll('.ptxc_fe65738d10af5e229b796b392146efff-content');
    [].forEach.call(TabContents, ptxc_fe65738d10af5e229b796b392146efff_Calculators);
  }

  ptxc_fe65738d10af5e229b796b392146efff_CalculatorsContents();

function ptxc_fe65738d10af5e229b796b392146efff_isNumberKey(evt) 
{
    if(evt.target.value.length >= 13) return false;
  var ptxc_fe65738d10af5e229b796b392146efff_charCode = (evt.which) ? evt.which : evt.keyCode
  if(ptxc_fe65738d10af5e229b796b392146efff_charCode == 46)
  return true;
  if (ptxc_fe65738d10af5e229b796b392146efff_charCode > 31 && (ptxc_fe65738d10af5e229b796b392146efff_charCode < 48 || ptxc_fe65738d10af5e229b796b392146efff_charCode > 57))
    return false;
  return true;
}

var styles = window.getComputedStyle(document.documentElement);

var primaryColor = styles.getPropertyValue('--wp--preset--color--primary');
var secondaryColor = styles.getPropertyValue('--wp--preset--color--secondary');

var formElement = document.querySelector('.ptxc_fe65738d10af5e229b796b392146efff-table th');

if(formElement != undefined)
{
    formElement.style.backgroundColor = primaryColor;
    formElement.style.color = secondaryColor;
}

