function on_scroll() {
	console.log(window.pageYOffset);
    if (window.pageYOffset >= 160) {
    	// document.getElementById('header__hide').style.display = 'none';
    	document.getElementById('header__mini-show').style.display = 'flex'; 
	    }
    else {
    	document.getElementById('header__mini-show').style.display = 'none';
    }
}

window.onscroll=on_scroll

function show_login_form() {
	document.getElementById('page__login').style.display = 'flex';
}

function hide_login_form() {
	document.getElementById('page__login').style.display = 'none';
}