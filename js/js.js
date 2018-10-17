// появление свернутой шапки
function on_scroll() {
    if (window.pageYOffset >= 160) {
    	// document.getElementById('header__hide').style.display = 'none';
    	document.getElementById('header__mini-show').style.display = 'flex'; 
	    }
    else {
    	document.getElementById('header__mini-show').style.display = 'none';
    }
}
// появление свернутой шапки при прокрутке
window.onscroll=on_scroll

// показать последние просмотренные элементы
// глоб.перем. = "переключатель", окно закрыто
var open_window = 0;
function show_last_items(el) {

    // получим top, bottom. left, right координаты
    // кнопки на которую нажимаем
    var coords = el.getBoundingClientRect();

    var last_item_block = document.getElementById('last__items-list');
    last_item_block.style.display = 'flex';

    if (window.innerWidth = 1920) {
        last_item_block.style.top = coords.top + 65 + 'px';
        last_item_block.style.left = coords.left - 19 +'px';          
    }

    if (window.innerWidth = 1768) {
        last_item_block.style.top = coords.top + 65 + 'px';
        last_item_block.style.left = coords.left - 20 +'px';          
    }

    if (window.innerWidth = 1680) {
        last_item_block.style.top = coords.top + 65 + 'px';
        last_item_block.style.left = coords.left - 21 +'px';          
    }

    if (window.innerWidth = 1600) {
        last_item_block.style.top = coords.top + 65 + 'px';
        last_item_block.style.left = coords.left - 28 +'px';          
    }

    if (window.innerWidth = 1440) {
        last_item_block.style.top = coords.top + 50 + 'px';
        last_item_block.style.left = coords.left - 52 +'px';          
    }

    if (window.innerWidth = 1280) {
        last_item_block.style.top = coords.top + 44 + 'px';
        last_item_block.style.left = coords.left - 46 +'px';          
    }

    if (window.innerWidth = 1024) {
        last_item_block.style.top = coords.top + 34 + 'px';
        last_item_block.style.left = coords.left - 38 +'px';          
    }




    // если окно закрыто
    if (open_window == 0) {
        
        // то покажем его при нажатии
        document.getElementById('last__items-list').onmousedown
        // установим "переключатель" в положение открытого окна
        setTimeout(function () { 
            open_window = 1; 
        }, 50);        
    }
    // для всего body установим вызов функции по нажатию 
    // которая скроет всплывающее окно при нажатии в любом месте экрана
    // а так же при прокрутке колеса мыши
    document.body.onclick=hide_last_items;
    document.getElementById('wrapper').addEventListener('wheel', hide_last_items);
}

// функция скрывающая окно с последними просмотренными элементами
function hide_last_items() {
    // если окно открыто
    if (open_window == 1) {
        document.getElementById('last__items-list').style.display = 'none';
        // уст. переключатель в положени "окно закрыто"
        open_window = 0;
    }
}

// показать форму ввода логина
function show_login_form() {
	document.getElementById('page__login').style.display = 'flex';
}
// скрыть форму ввода логина
function hide_login_form() {
	document.getElementById('page__login').style.display = 'none';
}
// показать форму регистрации
function show_reg_form() {
    document.getElementById('page__login').style.display = 'none';
    document.getElementById('page__registration').style.display = 'flex';
}
// скрыть форму регистрации
function hide_reg_form() {
    document.getElementById('page__registration').style.display = 'none';
}

// В таблице окончательного заказа выбрать все сразу
function check_all(checktoggle) {
    var checkboxes = new Array(); 
    checkboxes = document.getElementsByClassName('order__table-chk');

    for (var i=0; i < checkboxes.length; i++)  {
        if (checkboxes[i].type == 'checkbox')   {
          checkboxes[i].checked = checktoggle;
        }
  }
}

// Скрыть заказ
function close_order() {    
    document.getElementById('shopping__cart-wrapper').style.display = 'none';
}