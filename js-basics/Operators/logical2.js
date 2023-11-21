false || true; //! True

false || 'Luke'; //! 'Luke'

false || 1; //! 1

// Falsy ( false )

undefined;
null;
0;
false;
'';
NaN;


//* Anything that is not Falsy => Truthy 


// Short circuiting

false || 1 || 5 || 'him' //! 1

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log( currentColor ); //! 'blue'