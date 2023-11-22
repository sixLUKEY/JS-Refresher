function isLandscape( width, height ){
    return ( width > height );
}

const answer = isLandscape( 500, 1200 )
console.log( answer )