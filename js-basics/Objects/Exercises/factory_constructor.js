// Factory Function
function newAddress( street, city, zip ){
    return {
        street,
        city,
        zip
    }
}

const address = newAddress( 'hi', 'Durban', 7052 );

console.log( address );


// Consructor Function
function CreateAddress( street, city, zip ){
    this.street = street;
    this.city = city;
    this.zip = zip;
}

const address2 = new CreateAddress( 'BillHill', 'Nevada', 7070 );

console.log( address2 );