/**
 * @Desc Returns the current time in Linux epoch time,
 * @params none
 * @returns Number
 */
function getCurrentTime() {
    return Date.now();
}

/**
 * @Desc Returns the current date in UTC format
 * @params none
 * @returns Date
 */
function getCurrentDate(){
    return new Date(Date.now());
}

/**
 * @Desc Returns date in system local
 * @params date:date
 * @returns String
 */
function getLocalDate(date){
    try{
        if(!date){
            throw{
                name:"UnderfinedError",
                message:"Param date cannot be undefined or null",
            };
        }
        
        if(typeof date =="object" ||  !(date instanceof Date)){
            throw{
                name:"invalidTypeErroe",
                message:"getlocal only accept Date type",
            };
        }
        return date.toLocaleDateString();
    }catch(error){
        console.error(error);
    }
}
module.exports={
    getCurrentDate,
    getCurrentTime,
    getLocalDate
};