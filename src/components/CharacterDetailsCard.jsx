import { useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { GeneratorContext } from "../context/generator.context"
import { abilityBonus, skillProficiency } from "../utils/randomizer";


function CharacterDetailsCard() {

    const {deleteCharacter, charactersData, setCharactersData } = useContext(GeneratorContext)


  return (
    <div key={charactersData.id} className='characterSheet'>
    
    <p>Name: {charactersData.name} </p>
    <p>Current Campaign: {charactersData.campaign} </p>
    <p>Race: {charactersData.race}</p>
    <p>Sex: {charactersData.sex}</p>
    <p>Class: {charactersData.job} </p>
    <p>Background: </p>
    <p>Level: {charactersData.lv} </p>
    <p>Xp: {charactersData.xp} </p>

    <div>
    
    <p>Strenght Score: {charactersData.strAbility}</p>
        <p>Saving throw bonus: </p>
        <p>Athletics skill proficiency bonus: </p>

    <p>Dexterity Score: {charactersData.dexAbility}</p>
        <p>Saving throw bonus: </p>
        <p>Acrobatics skill proficiency bonus:</p>
        <p>Sleigth Of Hand skill proficiency bonus:</p>
        <p>Stealth skill proficiency bonus:</p>
        
    <p>Constitution Score: {charactersData.conAbility}</p>
        <p>Saving throw bonus: </p>
    
    <p> Inteligence Score: {charactersData.intAbility}</p>
        <p>Saving throw bonus: </p>
        <p>Arcana skill proficiency bonus:</p>
        <p>History skill proficiency bonus:</p>
        <p>Investigation skill proficiency bonus:</p>
        <p>Nature skill proficiency bonus:</p>
        <p>Religion skill proficiency bonus:</p>
        
    <p>Wisdom Score: {charactersData.wisAbility}</p>
        <p>Saving throw bonus: </p>
        <p>Animal Handling skill proficiency bonus:</p>
        <p>Insight skill proficiency bonus:</p>
        <p>Medicine skill proficiency bonus:</p>
        <p>Perception skill proficiency bonus:</p>
        <p>Survival skill proficiency bonus:</p>

    <p>Charisma Score: {charactersData.chaAbility}</p>
        <p>Saving throw bonus: </p>
        <p>Deception skill proficiency bonus:</p>
        <p>Intimidation skill proficiency bonus:</p>
        <p>Performance skill proficiency bonus:</p>
        <p>Persuasion skill proficiency bonus:</p>        

    </div>

    <div className="Weapons">
        <p>Main Weapon: {charactersData.mainWeapon} </p>
        <p>Ranged Weapon: {charactersData.rangedWeapon} </p>
    </div>

    <div className="Armor">
        <p> Armor worn: {charactersData.armor} </p>

    </div>

    </div>  
  )
}

export default CharacterDetailsCard