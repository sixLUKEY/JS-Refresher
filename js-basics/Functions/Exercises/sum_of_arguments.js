// sum( 1, 2, 3, 4 ) => 10

function sum( ...values ){

    if ( values.length === 1 && Array.isArray( values[0] ) ){
        let sum = 0;
        values = [...values[0]];
        values.forEach(( value ) => {
            console.log( value )
            sum += value;
        })
        return sum;
    }

    return values.reduce(( a, b ) => {
        return a + b;
    })
}

console.log( sum( [1, 2, 3, 4, 5, 7, 8] ));