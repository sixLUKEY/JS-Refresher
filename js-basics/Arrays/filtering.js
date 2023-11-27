const numbers = [ 1, -1, 2, 3 ];

const filteredNumbers = numbers.filter(( number ) => {
    return number >= 0;
});

console.log( filteredNumbers );