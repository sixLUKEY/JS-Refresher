let products = [
    {
        name: 'Laptop',
        priceRange: 'High'
    }, 
    {
        name: 'Tablet',
        priceRange: 'Moderate'
    }, 
    {
        name: 'Phone',
        priceRange: 'Low'
    }, 
    {
        name: 'TV',
        priceRange: 'High'
    }, 
    {
        name: 'Camera',
        priceRange: 'Moderate'
    }
]

function filterByPriceRange( products ){
    for ( let product of products ){
        if ( product.priceRange === 'High' ){
            console.log( product );
        }    
    }
}

filterByPriceRange( products )

