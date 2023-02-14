function outerScope(){
    const result=[];
    function innerScope(){
        for (let i=0;i<5;i++){
            //This is storing execution of inner function
            result[i]=(function inner(x){
                return function(){
                    //additional enclosing context
                    console.log(x);
                };
            })(i);
        }
    }
        innerScope();
        for(let i=0;i<5;i++){
            result[i]();
        }
    }
outerScope();