// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

// Read, Write, Execute
// 00000100 "Read"
// 00000010 "Write"
// 00000001 "Execute"

console.log( 1 | 2 ); // Bitwise OR
console.log( 1 & 2 ); // Bitwise AND

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | readPermission | writePermission //! Can add permissions

let message = ( myPermission & readPermission ) ? 'yes' : 'no'; //! Can check for permissions

console.log( message );