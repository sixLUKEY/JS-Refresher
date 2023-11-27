const numbers = [ 1, 2, 3, 4, 1, 1, 2 ];

const count = countOccurences( numbers, 2 );

console.log( count );

function countOccurences( array, searchElement ){
    let filteredArray = array.filter(( number ) => {
        return number === searchElement
    })

    return filteredArray.length;

    //! OR
   return array.reduce(( accumulator, current ) => {
    const occurence = ( current === searchElement ) ? 1 : 0;
    return accumulator + occurence;
   }, 0 ) 
}