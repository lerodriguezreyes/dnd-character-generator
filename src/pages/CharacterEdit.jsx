import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { GeneratorContext } from "../context/generator.context";
import axios from "axios";
import { BACKEND_URL } from "../utils/BACKEND_API";

function CharacterEdit() {
  const [editCharacter, setEditCharacter] = useState(null);
  const [thisIndex, setThisIndex] = useState(0);
  const { charactersData, setCharactersData } = useContext(GeneratorContext);
  const { foundId } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEditCharacter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheck = (e) => {
    setEditCharacter((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newCharacter = [...charactersData];
    newCharacter[thisIndex] = editCharacter;
    setCharactersData(newCharacter);
    // axios.put(BACKEND_URL +'characters'+'foundId' ,newCharacter )
    // .then
    //.catch
    navigate(`/details/${foundId}`);
  };

  useEffect(() => {
    let foundCharacter = charactersData.find((character, i) => {
      setThisIndex(i);
      return character.id === foundId;
    });
    console.log(foundCharacter);
    setEditCharacter(foundCharacter);
  }, []);

  return (
    <>
      <h2>Edit Character</h2>
      {editCharacter && (
        <form onSubmit={handleSubmit}>
          <label>Character name: </label>
          <input
            type="text"
            name="name"
            value={editCharacter.name}
            onChange={(e) => handleChange(e)}
          />
          <label>Campaign name: </label>
          <input
            type="text"
            name="campaign"
            value={editCharacter.campaign}
            onChange={(e) => handleChange(e)}
          />
          <label>Level: </label>
          <input
            type="text"
            name="lv"
            value={editCharacter.lv}
            onChange={handleChange}
          />
          <label>Xp: </label>
          <input
            type="text"
            name="xp"
            value={editCharacter.xp}
            onChange={handleChange}
          />
          <label> Change your main weapon: </label>
          <input
            type="radio"
            name="mainWeapon"
            value="sword"
            onChange={(e) => handleChange(e)}
          />
          <label> Sword </label>
          <input
            type="radio"
            name="mainWeapon"
            value="greatAxe"
            onChange={(e) => handleChange(e)}
          />
          <label> Great Axe </label>
          <input
            type="radio"
            name="mainWeapon"
            value="mace"
            onChange={(e) => handleChange(e)}
          />
          <label> Mace </label>
          <input
            type="radio"
            name="mainWeapon"
            value="quarterstaff"
            onChange={(e) => handleChange(e)}
          />
          <label> Quarterstaff </label>
          <input
            type="radio"
            name="mainWeapon"
            value="dagger"
            onChange={(e) => handleChange(e)}
          />
          <label> Dagger </label>
          <input
            type="radio"
            name="mainWeapon"
            value="spear"
            onChange={(e) => handleChange(e)}
          />
          <label> Spear </label>

          <label> Change your ranged weapon: </label>
          <input
            type="radio"
            name="rangedWeapon"
            value="crossbow"
            onChange={(e) => handleChange(e)}
          />
          <label> Crossbow </label>
          <input
            type="radio"
            name="rangedWeapon"
            value="shortbow"
            onChange={(e) => handleChange(e)}
          />
          <label> Shortbow </label>
          <input
            type="radio"
            name="rangedWeapon"
            value="longbow"
            onChange={(e) => handleChange(e)}
          />
          <label> Longbow </label>
          <input
            type="radio"
            name="rangedWeapon"
            value="sling"
            onChange={(e) => handleChange(e)}
          />
          <label> Sling </label>
          <input
            type="radio"
            name="rangedWeapon"
            value="dart"
            onChange={(e) => handleChange(e)}
          />
          <label> Darts </label>

          <label> Change your armor: </label>
          <input
            type="radio"
            name="armor"
            value="leatherArmor"
            onChange={(e) => handleChange(e)}
          />
          <label> Leather Armor </label>
          <input
            type="radio"
            name="armor"
            value="studdedLeatherArmor"
            onChange={(e) => handleChange(e)}
          />
          <label> Studded Leather Armor </label>
          <input
            type="radio"
            name="armor"
            value="chainShirt"
            onChange={(e) => handleChange(e)}
          />
          <label> Chain Mail Shirt </label>
          <input
            type="radio"
            name="armor"
            value="scaleMail"
            onChange={(e) => handleChange(e)}
          />
          <label> Scale Mail Armor </label>
          <input
            type="radio"
            name="armor"
            value="ringMail"
            onChange={(e) => handleChange(e)}
          />
          <label> Ring Mail Armor </label>
          <input
            type="radio"
            name="armor"
            value="plate"
            onChange={(e) => handleChange(e)}
          />
          <label> Plate Armor </label>

          <label> Did you learn a new language?: </label>
          <input type="checkbox" name="commonLanguage" onChange={handleCheck} />
          <label> Common </label>
          <input
            type="checkbox"
            name="dwarvishLanguage"
            onChange={handleCheck}
          />
          <label> Dwarvish </label>
          <input type="checkbox" name="elvishLanguage" onChange={handleCheck} />
          <label> Elvish </label>

          <label> Did you learn a new proficiency?: </label>
          <input type="checkbox" name="athletics" onChange={handleCheck} />
          <label> Athletics - Strength based </label>
          <input type="checkbox" name="acrobatics" onChange={handleCheck} />
          <label> Acrobatics - Dexterity based </label>
          <input type="checkbox" name="sleigthOfHand" onChange={handleCheck} />
          <label> Sleigth Of Hand - Dexterity based </label>
          <input type="checkbox" name="stealth" onChange={handleCheck} />
          <label> Stealth - Dexterity based </label>
          <input type="checkbox" name="arcana" onChange={handleCheck} />
          <label> Arcana - Inteligence based </label>
          <input type="checkbox" name="history" onChange={handleCheck} />
          <label> History - Inteligence based </label>
          <input type="checkbox" name="investigation" onChange={handleCheck} />
          <label> Investigation - Inteligence based </label>
          <input type="checkbox" name="nature" onChange={handleCheck} />
          <label> Nature - Inteligence based </label>
          <input type="checkbox" name="religion" onChange={handleCheck} />
          <label> Religion - Inteligence based </label>
          <input type="checkbox" name="animalHandling" onChange={handleCheck} />
          <label> Animal Handling - Wisdom based </label>
          <input type="checkbox" name="insight" onChange={handleCheck} />
          <label> Insight - Wisdom based </label>
          <input type="checkbox" name="medicine" onChange={handleCheck} />
          <label> Medicine - Wisdom based </label>
          <input type="checkbox" name="perception" onChange={handleCheck} />
          <label> Perception - Wisdom based </label>
          <input type="checkbox" name="survival" onChange={handleCheck} />
          <label> Survival - Wisdom based </label>
          <input type="checkbox" name="persuasion" onChange={handleCheck} />
          <label> Persuasion - Charisma based </label>
          <input type="checkbox" name="deception" onChange={handleCheck} />
          <label> Deception - Charisma based </label>
          <input type="checkbox" name="intimidation" onChange={handleCheck} />
          <label> Intimidation - Charisma based </label>
          <input type="checkbox" name="performance" onChange={handleCheck} />
          <label> Performance - Charisma based </label>
        </form>
      )}
    </>
  );
}
export default CharacterEdit;
