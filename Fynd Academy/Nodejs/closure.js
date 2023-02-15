//var:global scope
//require:import the module
//module:alert
//npm install alert
var alert=require('alert');
function init() //function1-outer/parent
{//initialization
    var name='Shruti'; //name:local variable created by init
    function displayName() //displayName:inner function,closure
    {
       alert(name); //excution output
    }
    //declaring function does not call it
    //so we are calling it explicitly
    displayName(); //inner closure,child function
}
init();
//displayName():outer function call will not achieve purpose of closure
//purpose of closure is to
//call multiple inner functions by just one outer call function