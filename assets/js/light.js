const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('light');
	btnSwitch.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('light')){
		localStorage.setItem('light-mode', 'true');
	} else {
		localStorage.setItem('light-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('light-mode') === 'true'){
	document.body.classList.add('light');
	$("body").css("transition", "0s ease all")
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('light');
	$("body").css("transition", "0s ease all")
	btnSwitch.classList.remove('active');
}