import { useContext } from "react";
import { GeneratorContext } from "../context/generator.context";
import { abilityBonus, skillProficiency } from "../utils/randomizer";
import { useNavigate } from "react-router-dom";
import {usePDF} from 'react-to-pdf'

function FullDetailsCard({ character }) {
 
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const { deleteCharacter } = useContext(GeneratorContext);

  return ( 
    <div key={character.id} className="characterSheet">
     <div ref={targetRef}>
      <div className='row'>
      <p>Name: {character.name} </p>
      <p>Current Campaign: {character.campaign} </p>
      </div>
      <p>Race: {character.race}</p>
      <p>Sex: {character.sex}</p>
      <p>Class: {character.job} </p>
      <p>Background: {character.background} </p>
      <p>Level: {character.lv} </p>
      <p>Xp: {character.xp} </p>

      <div>
        <p>Strenght Score: {character.strAbility}</p>
        <p>Saving throw bonus: </p>
        <p>Athletics skill proficiency bonus: </p>

        <p>Dexterity Score: {character.dexAbility}</p>
        <p>Saving throw bonus: </p>
        <p>Acrobatics skill proficiency bonus:</p>
        <p>Sleigth Of Hand skill proficiency bonus:</p>
        <p>Stealth skill proficiency bonus:</p>

        <p>Constitution Score: {character.conAbility}</p>
        <p>Saving throw bonus: </p>

        <p> Inteligence Score: {character.intAbility}</p>
        <p>Saving throw bonus: </p>
        <p>Arcana skill proficiency bonus:</p>
        <p>History skill proficiency bonus:</p>
        <p>Investigation skill proficiency bonus:</p>
        <p>Nature skill proficiency bonus:</p>
        <p>Religion skill proficiency bonus:</p>

        <p>Wisdom Score: {character.wisAbility}</p>
        <p>Saving throw bonus: </p>
        <p>Animal Handling skill proficiency bonus:</p>
        <p>Insight skill proficiency bonus:</p>
        <p>Medicine skill proficiency bonus:</p>
        <p>Perception skill proficiency bonus:</p>
        <p>Survival skill proficiency bonus:</p>

        <p>Charisma Score: {character.chaAbility}</p>
        <p>Saving throw bonus: </p>
        <p>Deception skill proficiency bonus:</p>
        <p>Intimidation skill proficiency bonus:</p>
        <p>Performance skill proficiency bonus:</p>
        <p>Persuasion skill proficiency bonus:</p>
      </div>

      <div className="Weapons">
        <p>Main Weapon: {character.mainWeapon} </p>
        <p>Ranged Weapon: {character.rangedWeapon} </p>
      </div>

      <div className="Armor">
        <p> Armor worn: {character.armor} </p>
      </div>
    </div>
    <button className='pdf' onClick={() => toPDF()}>Download PDF</button>
    </div>
  );
}

export default FullDetailsCard;
