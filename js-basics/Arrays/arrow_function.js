const courses = [
    {
        id: 1, 
        name: 'a'
    },
    {
        id: 2, 
        name: 'b'
    },
];

const course = courses.find( course => 
     course.name === 'a'
     );

//? OR

const courseAlt = courses.find(( course ) => {
    return course.name === 'b';
})

console.log( course );
console.log( courseAlt );