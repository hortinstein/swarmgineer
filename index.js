var request = require('request');
var digital_ocean = require('brinydeep');
var prompts = require('./user_prompts/swarm_prompts.js');


//if the module is executed directly
if (!module.parent) {
	prompts(function (e,r) {
		console.log(r);
	});
}
