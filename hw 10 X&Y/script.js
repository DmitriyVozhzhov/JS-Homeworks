document.querySelector('.block1').onmousemove = function(event) {
	event = event || window.event;
	document.querySelector('.x').innerHTML = event.offsetX;
	document.querySelector('.y').innerHTML = event.offsetY;
console.log(event)
}
document.querySelector('html').onmousemove = function(event) {
	event = event || window.event; 
	console.log(event)
	document.querySelector('.x1').innerHTML = event.pageX;
	document.querySelector('.y1').innerHTML = event.pageY;
} 
