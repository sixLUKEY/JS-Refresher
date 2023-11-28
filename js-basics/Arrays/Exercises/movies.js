const movies = [
    {
        title: 'a',
        year: 2020,
        rating: 4.5
    },
    {
        title: 'b',
        year: 2020,
        rating: 4.7
    },
    {
        title: 'c',
        year: 2020,
        rating: 3
    },
    {
        title: 'd',
        year: 2019,
        rating: 4.5
    }
]

// All movies in 2020 with rating > 4
// Sorted by rating in Decscending order
// Pick their title to display on console

let filteredArray = movies.filter( m => {
    return m.year === 2020 && m.rating > 4
})
.sort(( a, b ) => {
    // const ratingA = a.rating;
    // const ratingB = b.rating;

    // if ( ratingA > ratingB ) return -1;
    // if ( ratingA < ratingB ) return 1;
    // return 0;
    return a.rating - b.rating
})
.reverse()

console.log( filteredArray );

const newArray = filteredArray.map( m => {
   return m.title
})

console.log( newArray );