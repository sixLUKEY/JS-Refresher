const circle = {
    radius: 1,
    draw: function(){
        console.log( 'draw' );
    }
};

const another = {};

for ( let key in circle ){
    another[ key ] = circle[ key ];
}

console.log( another );


//* OR


const another2 = Object.assign({
    color: 'yellow'
}, circle )

console.log( another2 );


//* OR


const another3 = { ...circle };

console.log( another3 );