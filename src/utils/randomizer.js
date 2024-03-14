export function diceRoll(dnumber) {
  let roll = Math.floor(Math.random() * dnumber + 1);
  console.log(`You rolled a d${dnumber} sided dice. Result:`, roll);
  return roll;
}

export function abilityBonus(abilityScore) {
  if (abilityScore >= 20) {
    return 5;
  } else if (abilityScore == 19 || abilityScore == 18) {
    return 4;
  } else if (abilityScore == 17 || abilityScore == 16) {
    return 3;
  } else if (abilityScore == 15 || abilityScore == 14) {
    return 2;
  } else if (abilityScore == 13 || abilityScore == 12) {
    return 1;
  }
}

export function skillProficiency(skill) {
  return skill ? abilityBonus(abilityScore) + 2 : abilityBonus(abilityScore);
}

export const storiesImagesArray = [
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/experience1.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/experience2.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/experience3.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/experience4.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/experience5.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/experience6.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/experience7.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/experience8.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/experience9.png?raw=true",
];

export const dndMemesArray = [
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/atreyu.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/barbarianStealth.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/binks.jpeg?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/cowabunga.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/dm.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/longRest.jpeg?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/party.jpg?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/pyramidScheme.jpg?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/smartBarb.jpg?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/unconfortableOrc.png?raw=true",
  "https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/wizardFireball.png?raw=true",
];
