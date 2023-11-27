const numbers = [ 1, 2, 3, 4 ];

//! END
const last = numbers.pop();
console.log( numbers );
console.log( last );

//! BEGINNING
const first = numbers.shift();
console.log( numbers );
console.log( first );

//! MIDDLE
const middle = numbers.splice( 0, 1 )
console.log( numbers );