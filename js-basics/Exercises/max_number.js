function maxNumber( a, b ){
    if( a < b ){
        return b;
    } else if( a > b ){
        return a;
    } else {
        return 'a, b';
    }
}

const answer = maxNumber( 6, 3 );
console.log( answer );

//? OR

let number = max( 3, 5 )
console.log( number );

function max( a, b ){
    return ( a > b ) ? a : b;
}