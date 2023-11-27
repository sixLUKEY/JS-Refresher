const courses = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
]

console.log( courses.includes({ id: 1, name: 'a' }));

const course = courses.find( function( course ){
    return course.name === 'a';
});

const courseIndex = courses.findIndex( function( course ){
    return course.name === 'b';
});

console.log( course );
console.log( courseIndex );