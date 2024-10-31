function ptxc_a93ef85fee97dc1459fa353be1325fd3_Calculators(_elem) {
    debugger
    var elem = document.getElementById(_elem.id);
var ptxc_a93ef85fee97dc1459fa353be1325fd3_modal_index = 0;
var ptxc_a93ef85fee97dc1459fa353be1325fd3_formula_bar = elem.querySelector("#ptxc_a93ef85fee97dc1459fa353be1325fd3-formula_bar");
    ptxc_a93ef85fee97dc1459fa353be1325fd3_formula_bar.setAttribute('style','display:none;');
 var ptxc_a93ef85fee97dc1459fa353be1325fd3_formula_text = elem.querySelector("#ptxc_a93ef85fee97dc1459fa353be1325fd3-formula_text");
var ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_obj = elem.querySelector("#ptxc_a93ef85fee97dc1459fa353be1325fd3-income");
var ptxc_a93ef85fee97dc1459fa353be1325fd3_year_obj = elem.querySelector("#ptxc_a93ef85fee97dc1459fa353be1325fd3-calculation-years");
ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_obj.oninput = function (event) {  if (this.value == undefined || this.value == '') { ptxc_a93ef85fee97dc1459fa353be1325fd3_calculate_Income (0,ptxc_a93ef85fee97dc1459fa353be1325fd3_year_obj.value,'yearly'); } else { ptxc_a93ef85fee97dc1459fa353be1325fd3_calculate_Income (this.value,ptxc_a93ef85fee97dc1459fa353be1325fd3_year_obj.value,'yearly'); }}
ptxc_a93ef85fee97dc1459fa353be1325fd3_year_obj.onchange = function () { ptxc_a93ef85fee97dc1459fa353be1325fd3_calculate_Income (ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_obj.value,this.value, 'yearly'); }
var ptxc_a93ef85fee97dc1459fa353be1325fd3_year_desc_html = '';
var ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt,ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_yaer,ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_calculate_base,ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj;
function ptxc_a93ef85fee97dc1459fa353be1325fd3_update_setting_against_base(ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_calculate_base_)
{
    if(ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_calculate_base_ == "monthly")
    {
        ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_obj.setAttribute("placeholder","Your Monthly Salary");
        ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_obj.value = '';
        ptxc_a93ef85fee97dc1459fa353be1325fd3_calculate_Income (0,ptxc_a93ef85fee97dc1459fa353be1325fd3_year_obj.value,ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_calculate_base_);
    }
    else 
    {
        ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_obj.setAttribute("placeholder","Your Yearly Salary");
        ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_obj.value = '';
        ptxc_a93ef85fee97dc1459fa353be1325fd3_calculate_Income (0,ptxc_a93ef85fee97dc1459fa353be1325fd3_year_obj.value,ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_calculate_base_);
    }
}
const ptxc_a93ef85fee97dc1459fa353be1325fd3_formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PKR',
  
  });
function ptxc_a93ef85fee97dc1459fa353be1325fd3_calculate_Income (ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt_,ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_yaer_,ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_calculate_base_)
{
    
    if(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt_ == '')
    {
        ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt_ = 0;
    }
    if(ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_calculate_base_ == "monthly")
    {
        ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt = parseFloat(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt_) * 12;
    }
    else 
    {
        ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt = ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt_;
    }
    
    ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_yaer = ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_yaer_;
    ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_calculate_base = ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_calculate_base_;
    var ptxc_a93ef85fee97dc1459fa353be1325fd3_year_list = ptxc_a93ef85fee97dc1459fa353be1325fd3_json_obj;
    for(ptxc_a93ef85fee97dc1459fa353be1325fd3_index_i = 0;ptxc_a93ef85fee97dc1459fa353be1325fd3_index_i < ptxc_a93ef85fee97dc1459fa353be1325fd3_year_list.length;ptxc_a93ef85fee97dc1459fa353be1325fd3_index_i++)
    {
        if (ptxc_a93ef85fee97dc1459fa353be1325fd3_year_list[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_i].year == ptxc_a93ef85fee97dc1459fa353be1325fd3_Formula_yaer)
        {
            var ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes = ptxc_a93ef85fee97dc1459fa353be1325fd3_year_list[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_i].taxes;
            for(ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y = ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes.length - 1; ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y >= 0 ; ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y--)
            {
                if (parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt) > parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y].Fixed_price) && parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt) > parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y].Range_price))
                {
                    ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj = ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y];
                    ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y = -1;
                }
                else if (parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt) > parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y].Fixed_price) && parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt) < parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y].Range_price))
                {
                    ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj = ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y];
                    ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y = -1;
                }
                else if(parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt) < parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y].Fixed_price) && parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y].Range_price) == 0)
                {
                    ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj = ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes[ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y];
                    ptxc_a93ef85fee97dc1459fa353be1325fd3_index_y = -1;
                }
            }
        }
    }

     var ptxc_a93ef85fee97dc1459fa353be1325fd3_income = parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt) - parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj.Fixed_price);
     var ptxc_a93ef85fee97dc1459fa353be1325fd3_CommissionPercentagePrice = (ptxc_a93ef85fee97dc1459fa353be1325fd3_income / 100) * parseFloat(ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj.Commission_percentage);
     var ptxc_a93ef85fee97dc1459fa353be1325fd3_Tax = parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj.Additional_commissoin_price) + ptxc_a93ef85fee97dc1459fa353be1325fd3_CommissionPercentagePrice;
     var ptxc_a93ef85fee97dc1459fa353be1325fd3_IncomeWithoutTax = parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt) - ptxc_a93ef85fee97dc1459fa353be1325fd3_Tax;
     
     var ptxc_a93ef85fee97dc1459fa353be1325fd3_monthly_CommissionPercentagePrice = ptxc_a93ef85fee97dc1459fa353be1325fd3_CommissionPercentagePrice / 12;
     var ptxc_a93ef85fee97dc1459fa353be1325fd3_monthly_Additional_commissoin_price = parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj.Additional_commissoin_price) / 12;
     var ptxc_a93ef85fee97dc1459fa353be1325fd3_monthly_Tax = ptxc_a93ef85fee97dc1459fa353be1325fd3_monthly_Additional_commissoin_price + ptxc_a93ef85fee97dc1459fa353be1325fd3_monthly_CommissionPercentagePrice;
     var ptxc_a93ef85fee97dc1459fa353be1325fd3_mothly_income = parseInt(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt) / 12;
     var ptxc_a93ef85fee97dc1459fa353be1325fd3_monthly_IncomeWithoutTax = ptxc_a93ef85fee97dc1459fa353be1325fd3_mothly_income - ptxc_a93ef85fee97dc1459fa353be1325fd3_monthly_Tax;
     
     
     if(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt_ > 0)
     {
        elem.querySelector('#ptxc_a93ef85fee97dc1459fa353be1325fd3-yearly_income_id').innerText = ptxc_a93ef85fee97dc1459fa353be1325fd3_formatter.format(Math.round(ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_txt));
        elem.querySelector('#ptxc_a93ef85fee97dc1459fa353be1325fd3-yearly_tax_id').innerText = ptxc_a93ef85fee97dc1459fa353be1325fd3_formatter.format(Math.round(ptxc_a93ef85fee97dc1459fa353be1325fd3_Tax));
        elem.querySelector('#ptxc_a93ef85fee97dc1459fa353be1325fd3-yearly_after_tax').innerText =  ptxc_a93ef85fee97dc1459fa353be1325fd3_formatter.format(Math.round(ptxc_a93ef85fee97dc1459fa353be1325fd3_IncomeWithoutTax));
        ptxc_a93ef85fee97dc1459fa353be1325fd3_formula_text.innerText = ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_obj.value+" - (((("+ptxc_a93ef85fee97dc1459fa353be1325fd3_Income_obj.value+" - "+ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj.Fixed_price+") / 100) * "+ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj.Commission_percentage+") + "+ptxc_a93ef85fee97dc1459fa353be1325fd3_taxes_obj.Additional_commissoin_price+")";
        ptxc_a93ef85fee97dc1459fa353be1325fd3_formula_bar.setAttribute('style','display:inline-block !important;');
     }
     else
     {
        elem.querySelector('#ptxc_a93ef85fee97dc1459fa353be1325fd3-yearly_income_id').innerText = '';
        elem.querySelector('#ptxc_a93ef85fee97dc1459fa353be1325fd3-yearly_tax_id').innerText = '';
        elem.querySelector('#ptxc_a93ef85fee97dc1459fa353be1325fd3-yearly_after_tax').innerText = '';
        ptxc_a93ef85fee97dc1459fa353be1325fd3_formula_text.innerText = "";
        ptxc_a93ef85fee97dc1459fa353be1325fd3_formula_bar.setAttribute('style','display:none !important;');
     }
    
}
}
function ptxc_a93ef85fee97dc1459fa353be1325fd3_CalculatorsContents() {
    debugger;
    var TabContents = document.querySelectorAll('.ptxc_a93ef85fee97dc1459fa353be1325fd3-content');
    [].forEach.call(TabContents, ptxc_a93ef85fee97dc1459fa353be1325fd3_Calculators);
  }

  ptxc_a93ef85fee97dc1459fa353be1325fd3_CalculatorsContents();


function ptxc_a93ef85fee97dc1459fa353be1325fd3_isNumberKey(evt) 
{
    if(evt.target.value.length >= 13) return false;
  var ptxc_a93ef85fee97dc1459fa353be1325fd3_charCode = (evt.which) ? evt.which : evt.keyCode
  if(ptxc_a93ef85fee97dc1459fa353be1325fd3_charCode == 46)
  return true;
  if (ptxc_a93ef85fee97dc1459fa353be1325fd3_charCode > 31 && (ptxc_a93ef85fee97dc1459fa353be1325fd3_charCode < 48 || ptxc_a93ef85fee97dc1459fa353be1325fd3_charCode > 57))
    return false;
  return true;
}

var styles = window.getComputedStyle(document.documentElement);

var primaryColor = styles.getPropertyValue('--wp--preset--color--primary');
var secondaryColor = styles.getPropertyValue('--wp--preset--color--secondary');

var formElement = document.querySelector('.ptxc_a93ef85fee97dc1459fa353be1325fd3-table th');

formElement.style.backgroundColor = primaryColor; 
formElement.style.color = secondaryColor;
