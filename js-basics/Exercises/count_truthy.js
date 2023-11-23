const array = [ 0, null, '', 1, 2, 3, 4, 5, 6, NaN, 7 ]

function countTruthy( array ){
    let newArray = []
    for ( let value in array ){
            if ( array[ value ]){
                console.log( array[ value ])
                newArray.push( array[ value ])
            }
    }
    console.log(newArray.length)
}

countTruthy( array )

//? OR

function countTruthy2( array ){
    let count = 0;
   for ( let value of array ){
       if ( value ){
           count++
        }
    }
    return count
}

console.log( countTruthy2( array ) )