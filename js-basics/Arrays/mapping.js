const numbers = [ 1, -1, 2, 3 ];

const filteredNumbers = numbers.filter(( number ) => {
    return number >= 0;
});
console.log( filteredNumbers );

const items = filteredNumbers.map(( number ) => {
    return '<li>' + number + '</li>';
})
console.log( items );

const html = '<ul>' + items.join('') + '</ul>';
console.log( html );

const itemObjects = filteredNumbers.map(( number ) => {
    return { value: number };
})

console.log( itemObjects );

//! OR CHAIN EVERYTHING

const numbers2 = [ 1, -1, 2, 3 ];

const items2 = numbers
.filter( n => n >= 0)
.map( n => ({ value: n }))
.filter( obj => obj.value > 1 )
.map( obj => obj.value );

console.log( items2 );