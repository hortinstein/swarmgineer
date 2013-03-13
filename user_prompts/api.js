var prompt = require('prompt');
var digital_ocean = require('brinydeep');

var apis = {};

var api_inputs = [{
	name: "client_key",
	description: "what is your client key?",
	type: 'string',
	pattern: /^[A-Za-z0-9]+$/,
	message: 'type must be a alphanumeric string',
default:
	'66'
}, {
	name: "api_key",
	description: "what is your api key?",
	type: 'string',
	pattern: /^[A-Za-z0-9]+$/,
	message: 'type must be a alphanumeric string',
default:
	'66'
}]
var apis.prompts = function(callback) {
		prompt.start();
		prompt.get(swarm_inputs, function(e, r) {
			digital_ocean.setup(r.client_key,r.api_key);
			callback(e, digital_ocean);
		});
	};
var apis.prompts = function(callback) {

};


module.exports = prompts;