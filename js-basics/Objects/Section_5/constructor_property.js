function Circle( radius ){
    this.radius = radius;
    this.draw = function(){
        console.log( 'draw' )
    }
}

const circle = new Circle( 1 );

console.log( circle.constructor )

let x = {}; // "let x = new Object();"