
var prompt = require('prompt');
swarm_inputs = [{
	name: "swarm_name",
	description: "please name your swarm",
	type: 'string',
	pattern: /^[A-Za-z1-9]+$/,
	message: 'name must be a alphanumeric string',
	required: true
}, {
	name: "curator_size",
	description: "what size should your curator be?",
	type: 'string',
	pattern: /^[1-9]+$/,
	message: 'type must be a number',
default:
	'66'
}, {
	name: "nanode_size",
	description: "what size of riak nodes would you like?",
	type: 'string',
	pattern: /^[1-9]+$/,
	message: 'type must be a number',
default:
	'66'
}, {
	name: "num_riak_nodes",
	description: "how many riak nodes do you need in the swarm",
	type: 'string',
	pattern: /^[1-9]+$/,
default:
	'5',
	message: 'number of nodes must be a number'
} ]


var prompts = function(callback) {
		prompt.start();
		prompt.get(swarm_inputs, function(e, r) {
			callback(e, r);
		});
	}

module.exports = prompts;