//? Factory Function

function createCircle( radius, x, y,  message ){
    return {
        radius ,
        location: {
            x ,
            y ,
        },
        isVisible: true,
        draw(){
            console.log( message || 'hello there' )
        }
    }
}

const circle1 = createCircle( 1, 1, 1, 'hello' );
console.log( circle1 )

const circle2 = createCircle( 5, 4, 1 );
console.log( circle2 )

circle1.draw()