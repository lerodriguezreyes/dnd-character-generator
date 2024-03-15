import { useContext, useEffect, useState } from "react";
import { diceRoll } from "../utils/randomizer";
import { GeneratorContext } from "../context/generator.context";
import { useNavigate } from "react-router-dom";
import "../styles/CharacterGenerator.css";

function CharacterGenerator() {
  const { addNewCharacter } = useContext(GeneratorContext);

  const [roll1, setRoll1] = useState(diceRoll(6));
  const [roll2, setRoll2] = useState(diceRoll(6));
  const [roll3, setRoll3] = useState(diceRoll(6));
  const [roll4, setRoll4] = useState(diceRoll(6));
  const [roll5, setRoll5] = useState(diceRoll(6));
  const [roll6, setRoll6] = useState(diceRoll(6));
  const [roll7, setRoll7] = useState(diceRoll(6));
  const [roll8, setRoll8] = useState(diceRoll(6));
  const [roll9, setRoll9] = useState(diceRoll(6));
  const [roll10, setRoll10] = useState(diceRoll(6));
  const [roll11, setRoll11] = useState(diceRoll(6));
  const [roll12, setRoll12] = useState(diceRoll(6));
  const [roll13, setRoll13] = useState(diceRoll(6));
  const [roll14, setRoll14] = useState(diceRoll(6));
  const [roll15, setRoll15] = useState(diceRoll(6));
  const [roll16, setRoll16] = useState(diceRoll(6));
  const [roll17, setRoll17] = useState(diceRoll(6));
  const [roll18, setRoll18] = useState(diceRoll(6));
  const [roll19, setRoll19] = useState(diceRoll(6));
  const [roll20, setRoll20] = useState(diceRoll(6));
  const [roll21, setRoll21] = useState(diceRoll(6));
  const [roll22, setRoll22] = useState(diceRoll(6));
  const [roll23, setRoll23] = useState(diceRoll(6));
  const [roll24, setRoll24] = useState(diceRoll(6));

  const [character, setCharacter] = useState(null);
  const handleChange = (e) => {
    setCharacter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheck = (e) => {
    setCharacter((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  useEffect(() => {
    console.log(character), [character];
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCharacter = { ...character };
    addNewCharacter(newCharacter);
    // navigate('/character' )
  };

  return (
    <div className="addCharacter">
      <h2 className="addCharacterHeader"> Character Generator </h2>
      <form onSubmit={handleSubmit}>
        <h3> Who are you? </h3>
        <div className="row">
          <label className="row">Character name: </label>
          <input
            className="row"
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <label>Campaign name: </label>
          <input
            type="text"
            name="campaign"
            onChange={(e) => handleChange(e)}
          />
          <label> Class: </label>
          <select type="text" name="job" onChange={(e) => handleChange(e)}>
            <option value="Artificer">Artificer</option>
            <option value="Barbarian">Barbarian</option>
            <option value="Bard">Bard</option>
            <option value="Cleric">Cleric</option>
            <option value="Druid">Druid</option>
            <option value="Fighter">Fighter</option>
            <option value="Monk">Monk</option>
            <option value="Paladin">Paladin</option>
            <option value="Ranger">Ranger</option>
            <option value="Rogue">Rogue</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Warlock">Warlock</option>
            <option value="Wizard">Wizard</option>
          </select>
          <label>Level: </label>
          <input type="text" name="lv" onChange={handleChange} />

          <label>Xp: </label>
          <input type="text" name="xp" onChange={handleChange} />

          <label> Background: </label>
          <select
            type="text"
            name="background"
            onChange={(e) => handleChange(e)}
          >
            <option value="Acolyte">Acolyte</option>
            <option value="Charlatan">Acolyte</option>
            <option value="CriminalSpy">Criminal/Spy</option>
            <option value="Entertainer">Entertainer</option>
            <option value="FolkHero">Folk Hero</option>
            <option value="Gladiator">Gladiator</option>
            <option value="GuildArtisan">Guild Artisan</option>
            <option value="Hermit">Hermit</option>
            <option value="Knight">Knight</option>
            <option value="Noble">Noble</option>
            <option value="Outlander">Outlander</option>
            <option value="Pirate">Pirate</option>
            <option value="Sage">Sage</option>
            <option value="Sailor">Sailor</option>
            <option value="Soldier">Soldier</option>
            <option value="Urchin">Urchin</option>
          </select>
        </div>

        <h3> What do you look like? </h3>
        <div className="row">
          <label> Gender: </label>
          <select type="text" name="sex" onChange={(e) => handleChange(e)}>
            <option value="Cisgender Male">Male</option>
            <option value="Cisgender Female">Female</option>
            <option value="Transgender Male">Transgender Male</option>
            <option value="Transgender Female">Transgender Female</option>
            <option value="NonBinary">Non-binary</option>
          </select>

          <label className="row"> Race: </label>
          <select type="text" name="race" onChange={(e) => handleChange(e)}>
            <option value="Human">Human</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Elf">Elf</option>
            <option value="Dragonborn">Dragonborn</option>
            <option value="Halfling">Halfling</option>
            <option value="Half-elf">Half-elf</option>
            <option value="Half-orc">Half-orc</option>
            <option value="Gnome">Gnome</option>
            <option value="Tiefling">Tiefling</option>
          </select>

          <label> Hair color: </label>
          <select
            type="text"
            name="hairColor"
            onChange={(e) => handleChange(e)}
          >
            <option value="Black">black</option>
            <option value="Brown">brown</option>
            <option value="Blond">blond</option>
            <option value="Red">red</option>
          </select>

          <label> Hair style: </label>
          <select
            type="text"
            name="hairStyle"
            onChange={(e) => handleChange(e)}
          >
            <option value="Long Straight Hair">Straight</option>
            <option value="C1urly Hair">Curly</option>
            <option value="Braided Hair">Braided</option>
            <option value="Short Hair ">Short</option>
          </select>

          <label> Eye color: </label>
          <select type="text" name="eyeColor" onChange={(e) => handleChange(e)}>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Hazel">Hazel</option>
            <option value="Brown">Brown</option>
          </select>

          <label> Skin color: </label>
          <select
            type="text"
            name="skinColor"
            onChange={(e) => handleChange(e)}
          >
            <option value="Fair">Fair</option>
            <option value="Olive">Olive</option>
            <option value="Red">Red</option>
            <option value="Dark">Dark</option>
          </select>

          <label> Body type: </label>
          <select type="text" name="bodyType" onChange={(e) => handleChange(e)}>
            <option value="Skinny">Skinny</option>
            <option value="Toned">Toned</option>
            <option value="Muscled">Muscled</option>
            <option value="Fat">Fat</option>
          </select>
        </div>

        <h3> How capable are you? </h3>
        <div className="strContainer">
          <label> Rolling for Strenght: </label>
          <></>
          <label> Roll result: {roll1 + 10} </label>
          <input
            type="radio"
            name="strAbility"
            value={roll1 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll2 + 10}</label>
          <input
            type="radio"
            name="strAbility"
            value={roll2 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll3 + 10} </label>
          <input
            type="radio"
            name="strAbility"
            value={roll3 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll4 + 10} </label>
          <input
            type="radio"
            name="strAbility"
            value={roll4 + 10}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="conContainer">
          <label> Rolling for Constitution: </label>
          <></>
          <label> Roll result: {roll5 + 10} </label>
          <input
            type="radio"
            name="conAbility"
            value={roll5 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll6 + 10}</label>
          <input
            type="radio"
            name="conAbility"
            value={roll6 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll7 + 10} </label>
          <input
            type="radio"
            name="conAbility"
            value={roll7 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll8 + 10} </label>
          <input
            type="radio"
            name="conAbility"
            value={roll8 + 10}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="dexContainer">
          <label> Rolling for Dexterity: </label>
          <></>
          <label> Roll result: {roll9 + 10} </label>
          <input
            type="radio"
            name="dexAbility"
            value={roll9 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll10 + 10}</label>
          <input
            type="radio"
            name="dexAbility"
            value={roll10 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll11 + 10} </label>
          <input
            type="radio"
            name="dexAbility"
            value={roll11 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll12 + 10} </label>
          <input
            type="radio"
            name="dexAbility"
            value={roll12 + 10}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="intContainer">
          <label> Rolling for Inteligence: </label>
          <></>
          <label> Roll result: {roll13 + 10} </label>
          <input
            type="radio"
            name="intAbility"
            value={roll13 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll14 + 10}</label>
          <input
            type="radio"
            name="intAbility"
            value={roll14 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll15 + 10} </label>
          <input
            type="radio"
            name="intAbility"
            value={roll15 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll16 + 10} </label>
          <input
            type="radio"
            name="intAbility"
            value={roll16 + 10}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="wisContainer">
          <label> Rolling for Wisdom: </label>
          <></>
          <label> Roll result: {roll17 + 10} </label>
          <input
            type="radio"
            name="wisAbility"
            value={roll17 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll18 + 10}</label>
          <input
            type="radio"
            name="wisAbility"
            value={roll18 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll19 + 10} </label>
          <input
            type="radio"
            name="wisAbility"
            value={roll19 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll20 + 10} </label>
          <input
            type="radio"
            name="wisAbility"
            value={roll20 + 10}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="chaContainer">
          <label> Rolling for Wisdom: </label>
          <></>
          <label> Roll result: {roll21 + 10} </label>
          <input
            type="radio"
            name="chaAbility"
            value={roll21 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll22 + 10}</label>
          <input
            type="radio"
            name="chaAbility"
            value={roll22 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll23 + 10} </label>
          <input
            type="radio"
            name="chaAbility"
            value={roll23 + 10}
            onChange={(e) => handleChange(e)}
          />

          <label> Roll result: {roll24 + 10} </label>
          <input
            type="radio"
            name="chaAbility"
            value={roll24 + 10}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <h3> What weapon are you wielding? </h3>
        <div className="row">
          <></>
          <label> Long Sword </label>
          <input
            type="radio"
            name="mainWeapon"
            value="Long Sword"
            onChange={(e) => handleChange(e)}
          />

          <label> Sword </label>
          <input
            type="radio"
            name="mainWeapon"
            value="Sword"
            onChange={(e) => handleChange(e)}
          />

          <label> Great Axe </label>
          <input
            type="radio"
            name="mainWeapon"
            value="Great Axe"
            onChange={(e) => handleChange(e)}
          />

          <label> Mace </label>
          <input
            type="radio"
            name="mainWeapon"
            value="Mace"
            onChange={(e) => handleChange(e)}
          />

          <label> Quarterstaff </label>
          <input
            type="radio"
            name="mainWeapon"
            value="Quarterstaff"
            onChange={(e) => handleChange(e)}
          />

          <label> Dagger </label>
          <input
            type="radio"
            name="mainWeapon"
            value="Dagger"
            onChange={(e) => handleChange(e)}
          />

          <label> Spear </label>
          <input
            type="radio"
            name="mainWeapon"
            value="Spear"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <h3> What ranged weapon are you wielding? </h3>
        <></>
        <div className="row">
          <label> Crossbow </label>
          <input
            type="radio"
            name="rangedWeapon"
            value="Crossbow"
            onChange={(e) => handleChange(e)}
          />

          <label> Shortbow </label>
          <input
            type="radio"
            name="rangedWeapon"
            value="Shortbow"
            onChange={(e) => handleChange(e)}
          />

          <label> Longbow </label>
          <input
            type="radio"
            name="rangedWeapon"
            value="Longbow"
            onChange={(e) => handleChange(e)}
          />

          <label> Sling </label>
          <input
            type="radio"
            name="rangedWeapon"
            value="Sling"
            onChange={(e) => handleChange(e)}
          />

          <label> Darts </label>
          <input
            type="radio"
            name="rangedWeapon"
            value="Dart"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <h3> What armor will you don?: </h3>
        <></>
        <div className="row">
          <label> Leather Armor </label>
          <input
            type="radio"
            name="armor"
            value="Leather Armor"
            onChange={(e) => handleChange(e)}
          />
          <label> Studded Leather Armor </label>
          <input
            type="radio"
            name="armor"
            value="Studded Leather Armor"
            onChange={(e) => handleChange(e)}
          />
          <label> Chain Mail Shirt </label>
          <input
            type="radio"
            name="armor"
            value="Chain Shirt"
            onChange={(e) => handleChange(e)}
          />
          <label> Scale Mail Armor </label>
          <input
            type="radio"
            name="armor"
            value="Scale Mail"
            onChange={(e) => handleChange(e)}
          />

          <label> Ring Mail Armor </label>
          <input
            type="radio"
            name="armor"
            value="Ring Mail"
            onChange={(e) => handleChange(e)}
          />

          <label> Plate Armor </label>

          <input
            type="radio"
            name="armor"
            value="Plate"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <h3> What languages do you speak?: </h3>
        <div className="row">
          <label> Common </label>
          <input type="checkbox" name="commonLanguage" onChange={handleCheck} />

          <label> Dwarvish </label>
          <input
            type="checkbox"
            name="dwarvishLanguage"
            onChange={handleCheck}
          />

          <label> Elvish </label>
          <input type="checkbox" name="elvishLanguage" onChange={handleCheck} />
        </div>
        <h3> How skilled are you? </h3>

        <h4> Strength based skills </h4>
        <label> Athletics </label>
        <input type="checkbox" name="athletics" onChange={handleCheck} />

        <h4> Dexterity based skills </h4>
        <div className="row">
          <label> Acrobatics </label>
          <input type="checkbox" name="acrobatics" onChange={handleCheck} />
          <label> Sleigth Of Hand </label>
          <input type="checkbox" name="sleigthOfHand" onChange={handleCheck} />
          <label> Stealth </label>
          <input type="checkbox" name="stealth" onChange={handleCheck} />
        </div>

        <h4> Inteligence based skills </h4>
        <div className="row">
          <label> Arcana </label>
          <input type="checkbox" name="arcana" onChange={handleCheck} />
          <label> History </label>
          <input type="checkbox" name="history" onChange={handleCheck} />
          <label> Investigation </label>
          <input type="checkbox" name="investigation" onChange={handleCheck} />
          <label> Nature </label>
          <input type="checkbox" name="nature" onChange={handleCheck} />
          <label> Religion </label>
          <input type="checkbox" name="religion" onChange={handleCheck} />
        </div>

        <h4> Wisdom based skills </h4>
        <div className="row">
          <label> Animal Handling </label>
          <input type="checkbox" name="animalHandling" onChange={handleCheck} />
          <label> Insight </label>
          <input type="checkbox" name="insight" onChange={handleCheck} />
          <label> Medicine </label>
          <input type="checkbox" name="medicine" onChange={handleCheck} />
          <label> Perception </label>
          <input type="checkbox" name="perception" onChange={handleCheck} />
          <label> Survival </label>
          <input type="checkbox" name="survival" onChange={handleCheck} />
        </div>

        <h4> Charisma based skills </h4>
        <div className="row">
          <label> Persuasion </label>
          <input type="checkbox" name="persuasion" onChange={handleCheck} />
          <label> Deception </label>
          <input type="checkbox" name="deception" onChange={handleCheck} />
          <label> Intimidation </label>
          <input type="checkbox" name="intimidation" onChange={handleCheck} />
          <label> Performance </label>
          <input type="checkbox" name="performance" onChange={handleCheck} />
        </div>
        <br />
        <button className="submitButton" type="submit">
          {" "}
          Create character!{" "}
        </button>
      </form>
    </div>
  );
}

export default CharacterGenerator;
