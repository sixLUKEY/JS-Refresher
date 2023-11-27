const numbers = [ 1, 2, 3, 4 ];

function includes( array, searchElement ){
    return array.some(( item ) => {
       return item === searchElement
    })}

console.log(includes( numbers, 1 ));

//! OR 

function alsoIncludes( array, searchElement ){
    for ( let element of array ){
        if ( element === searchElement ){
            return true;
        }
    }
    return false;
}

console.log( alsoIncludes( numbers, -2 ));