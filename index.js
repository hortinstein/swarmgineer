var control = require('control'),
	shared = Object.create(control.controller),
	i, l, controller, controllers;

var brinydeep = require('brinydeep');

shared.user = 'root';
shared.sshOptions = ['-i', '../../.ssh/digitalOcean']
controllers = control.controllers(['192.81.219.61', '192.81.218.247'], shared);

for(i = 0, l = controllers.length; i < l; i += 1) {
	controller = controllers[i];
	controller.ssh('date');
	controller.ssh('date');
	controller.ssh('date');
}

