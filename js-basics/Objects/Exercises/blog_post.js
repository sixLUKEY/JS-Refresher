// title
// body
// author
// views
// comments
//  ( author, body )
// isLive

const blogPost =  {
    title: 'Long lost Lorem',
    body: 'Lorem Ipsum Dolor',
    author: '<NAME>',
    views: 25,
    comments: [
        {
            author: '<NAME2>',
            body: 'Lorem Ipsum Dolor'
        },
        {
            author: '<NAME3>',
            body: 'Lorem Ipsum Dolor'
        }
    ],
    isLive: true
};

console.log( blogPost.comments[1] );