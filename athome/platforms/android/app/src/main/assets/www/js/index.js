/*
Copyright (C) 2019 Aaron E-J

This program is free software: you can redistribute it and/or modify
it under the terms of the latest version of the GNU AFFERO GENERAL PUBLIC LICENSE as published by
the Free Software Foundation, or at least version 3.
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU AFFERO GENERAL PUBLIC LICENSE for more details.

You should have received a copy of the GNU AFFERO GENERAL PUBLIC LICENSE
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


/*
function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
function onDocumentMouseMove(event) {
	mouseX = (event.clientX - windowHalfX) / 2;
	mouseY = (event.clientY - windowHalfY) / 2;
}
//
function animate() {
	requestAnimationFrame(animate);
	render();
}
function render() {
	camera.position.x += (mouseX - camera.position.x);
	camera.position.y += (- mouseY - camera.position.y);
	camera.lookAt(scene.position);
	renderer.render(scene, camera);
}
function doSomething(scroll_pos) {
	console.log(scroll_pos);
}
window.addEventListener('scroll', function (e) {
	last_known_scroll_position = window.scrollY;
	if (!ticking) {
		window.requestAnimationFrame(function () {
			doSomething(last_known_scroll_position);
			ticking = false;
		});
		ticking = true;
	}
});*/
var app = {
	// Application Constructor
	initialize: function () {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
	},
	/**
	 * onDeviceReady
	 * Bind any cordova events here. Common events are: 'pause', 'resume', etc.
	 */
	onDeviceReady: function () {
		this.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function (id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');
		receivedElement.setAttribute('class', 'start');

		console.log('Received Event: ' + id);
	},
	start: function () {
		$('#app').children().html('');
	}
};
app.initialize();
$(".app").ready(function () {
	console.log('data');
	$('a').on("click", function (link) {
		if ($(this).attr('href') === '#start') {
			app.start();
			console.log($(this).attr('href'));
		}
	});
});