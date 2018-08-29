var fs = require('fs')
var jsyaml = require('js-yaml')

var jsonExt = /\.json$/

fs.readdirSync('.').forEach(fileName => {
	console.log('file',fileName)
    if(jsonExt.test(fileName)){
        var yamlFile = fileName.replace(jsonExt,'.yaml')
        var json = require(process.cwd()+'/'+fileName)
        var yaml = jsyaml.safeDump(json)
        fs.writeFileSync(yamlFile,yaml)
    }    
});
