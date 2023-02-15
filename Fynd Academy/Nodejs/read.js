const fs =require("fs");

/**
 * @Desc
 * takes file path and log content
 * @params
 * file path stream
 * 
 */
function readUTF8File(filepath){
    fs.readfile(filepath,"utf-8", (data,error)=> {
        if(error){
            console.error(error);
            return;
        }
        console,log(data)
    });
}
//non-existing file
readUTF8File("./abc.txt")

//Existing file
readUTF8File("./static/files/testfile.txt")

