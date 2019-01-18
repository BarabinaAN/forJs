var img = document.querySelector('.main__img');
var WIDTH_SIZE = img.offsetWidth;

img.onclick = function() {
	var width = img.offsetWidth;
	var i = 100;

	if (width == WIDTH_SIZE) {
		zoom = width + i + 'px';
	} else {
		zoom = WIDTH_SIZE + 'px';
	}

	return img.style.width = zoom;
}