var prompt = require('prompt');
var api = require('./api.js');

//future add in https://github.com/flatiron/prompt#skipping-prompts

var swarm_inputs = [{
	name: "swarm_name",
	description: "please name your swarm",
	type: 'string',
	pattern: /^[A-Za-z1-9]+$/,
	message: 'name must be a alphanumeric string',
	required: true
}, {
	name: "curator_size",
	description: "CURATOR: what size should your curator node be?",
	type: 'string',
	pattern: /^[1-9]+$/,
	message: 'type must be a number',
default:
	'66'
}, {
	name: "nanode_size",
	description: "NANODE: what size should your riak nodes would you like?",
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
}]

var display_sizes = function(callback) {
		api.prompts(function(e, r) {
			if(e) {
				console.log("unable to get latest node sizes");
				callback(e);
			} else {
				console.log(r);
			}
		})
	}

var start_prompts = function(callback) {
		apis.prompts(function(e, r) { //gets the latest sizes
			prompt.start();
			prompt.get(swarm_inputs, function(e, r) {
				callback(e, r);
			});
		});

	} else {
		callback(e)
	}

});

}

module.exports = prompts;