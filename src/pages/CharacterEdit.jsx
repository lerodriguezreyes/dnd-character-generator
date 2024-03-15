import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { GeneratorContext } from "../context/generator.context";
import LostCharacter from "../components/LostCharacter";
import axios from "axios";
import "../styles/CharacterGenerator.css";

function CharacterEdit() {
  const [editCharacter, setEditCharacter] = useState(null);
  const [thisIndex, setThisIndex] = useState(0);
  const { charactersData, setCharactersData, getCharacters } =
    useContext(GeneratorContext);
  const { foundId } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.type === "radio") {
      if (e.target.checked === true) {
        setEditCharacter((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else {
      setEditCharacter((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
    console.log("this is character as it is changing", editCharacter);
  };

  const handleCheck = (e) => {
    setEditCharacter((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        import.meta.env.VITE_SERVER_URL + "characters" + `/${foundId}`,
        editCharacter
      )
      .then((response) => {
        console.log("Character updated ===>", response.data);
        getCharacters();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        navigate(`/detail/${foundId}`);
      });
  };

  useEffect(() => {
    let foundCharacter = charactersData.find((character, i) => {
      setThisIndex(i);
      return character.id === foundId;
    });
    console.log("This is the found character to be edited ==>", foundCharacter);
    setEditCharacter(foundCharacter);
  }, [charactersData]);

  return (
    <div className="editCharacter">
      <h2 className="editCharacterHeader">Feel like changing something?</h2>
      {!editCharacter && <LostCharacter />}
      {editCharacter && (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="row">
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
            </div>

            <h3> Change your main weapon: </h3>

            <div className="row">
              <label> Long Sword </label>
              <input
                type="radio"
                name="mainWeapon"
                value="Long Sword"
                defaultChecked={editCharacter.mainWeapon == "Long Sword"}
                onChange={(e) => handleChange(e)}
              />
              <label> Sword </label>
              <input
                type="radio"
                name="mainWeapon"
                value="Sword"
                defaultChecked={editCharacter.mainWeapon == "Sword"}
                onChange={(e) => handleChange(e)}
              />
              <label> Great Axe </label>
              <input
                type="radio"
                name="mainWeapon"
                value="Great Axe"
                defaultChecked={editCharacter.mainWeapon == "Great Axe"}
                onChange={(e) => handleChange(e)}
              />
              <label> Mace </label>
              <input
                type="radio"
                name="mainWeapon"
                value="Mace"
                defaultChecked={editCharacter.mainWeapon == "Mace"}
                onChange={(e) => handleChange(e)}
              />

              <label> Quarterstaff </label>
              <input
                type="radio"
                name="mainWeapon"
                value="Quarterstaff"
                defaultChecked={editCharacter.mainWeapon == "Quarterstaff"}
                onChange={(e) => handleChange(e)}
              />
              <label> Dagger </label>
              <input
                type="radio"
                name="mainWeapon"
                value="Dagger"
                defaultChecked={editCharacter.mainWeapon == "Dagger"}
                onChange={(e) => handleChange(e)}
              />

              <label> Spear </label>
              <input
                type="radio"
                name="mainWeapon"
                value="Spear"
                defaultChecked={editCharacter.mainWeapon == "Spear"}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <h3> Change your ranged weapon: </h3>
            <div className="row">
              <label> Crossbow </label>
              <input
                type="radio"
                name="rangedWeapon"
                value="Crossbow"
                defaultChecked={editCharacter.rangedWeapon == "Crossbow"}
                onChange={(e) => handleChange(e)}
              />

              <label> Shortbow </label>
              <input
                type="radio"
                name="rangedWeapon"
                value="Shortbow"
                defaultChecked={editCharacter.rangedWeapon == "Shortbow"}
                onChange={(e) => handleChange(e)}
              />

              <label> Longbow </label>
              <input
                type="radio"
                name="rangedWeapon"
                value="Longbow"
                defaultChecked={editCharacter.rangedWeapon == "Longbow"}
                onChange={(e) => handleChange(e)}
              />

              <label> Sling </label>
              <input
                type="radio"
                name="rangedWeapon"
                value="Sling"
                defaultChecked={editCharacter.rangedWeapon == "Sling"}
                onChange={(e) => handleChange(e)}
              />

              <label> Darts </label>
              <input
                type="radio"
                name="rangedWeapon"
                value="Darts"
                defaultChecked={editCharacter.rangedWeapon == "Dart"}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <h3> Change your armor: </h3>
            <div className="row">
              <label> Leather Armor </label>
              <input
                type="radio"
                name="armor"
                value="Leather Armor"
                defaultChecked={editCharacter.armor == "Leather Armor"}
                onChange={(e) => handleChange(e)}
              />

              <label> Studded Leather Armor </label>
              <input
                type="radio"
                name="armor"
                value="Studded Leather Armor"
                defaultChecked={editCharacter.armor == "Studded Leather Armor"}
                onChange={(e) => handleChange(e)}
              />

              <label> Chain Mail Shirt </label>
              <input
                type="radio"
                name="armor"
                value="Chain Shirt"
                defaultChecked={editCharacter.armor == "Chain Shirt"}
                onChange={(e) => handleChange(e)}
              />

              <label> Scale Mail Armor </label>
              <input
                type="radio"
                name="armor"
                value="Scale Mail"
                defaultChecked={editCharacter.armor == "Scale Mail"}
                onChange={(e) => handleChange(e)}
              />

              <label> Ring Mail Armor </label>
              <input
                type="radio"
                name="armor"
                value="Ring Mail"
                defaultChecked={editCharacter.armor == "Ring Mail"}
                onChange={(e) => handleChange(e)}
              />

              <label> Plate Armor </label>
              <input
                type="radio"
                name="armor"
                value="Plate Mail"
                defaultChecked={editCharacter.armor == "Plate Mail"}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <h3> Did you learn a new language?: </h3>
            <div className="row">
              <label> Common </label>
              <input
                type="checkbox"
                name="commonLanguage"
                checked={editCharacter.commonLanguage}
                onChange={handleCheck}
              />

              <label> Dwarvish </label>
              <input
                type="checkbox"
                name="dwarvishLanguage"
                checked={editCharacter.dwarvishLanguage}
                onChange={handleCheck}
              />

              <label> Elvish </label>
              <input
                type="checkbox"
                name="elvishLanguage"
                checked={editCharacter.elvishLanguage}
                onChange={handleCheck}
              />
            </div>
            <h3> Did you learn a new proficiency?: </h3>
            <h4> Strength Based Skills </h4>

            <label> Athletics - </label>
            <input
              type="checkbox"
              name="athletics"
              checked={editCharacter.athletics}
              onChange={handleCheck}
            />

            <h4>Dexterity Based Skills</h4>
            <div className="row">
              <label> Acrobatics</label>
              <input
                type="checkbox"
                name="acrobatics"
                checked={editCharacter.acrobatics}
                onChange={handleCheck}
              />

              <label> Sleigth Of Hand</label>
              <input
                type="checkbox"
                name="sleigthOfHand"
                checked={editCharacter.sleightOfHand}
                onChange={handleCheck}
              />

              <label> Stealth</label>
              <input
                type="checkbox"
                name="stealth"
                checked={editCharacter.stealth}
                onChange={handleCheck}
              />
            </div>
            <h4>Inteligence Based Skills</h4>
            <div className="row">
              <label> Arcana </label>
              <input
                type="checkbox"
                name="arcana"
                checked={editCharacter.arcana}
                onChange={handleCheck}
              />
              <label> History </label>
              <input
                type="checkbox"
                name="history"
                checked={editCharacter.history}
                onChange={handleCheck}
              />

              <label> Investigation </label>
              <input
                type="checkbox"
                name="investigation"
                checked={editCharacter.investigation}
                onChange={handleCheck}
              />

              <label> Nature</label>
              <input
                type="checkbox"
                name="nature"
                checked={editCharacter.nature}
                onChange={handleCheck}
              />

              <label> Religion</label>
              <input
                type="checkbox"
                name="religion"
                checked={editCharacter.religion}
                onChange={handleCheck}
              />
            </div>
            <h4> Wisdom Based Skills </h4>
            <div className="row">
              <label> Animal Handling</label>
              <input
                type="checkbox"
                name="animalHandling"
                checked={editCharacter.animalHandling}
                onChange={handleCheck}
              />

              <label> Insight</label>
              <input
                type="checkbox"
                name="insight"
                checked={editCharacter.insight}
                onChange={handleCheck}
              />

              <label>Medicine</label>
              <input
                type="checkbox"
                name="medicine"
                checked={editCharacter.medicine}
                onChange={handleCheck}
              />

              <label> Perception</label>
              <input
                type="checkbox"
                name="perception"
                checked={editCharacter.perception}
                onChange={handleCheck}
              />

              <label> Survival</label>
              <input
                type="checkbox"
                name="survival"
                checked={editCharacter.survival}
                onChange={handleCheck}
              />
            </div>
            <h3>Charisma Based Skills</h3>
            <div className="row">
              <label> Persuasion</label>
              <input
                type="checkbox"
                name="persuasion"
                checked={editCharacter.persuasion}
                onChange={handleCheck}
              />
              <label> Deception </label>
              <input
                type="checkbox"
                name="deception"
                checked={editCharacter.deception}
                onChange={handleCheck}
              />

              <label> Intimidation</label>
              <input
                type="checkbox"
                name="intimidation"
                checked={editCharacter.intimidation}
                onChange={handleCheck}
              />
              <label> Performance </label>
              <input
                type="checkbox"
                name="performance"
                checked={editCharacter.performance}
                onChange={handleCheck}
              />
            </div>
            <button className="submitButton" type="submit">
              Submit Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default CharacterEdit;
