// Street
// City 
// Zip Code
// showAddress( address )

const address = {
    street: 'Suikerbekkie',
    city: 'Cape Town',
    zip: 7349
}

function showAddress( address ){
    for ( key in address ){
        console.log( key, address[ key ]);
    }
}

showAddress( address );