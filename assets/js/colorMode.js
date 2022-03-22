const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('color');
	btnSwitch.classList.toggle('active');
	document.getElementById("switch").src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/new-moon_1f311.png";
	
	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('color')){
		localStorage.setItem('color-mode', 'true');
		document.getElementById("switch").src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/new-moon_1f311.png";
	} else {
		localStorage.setItem('color-mode', 'false');
		document.getElementById("switch").src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/rainbow_1f308.png";
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
