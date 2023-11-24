let blogPost =  {
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

function CreateBlog( title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let blog = new CreateBlog( 'Big Short', 'The body of a Benz', 'sixLUKEY');

blog.comments[0] = {    // OR blog.comments.push()
    author: 'TWOsiii',
    body: 'The body of'
}

console.log( blog );