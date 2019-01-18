var message = document.querySelector('.message');
var button = message.querySelector('.button');
var invisible = message.querySelectorAll('.hide');

button.onclick = function() {
	var invisibleItem = invisible[0];
	var invisibleItemStyle = invisibleItem.style.display;

	if (invisibleItemStyle == '' || invisibleItemStyle == 'none') {
		for (var i = 0; i <= invisible.length - 1; i++) {
			invisible[i].style.display = 'block';
		}
		this.innerHTML = 'Скрыть';
	} else {
		for (var i = 0; i <= invisible.length - 1; i++) {
			invisible[i].style.display = 'none';
		}
		this.innerHTML = 'Показать';
	}
}