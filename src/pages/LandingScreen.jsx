import { diceRoll } from "../utils/randomizer";

const storiesImagesArray = [
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

const dndMemesArray = [
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/atreyu.png?raw=true',
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/barbarianStealth.png?raw=true',
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/binks.jpeg?raw=true',
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/cowabunga.png?raw=true',
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/dm.png?raw=true',
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/longRest.jpeg?raw=true',
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/party.jpg?raw=true',
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/pyramidScheme.jpg?raw=true',
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/smartBarb.jpg?raw=true',
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/unconfortableOrc.png?raw=true',
  'https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/wizardFireball.png?raw=true'
]

function LandingScreen() {
  return (
    <div className="pageContent">
    <h2 className="header"> Memories of adventures past! </h2>
      <div className="wrapper">
      
        <div className="picture">
          <div className="polaroid">
            <img src={storiesImagesArray[diceRoll(8)]} />
            <div className="caption">Always 100%</div>
          </div>
        </div>

        <div className="picture">
          <div className="polaroid">
            <img src={dndMemesArray[diceRoll(10)]} />
            <div className="caption">Ouch! </div>
          </div>
        </div>

        <div className="picture">
          <div className="polaroid">
            <img src={storiesImagesArray[diceRoll(8)]} />
            <div className="caption">Adventurer life </div>
          </div>
        </div>

        <div className="picture">
          <div className="polaroid">
            <img src={dndMemesArray[diceRoll(10)]} />
            <div className="caption">That was fun!</div>
          </div>
        </div>
        <div className="picture">
          <div className="polaroid">
            <img src={storiesImagesArray[diceRoll(8)]} />
            <div className="caption">Oh no!</div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default LandingScreen;
