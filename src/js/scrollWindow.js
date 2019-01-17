var up = document.querySelector('.upward');
var header = document.querySelector('.main');
var box;

function getCoords(item) {
  box = item.getBoundingClientRect();
  box = box.top + pageYOffset;
}

up.onclick = function() {
	getCoords(header);	
	window.scrollTo(0,box);
}