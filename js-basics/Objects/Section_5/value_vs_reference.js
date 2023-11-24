//! Value Types : Number, String, Boolean, Symbol, Undefined, Null
//? Reference Types : Object, Function, Array

let x = { value: 10 };
let y = x;

x.value = 20;

console.log( x, y );


let obj = { value: 10 };

function increase( obj ){
    obj.value++
}

increase( obj );
console.log( obj );