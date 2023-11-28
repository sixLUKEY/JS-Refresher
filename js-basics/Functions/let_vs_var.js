let x = 0;
var y = 0;

function start(){
    for ( var i = 0; i < 5; i++ ){
        console.log( i );
    }

    console.log( i );
}

// var => function scoped
// ES6: let, const => block-scoped

start();

var color = 'red';
let age = 30;

// window.color
