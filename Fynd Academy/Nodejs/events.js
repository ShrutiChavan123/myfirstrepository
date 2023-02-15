var fs=require('fs');
//it imports the filestream from node modules
//fs=file stream is an in built module
var rs=fs.createReadStream('./demofile.txt'); ///./means path
//var is shortform for variable used to store local/temporary values
//reading outside place demo txt file
//event=action performed on an object
//event work with event handler
rs.on('open',function(){
    console.log('file is open');
});