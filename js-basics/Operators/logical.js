// Logical AND ( && )
// Returns TRUE if both operands are TRUE

console.log( true && true ); //! True
console.log( false && true ); //! False
console.log( true && false ); //! False

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log( eligibleForLoan ); //! True


// Logical OR ( || )
// Returns TRUE if one of the operands are TRUE

let highincome = true;
let goodcreditScore = false;
let eligibleforLoan = highincome || goodcreditScore;

console.log( eligibleForLoan ); //! True


// Not ( ! )

let applicationRefused = !eligibleForLoan;

console.log( applicationRefused ); //! False