import { diceRoll } from "../utils/randomizer";
import { dndMemesArray, storiesImagesArray } from "../utils/randomizer";

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
