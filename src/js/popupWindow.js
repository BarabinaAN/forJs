var message = document.querySelector('.main__form > .input');
var button = document.querySelector('.main__form > .button');

button.onclick = function (){
	var val = message.value;

	if (val != '') {
		alert (val);
		message.value = '';
	} else {
		alert ('Упс, вы ничего не ввели!');
	}
}