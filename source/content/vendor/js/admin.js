
  function ptxc_refreshIndexes(){
    
    var ptxc_tablinks_lst = document.querySelectorAll('.ptxc-tablinks');
    for (let ptxc_Index = 0; ptxc_Index < ptxc_tablinks_lst.length; ptxc_Index++){
      var element = ptxc_tablinks_lst[ptxc_Index];
      if(element != undefined){
        var tab_content_id = element.getAttribute('ptxc-target');
        var ptxc_tab_content_element = document.getElementById(tab_content_id);
        if (ptxc_tab_content_element != undefined) {
          var countinput = ptxc_tab_content_element.querySelector('input');
          countinput.setAttribute('name','ptxc_year_'+ptxc_Index+'_taxes_count');
          countinput.setAttribute('id','ptxc_year_'+ptxc_Index+'_taxes_count');
          var TabHeadinginput = ptxc_tab_content_element.querySelector('.ptxc-tab-heading-input');
          TabHeadinginput.setAttribute('name','ptxc_year_'+ptxc_Index);
          var TabHeadingtextarea = ptxc_tab_content_element.querySelector('.ptxc-slab-content textarea');
          if(TabHeadingtextarea != undefined)
          {
            TabHeadingtextarea.setAttribute('name','ptxc_Full_Desc'+ptxc_Index);
          }
          var TabRecordBox = ptxc_tab_content_element.querySelectorAll('.ptxc-col-form');
          for (let recordindex = 0; recordindex < TabRecordBox.length; recordindex++) {
            var recordelement = TabRecordBox[recordindex];
            if(recordelement != undefined){
              var IndexDisplayDiv = recordelement.querySelector('.ptxc-col-form-inner-index');
              var RecordOldIndex = eval(parseInt(IndexDisplayDiv.innerText.replace('#','')) - 1);
              var TabOldIndex = parseInt(element.id.replace('ptxc_tab_',''));
              IndexDisplayDiv.innerText = '#'+eval(recordindex + 1);
              var recordInputlst = recordelement.querySelectorAll('.ptxc-floating-input');
              for (let inputindex = 0; inputindex < recordInputlst.length; inputindex++) {
                var inputelement = recordInputlst[inputindex];
                if(inputelement != undefined){
                  var new_name_str = inputelement.getAttribute('name').replace('_pi'+TabOldIndex,'_pi'+ptxc_Index).replace('_ci'+RecordOldIndex,'_ci'+recordindex);
                  inputelement.setAttribute('name',new_name_str);
                }
              }
            }
          }
        }
      }
      
    }
  }

  
  
  function ptxc_settabClicking(){
    var cols = document.querySelectorAll('.ptxc-tab .ptxc-tablinks');
    [].forEach.call(cols, ptxc_addClickHandlers);
    if (document.getElementsByClassName('ptxc-tablinks').length > 0){
      document.getElementsByClassName('ptxc-tablinks')[0].click();
    } 
  }
  
  function ptxc_addClickHandlers(elem) {
    elem.addEventListener('click', ptxc_activatingTabs, false);
  }
  
  function ptxc_activatingTabs(event) {
    var i, tabcontent, tablinks;
    var tabid = event.currentTarget.getAttribute("ptxc-target");
    tabcontent = document.getElementsByClassName("ptxc-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].className = tabcontent[i].className.replace(" ptxc-active", "");
    }
    tablinks = document.getElementsByClassName("ptxc-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" ptxc-tab-active", "");
    }
    document.getElementById(tabid).className += " ptxc-active";
    event.currentTarget.className += " ptxc-tab-active";
  }
  
  ptxc_settabClicking();
        
  function ptxc_dropdown_btn(event) {
    ptxc_close_dropbtn();
    event.currentTarget.nextElementSibling.classList.toggle("ptxc-show");
  }

  function ptxc_setdropdownClicking(){
    var cols = document.querySelectorAll('.ptxc-dropbtn');
    [].forEach.call(cols, ptxc_addDropdownClickHandlers);
  }

  function ptxc_addDropdownClickHandlers(elem) {
    elem.addEventListener('click', ptxc_dropdown_btn, false);
  }

  ptxc_setdropdownClicking();

  function ptxc_close_dropbtn() {
    var dropdowns = document.getElementsByClassName("ptxc-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('ptxc-show')) {
        openDropdown.classList.remove('ptxc-show');
      }
    }
  }

  function ptxc_Tab_Collapse(event) {
    if(event.target.tagName === "B"){
      event.target.parentElement.parentElement.classList.toggle("ptxc-collapsing");
    }
    else{
      event.target.parentElement.classList.toggle("ptxc-collapsing");
    }
  }

  function ptxc_addTabCollapselstHandlers(elem) {
    elem.addEventListener('click', ptxc_Tab_Collapse, false);
  }

  if(document.querySelector('.ptxc-calc-menu-btn') != undefined )
  document.querySelector('.ptxc-calc-menu-btn').addEventListener('click',menu_btn_toggle);
  if(document.querySelector('.ptxc-calc-menu-close') != undefined )
  document.querySelector('.ptxc-calc-menu-close').addEventListener('click',menu_btn_toggle);

  function menu_btn_toggle(event){
    document.querySelector('.ptxc-calc-menu-content').classList.toggle('ptxc-menu-active');
  }

  function SearchLI(event) {
    var input, filter, ul, li, a, i, txtValue;
    input = event.target;
    filter = input.value.toUpperCase();
    ul = document.querySelector(".ptxc-calc-menu-ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
    }
  }

  if(document.getElementById('ptxc-calculator-srch-input') != undefined )
  document.getElementById('ptxc-calculator-srch-input').addEventListener('keyup',SearchLI)
  window.onclick = function(event) {
    if (!event.target.matches('.ptxc-dropbtn')) {
      ptxc_close_dropbtn();
    }
  }

  if(document.querySelector('.ptxc-tab-left') != undefined){
    document.querySelector('.ptxc-tab-left').onscroll = function(event) {
      if (!event.target.matches('.ptxc-dropbtn')) {
        ptxc_close_dropbtn();
      }
    }
  }

  

  var nav_menu_li = document.querySelectorAll('.ptxc-calc-menu-ul li');
  [].forEach.call(nav_menu_li, function (_element) {
    _element.addEventListener('click',function (event) {  
      event.currentTarget.querySelector('a').click();
    });
  });

  function delete_tab(event) {
    if (confirm('Are you sure?')) {
      document.querySelector('.ptxc-tabcontent.ptxc-active').remove();
      var activeTab = document.querySelector('.ptxc-tablinks.ptxc-tab-active');
      if(activeTab.nextElementSibling != undefined){
        activeTab.nextElementSibling.click();
      }
      else if(activeTab.previousElementSibling != undefined) {
        activeTab.previousElementSibling.click();
      }
      activeTab.remove();
      document.getElementById('ptxc_total_years_count').value = eval(parseInt(document.getElementById('ptxc_total_years_count').value) - 1);
      ptxc_refreshIndexes();
    }
  }

  function delete_tab_record(event) {
    if (confirm('Are you sure?')) {
      var elem = event.currentTarget;
      var deletedBox = elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      var CountRecordBoxes = elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      var BaxParentTabIndex = CountRecordBoxes.id.replace('ptxc_year_tab_link_','');
      deletedBox.remove();
      document.getElementById('ptxc_year_'+BaxParentTabIndex+'_taxes_count').value = eval(parseInt(document.getElementById('ptxc_year_'+BaxParentTabIndex+'_taxes_count').value) - 1);
      ptxc_refreshIndexes();
    }
  }

  function rename_tab(event) {
    document.querySelector('.ptxc-tab-active').innerHTML = '<div class="inside">⋮⋮ '+event.currentTarget.value+'</div>';
  }

  function seteditor(editor_id){
    wp.editor.initialize(
      editor_id,{
        tinymce: {
          wpautop: true,
          height:'500',
          plugins : 'charmap colorpicker compat3x directionality fullscreen hr image lists media paste tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview',
          toolbar1: 'formatselect bold italic underline strikethrough | bullist numlist | blockquote hr wp_more | alignleft aligncenter alignright | link unlink | fullscreen | wp_adv',
          toolbar2: 'alignjustify forecolor | pastetext removeformat charmap | outdent indent | undo redo | wp_help'
        },
        quicktags: true,
        mediaButtons: true
      }
    );
  }
  function setptxc_tab_content_scroll_bottom(){
    
      window.scroll +=  window.scrollHeight;
    
  }
function tab_content_box_template(event){
  
  var clicking_btn = event.currentTarget;
  var tab_content = clicking_btn.parentNode.parentNode;
  if((clicking_btn.className.indexOf('ptxc-record-insert-after') !== -1) || (clicking_btn.className.indexOf('ptxc-record-insert-before') !== -1)){
    tab_content = clicking_btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
  }

  var tab_index = tab_content.id.replace('ptxc_year_tab_link_','');
  var tab_content_box_index = tab_content.querySelector('input').value;
  var template_div = get_tab_content_box(tab_index,tab_content_box_index);
  if(clicking_btn.className.indexOf('ptxc-record-insert-after') !== -1){
    var currentBox = clicking_btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    var currentBoxParent = clicking_btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    currentBoxParent.insertBefore(template_div,currentBox.nextSibling);
  }
  else if(clicking_btn.className.indexOf('ptxc-record-insert-before') !== -1){
    var currentBox = clicking_btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    var currentBoxParent = clicking_btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    currentBoxParent.insertBefore(template_div,currentBox);
  }
  else{
    document.getElementById('ptxc_year_' + tab_index + '_taxes_tbody').append(template_div);
  }
  tab_content.querySelector('input').value = eval(parseInt(tab_content_box_index) + 1);
  set_tab_box_event_handler(template_div);
  setptxc_tab_content_scroll_bottom();
  ptxc_refreshIndexes();
}
function setptxc_tab_scroll_left(){
  if(document.querySelector('.ptxc-tab') != undefined)
  {
    document.querySelector('.ptxc-tab').scrollLeft +=  document.querySelector('.ptxc-tab').scrollWidth;
  }
}

function addTabSection(event){
  var clicking_btn = event.currentTarget;
  var tab_index = document.getElementById('ptxc_total_years_count').value;
  var template_div = document.createElement('div');
  template_div.setAttribute('class','ptxc-tablinks');
  template_div.setAttribute('id','ptxc_tab_'+tab_index);
  template_div.setAttribute('ptxc-target','ptxc_year_tab_link_'+tab_index);
  template_div.innerHTML = '<div class="inside">⋮⋮ New Item</div>';

  var template_div_content = get_tab_content(tab_index);
  document.querySelector('.ptxc-tab-body').append(template_div_content);

  if(clicking_btn.className.indexOf('ptxc-tab-insert-tab-after') !== -1){
    var tab_node = clicking_btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    var tab_div = tab_node.querySelector('.ptxc-tab');
    var current_tab = document.querySelector('.ptxc-tablinks.ptxc-tab-active');
    tab_div.insertBefore(template_div,current_tab.nextSibling);
  }
  else if(clicking_btn.className.indexOf('ptxc-tab-insert-tab-before') !== -1){
    var tab_node = clicking_btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    var tab_div = tab_node.querySelector('.ptxc-tab');
    var current_tab = document.querySelector('.ptxc-tablinks.ptxc-tab-active');
    tab_div.insertBefore(template_div,current_tab);
  }
  else{
    var tab_node = clicking_btn.parentNode.parentNode;
    var tab_div = tab_node.querySelector('.ptxc-tab');
    tab_div.append(template_div);
  }
  if(template_div_content.querySelector('#ptxc_Full_Desc_editor_id_'+tab_index) != undefined)
  {
    seteditor('ptxc_Full_Desc_editor_id_'+tab_index);
  }
  document.getElementById('ptxc_total_years_count').value = eval(parseInt(tab_index) + 1);
  template_div.addEventListener('click', ptxc_activatingTabs, false);

  set_event_handlers(template_div_content);
  template_div.click();
  setptxc_tab_scroll_left();
  ptxc_refreshIndexes();
}
if(document.getElementById('ptxc_add_tab_btn') != undefined){

  document.getElementById('ptxc_add_tab_btn').addEventListener('click',addTabSection);
}

/** drag and drop start */

function sortable(section, onUpdate){
  var dragEl, nextEl, newPos, dragGhost;
  let oldPos = [...section.children].map(item => {
    item.draggable = true;
    let pos = document.getElementById(item.id).getBoundingClientRect();
    return pos;
  });
 
  function _onDragOver(e){
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      var target = e.target;
      if( target && target !== dragEl && target.nodeName == 'DIV' ){
        if(target.classList.contains('inside')) {
          e.stopPropagation();
        } else {
          var targetPos = target.getBoundingClientRect();
          var next = (e.clientY - targetPos.top) / (targetPos.bottom - targetPos.top) >= .5 || (e.clientX - targetPos.left) / (targetPos.right - targetPos.left) >= .5;    
          try {
            section.insertBefore(dragEl, next && target.nextSibling || target);
          } catch (error) {
            
          }
            
        }
      }   
  }
  
  function _onDragEnd(evt){
      evt.preventDefault();
      newPos = [...section.children].map(child => {      
           let pos = document.getElementById(child.id).getBoundingClientRect();
           return pos;
         });
      dragEl.classList.remove('ghost');
      section.removeEventListener('dragover', _onDragOver, false);
      section.removeEventListener('dragend', _onDragEnd, false);
      nextEl !== dragEl.nextSibling ? onUpdate(dragEl) : false;
  }
     
    section.addEventListener('dragstart', function(e){     
      dragEl = e.target; 
      nextEl = dragEl.nextSibling;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('Text', dragEl.textContent);
      section.addEventListener('dragover', _onDragOver, false);
      section.addEventListener('dragend', _onDragEnd, false);
      dragEl.classList.add('ghost');
  });
}


/** drag and drop end */


function set_event_handlers(element__){
  var tab_delete_item_lst = element__.querySelectorAll('.ptxc-tab-delete');
  [].forEach.call(tab_delete_item_lst, function (_element) {
    _element.addEventListener('click',delete_tab);
  });
  var tab_header_input_lst = element__.querySelectorAll('.ptxc-tab-heading-input');
  [].forEach.call(tab_header_input_lst, function (_element) {
    _element.addEventListener('input',rename_tab);
  });
  var tab_form_box_lst = element__.querySelectorAll('.ptxc-tab-footer button');
  [].forEach.call(tab_form_box_lst, function (_element) {
    _element.addEventListener('click',tab_content_box_template);
  });
  var tab_collapse_lst = element__.querySelectorAll('.ptxc-tab-header-collapse');
  [].forEach.call(tab_collapse_lst, function(event){
    event.addEventListener('click', ptxc_Tab_Collapse, false);
  });
  var tab_after_lst = element__.querySelectorAll('.ptxc-tab-insert-tab-after');
  [].forEach.call(tab_after_lst, function(event){
    event.addEventListener('click', addTabSection, false);
  });
  var tab_before_lst = element__.querySelectorAll('.ptxc-tab-insert-tab-before');
  [].forEach.call(tab_before_lst, function(event){
    event.addEventListener('click', addTabSection, false);
  });
  var tab_content_drag_lst = document.querySelectorAll('.ptxc-tab');
  [].forEach.call(tab_content_drag_lst, function(event){
    sortable(event, function (item){ 
      if (typeof ptxc_refreshIndexes === "function") {
        ptxc_refreshIndexes();
      }
    });
  });
  set_tab_box_event_handler(element__);
}

function set_tab_box_event_handler(element__){
  var ptxc_dropbtn_lst = element__.querySelectorAll('.ptxc-dropbtn');
  [].forEach.call(ptxc_dropbtn_lst, ptxc_addDropdownClickHandlers);
  var add_before_box_lst = element__.querySelectorAll('.ptxc-record-insert-before');
  [].forEach.call(add_before_box_lst, function (_element) {
    _element.addEventListener('click',tab_content_box_template);
  });
  var add_after_box_lst = element__.querySelectorAll('.ptxc-record-insert-after');
  [].forEach.call(add_after_box_lst, function (_element) {
    _element.addEventListener('click',tab_content_box_template);
  });
  var tab_record_delete_lst = element__.querySelectorAll('.ptxc-record-delete');
  [].forEach.call(tab_record_delete_lst, function (_element) {
    _element.addEventListener('click',delete_tab_record);
  });
  var tab_content_drag_lst = document.querySelectorAll('.ptxc-sortable-list');
  [].forEach.call(tab_content_drag_lst, function(event){
    sortable(event, function (item){
      if (typeof ptxc_refreshIndexes === "function") {
        ptxc_refreshIndexes();
      }
      
    });
  });
}

set_event_handlers(document);


