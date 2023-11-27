const numbers = [ 1, -1, 2, 3 ];

let sum = 0;

for ( let n of numbers ){
    sum += n;
}

console.log( sum );

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
sum = numbers.reduce(( accumulator, current ) => {
    return accumulator + current;
});

console.log( sum );