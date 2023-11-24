function Circle( radius ){
    this.radius = radius;
    this.draw = function(){
        console.log( 'draw' )
    }
}

console.log( Circle.name, Circle.length, Circle.constructor )

const circle = new Circle( 1 );

const Circle1 = new Function( 'radius', `
this.radius = radius;
this.draw = function(){
    console.log( 'draw' )
}
`);

const another = new Circle1( 1 );
console.log( another )