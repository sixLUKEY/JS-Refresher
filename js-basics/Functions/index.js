//Performing a task
function greet(name, lastName) {
  //function( Parameter ){}
  console.log("Hello " + name + " " + lastName);
}

greet("Luke", "Evertson");
//function( Argument )

//Calculating a value
function square(number) {
  return number * number;
}

let number = square( 2 )
console.log( number )
//OR
console.log( square( 2 ))