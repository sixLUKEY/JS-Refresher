// Hour
// If hour is between 6-12 am : Good morning
// If hour is between 12-6 pm : Good Afternoon
// If not : Good Evening


if ( condition ){
    statement
} else if ( anotherCondition ){
    statement
} else if ( yetAnotherCondition ){
    statement
} else {
    statement
}


let hour = 10;

if ( hour >= 6 && hour < 12 ){
    console.log('good morning');
} else if ( hour >= 12 && hour < 18 ){
    console.log( 'good afternoon' );
} else {
    console.log( 'good evening' );
}