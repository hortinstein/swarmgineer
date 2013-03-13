var prompt = require('prompt');
var apis = require('./api.js');

//future add in https://github.com/flatiron/prompt#skipping-prompts
var curator_prompt = {
	name: "curator_size",
	description: "CURATOR: what size should your curator node be?",
	type: 'string',
	pattern: /^[1-9]+$/,
	message: 'type must be a number',
default:
	'66'
};
var nanode_prompt = {
	name: "nanode_size",
	description: "NANODE: what size should your riak nodes would you like?",
	type: 'string',
	pattern: /^[1-9]+$/,
	message: 'type must be a number',
default:
	'66'
};

var swarm_inputs = [{
	name: "swarm_name",
	description: "please name your swarm",
	type: 'string',
	pattern: /^[A-Za-z1-9]+$/,
	message: 'name must be a alphanumeric string',
	required: true
},
curator_prompt, nanode_prompt,
{
	name: "num_riak_nodes",
	description: "how many riak nodes do you need in the swarm",
	type: 'string',
	pattern: /^[1-9]+$/,
default:
	'5',
	message: 'number of nodes must be a number'
}]

var display_sizes = function(callback) {
		apis.sizes(function(e, r) {
			if(e) {
				console.log("unable to get latest node sizes");
				callback(e);
			} else {
				console.log('node sizes:'+JSON.stringify(r.sizes));
				//nanode_prompt.size_default = r.sizes[0].id; //sets the default to the smallest type of node 
				//curator_prompt.size_default = r.sizes[0].id; //sets the default to the smallest type of node
				//nanode_prompt.description = curator_prompt.description + r; //appends node description
				//curator_prompt.description = curator_prompt.description + r; //appends node description
				callback(null,swarm_inputs);
			}
		});
	};

var start_prompts = function(callback) {
		apis.prompts(function(e, r) { //gets the latest sizes
			display_sizes(function(e, r) {
				prompt.start();
				prompt.get(swarm_inputs, function(e, r) {
					callback(e, r);
				});
			})

		});
	};

module.exports = start_prompts;