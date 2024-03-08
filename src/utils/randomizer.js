export function diceRoll (dnumber) {
  let roll = Math.floor(Math.random() * dnumber + 1);
  console.log(`You rolled a d${dnumber} sided dice. Result:`, roll ); 
  return roll
};
