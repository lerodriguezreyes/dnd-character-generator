import "../styles/LandingScreen.css";
import { diceRoll } from "../utils/randomizer";
import { dndMemesArray, storiesImagesArray } from "../utils/randomizer";

function LandingScreen() {
  return (
    <div className="landingScreen">
      <h2 className="pageHeader"> What tales have you to share? </h2>
      <div className="wrapper">
      <div className="grid">
      <div className="pictureContainer">
      <img className="polaroid" src={dndMemesArray[diceRoll(8)]} />
      <div className="text"> Yeah... that happened.</div>
      </div>
      <div className="pictureContainer">
      <img className="polaroid" src={storiesImagesArray[diceRoll(8)]} />
      <div className="text"> Umm... </div>
      </div>
      <div className="pictureContainer">
      <img className="polaroid" src={storiesImagesArray[diceRoll(8)]} />
      <div className="text">Always man, always! </div>
      </div>
      <div className="pictureContainer">
      <img className="polaroid" src={dndMemesArray[diceRoll(8)]} />
      <div className="text"> Can't stop, won't stop! </div>
      </div>
      </div>
      </div>
      </div>
  );
}

export default LandingScreen;

  
  
  
 
  

  
  
  
  
  
  
  
  