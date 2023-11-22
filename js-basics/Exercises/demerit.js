// Speed Limit = 70
// 5 -> 1
// Math.floor
// More than 12 points -> suspended
checkSpeed(80);

function checkSpeed(speed) {
  const speedLimit = 70;
  const pointsBreak = 5

  if ( speed < speedLimit + pointsBreak ) {
    return "okay";
  } else if (speed > speedLimit && speed < 130) {
    return Math.floor((speed - speedLimit) / pointsBreak);
  }
  return "License suspended";
}

console.log(checkSpeed(78));


//? OR 

checkSpeed2( 120 );

function checkSpeed2(speed) {
    const speedLimit = 70;
    const pointsBreak = 5;

    if ( speed < speedLimit + pointsBreak ) {
        console.log( 'ok' );
        return;
    }

    const points = Math.floor( ( speed - speedLimit ) / pointsBreak );
    if ( points >= 12 ){
        console.log( 'License suspended' );
    } else {
        console.log( points );
    }
}