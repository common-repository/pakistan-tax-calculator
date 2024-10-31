
var copyButtons = document.querySelectorAll(".ptxc-btn-copy");

copyButtons.forEach(function(button) {
button.addEventListener("click", function() {
var inputElement = button.parentNode.querySelector(".ptxc-copyinput");
inputElement.select();
document.execCommand("copy");
});
});
var cards = document.querySelectorAll(".ptxc-card");

cards.forEach(function (card) {
    var paragraph = card.querySelector(".ptxc-paragraph");

    if (paragraph.scrollHeight > paragraph.clientHeight) {
        var readMoreBtn = document.createElement("a");
        readMoreBtn.textContent = "Read More ▼";
        readMoreBtn.onclick = function () {
            toggleReadMore(card, paragraph, readMoreBtn);
        };
        card.appendChild(readMoreBtn);
    }
});

function toggleReadMore(card, paragraph, button) {
    if (paragraph.classList.contains("expanded")) {
        paragraph.classList.remove("expanded");
        button.textContent = "Read More ▼";
        var mainBox = card.closest(".ptxc-main-box");
        mainBox.style.height = "auto";
    } else {
        closeAllBoxesExcept(card);
        paragraph.classList.add("expanded");
        button.textContent = "Read Less ▲";
        var mainBox = card.closest(".ptxc-main-box");
        mainBox.style.height = mainBox.scrollHeight + "px";
    }
}

function closeAllBoxesExcept(openCard) {
    var allCards = document.querySelectorAll(".ptxc-card");
    allCards.forEach(function (card) {
        if (card !== openCard) {
            var paragraph = card.querySelector(".ptxc-paragraph");
            var button = card.querySelector("a");
            if (paragraph && button) {
                paragraph.classList.remove("expanded");
                button.textContent = "Read More ▼";
                var mainBox = card.closest(".ptxc-main-box");
                mainBox.style.height = "auto";
            }
        }
    });
}

var mediaQuery = window.matchMedia("(max-width: 768px)");

function handleScreenChange(mediaQuery) {
    if (mediaQuery.matches) {
        var cards = document.querySelectorAll(".ptxc-card");
        cards.forEach(function (card) {
            var mainBox = card.closest(".ptxc-main-box");
            mainBox.style.height = "auto";
        });
    } else {
        var cards = document.querySelectorAll(".ptxc-card");
        cards.forEach(function (card) {
            var mainBox = card.closest(".ptxc-main-box");
            mainBox.style.height = "";
        });
    }
}

mediaQuery.addListener(handleScreenChange);
handleScreenChange(mediaQuery);


document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".switch input[type='checkbox']");
    checkboxes.forEach(function (checkbox) {
        
        const checkboxId = checkbox.getAttribute("value");
        if(checkboxId == "active"){
            checkbox.checked = true;
        }
        else{
            checkbox.checked = false;

        }
        checkbox.addEventListener("change", function (event) {
    
            if (this.checked) {
                activation(event.target.getAttribute('ptxc_calc_id'),'active');
                
            } else {
                activation(event.target.getAttribute('ptxc_calc_id'),'deactive');
            }
        });
    });
});
    function activation(id,status){
        jQuery(document).ready(function($) {
              $.ajax({
                url: ptxc_ajax.ajax_url,
                type: 'POST',
                data: {
                  action: 'ptxc_active_checkbox',
                  nonce: ptxc_ajax.nonce,
                  ptxc_id : id,
                  ptxc_status : status
                },
                success: function(response) {
                },
                error: function(error) {
                }
              });
        
            });
    }

    function SearchConfigurationCalc(event) {
        var input, filter, ul, li, a, i, txtValue;
        input = event.target;
        filter = input.value.toUpperCase();
        ul = document.querySelectorAll(".ptxc-activation-content");
        for (let ulindex = 0; ulindex < ul.length; ulindex++) {
            var ul_ = ul[ulindex];
            debugger
            li = ul_.querySelectorAll(".ptxc-col-6");
            if(li.length == 0){
                var _li = ul_.querySelectorAll(".ptxc-col-4");
                li = _li;
            }
            for (i = 0; i < li.length; i++) {
                
                a = li[i].querySelector(".ptxc-box-heading");
                if(a != undefined && a != null){
                    txtValue = a.innerText || a.innerHTML;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
                    } else {
                        li[i].style.display = "none";
                    }
                }
                
            }
        }
      }
      if(document.getElementById('ptxc-configuration-search') != undefined )
      document.getElementById('ptxc-configuration-search').addEventListener('keyup',SearchConfigurationCalc)