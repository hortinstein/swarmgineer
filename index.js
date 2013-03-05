var request = require('request');
//http://labs.unwieldy.net/moowheel/
var prompt = require('prompt');
//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
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
	default:'66'
}, {
	name: "nanode_size",
	description: "what type of riak nodes would you like?",
	type: 'string',
	pattern: /^[1-9]+$/,
	message: 'type must be a number'
}, {
	name: "num_riak_nodes",
	description: "how many riak nodes do you need in the swarm",
	type: 'string',
	pattern: /^[1-9]+$/,
	default: '5',
	message: 'number of nodes must be a number'
}]



prompt.get(swarm_inputs, function(err, result) {
	//
	// Log the results.
	//
	console.log('input received:');
	console.log('swam: ' + result.username);
	console.log('  email: ' + result.email);
	request.post('http://localhost:8080/init', {
		form: {
			key: 'value'
		}
	})

});