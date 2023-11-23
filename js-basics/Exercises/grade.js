const marks = [ 80, 150, 50, 100 ];

console.log( calculateGrade( marks ) );

function calculateGrade( marks ){
    
    const average = calculateAverage( marks );
    
    if ( average < 60 ){
        return 'F'
    } else if ( average < 70 ){
        return 'D'
    } else if ( average < 80 ){
        return 'C'
    } else if ( average < 90 ){
        return 'B'
    } else return 'A'
    
}

function calculateAverage( array ){
    let sum = 0;

    for ( let value of array ){
        sum += value;
    }

   return  sum / array.length;
}