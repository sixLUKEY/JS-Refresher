const numbers = [ 3, 4 ];

// ADD elements to 

//! END
numbers.push( 5, 6 );
console.log( numbers );

//! BEGINNING
numbers.unshift( 1, 2 );
console.log( numbers );

//! MIDDLE
numbers.splice( 2, 0, 'a', 'b' )
console.log( numbers );