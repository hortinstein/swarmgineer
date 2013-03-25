var read_config = function (path, callback){
    var fs = require('fs');
    try {
        // Query the entry
        var stats = fs.lstatSync(path);
        // Is it a directory?
        if (stats.isDirectory()) {
            // Yes it is
        }
    }
    catch (e) {
        console.log('swarm configuration file not found, creating new'
    }
};

//if the module is executed directly
if (!module.parent) {
    var prompts = require('./user_prompts/swarm_prompts.js');
    var argv = require('optimist').argv;
	prompts(function (e,r) {
		console.log(r);
	});
} 
//if the module is called from another program to modify existing json
else {
    
}
