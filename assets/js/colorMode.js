const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('color');
	btnSwitch.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('color')){
		localStorage.setItem('color-mode', 'true');
	} else {
		localStorage.setItem('color-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('color-mode') === 'true'){
	document.body.classList.add('color');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('color');
	btnSwitch.classList.remove('active');
}

/* 	$("body").css("transition", "0s ease all")
	$(".nav__box").css("transition", "0s ease all")
	$("body").css("transition", ".3s ease all")
	$(".nav__box").css("transition", ".3s ease all") */