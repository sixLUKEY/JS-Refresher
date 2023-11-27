const numbers = [ 1, 2, 3, -4 ];

const allPositive = numbers.every(( number ) => {
    return number >= 0;
});

console.log( allPositive ); 

const somePositive = numbers.some(( number ) => {
    return number >= 0;
})

console.log( somePositive );