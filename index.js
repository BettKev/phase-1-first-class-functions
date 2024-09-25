function receivesAFunction(func1){
func1();  
}

function returnsANamedFunction(){
const namedFunc = () =>{return (`named function inside!`)};
return namedFunc;
}

function returnsAnAnonymousFunction(){
  return function(){};
}