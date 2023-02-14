var http= require('http');
var dt=require('./ownModule.js');

http.createServer(function(req,res){
    
    //res:response to request
    //response has 3 features:head/body and tail
    //head:code indicationg success or failure or status
    //200:success code, format:text/html,json.xml
     res.writeHead(200,{'context-type':'text/html'});

     //update the body of response:datacoming from different user created
     res.write("The date and time are currently : " +dt.getCurrentDate());
     //date time is being fetched from outside module
     //res.write("\nTime are currently :" +dt.getCurrentDate());
     //using the content type mentioned above as text/html user defined module

     res.end(); ///ending the write functionality for requestresponse function
}).listen(8000); //mention which port our application will run on server 