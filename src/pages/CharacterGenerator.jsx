import { useEffect, useState } from "react"
import { diceRoll } from "../utils/randomizer"


function CharacterGenerator() {

  const [roll1, setRoll1] = useState(diceRoll(6))
  const [roll2, setRoll2] = useState(diceRoll(6))
  const [roll3, setRoll3] = useState(diceRoll(6))
  const [roll4, setRoll4] = useState(diceRoll(6))
  const [roll5, setRoll5] = useState(diceRoll(6))
  const [roll6, setRoll6] = useState(diceRoll(6))
  const [roll7, setRoll7] = useState(diceRoll(6))
  const [roll8, setRoll8] = useState(diceRoll(6))
  const [roll9, setRoll9] = useState(diceRoll(6))
  const [roll10, setRoll10] = useState(diceRoll(6))
  const [roll11, setRoll11] = useState(diceRoll(6))
  const [roll12, setRoll12] = useState(diceRoll(6))
  const [roll13, setRoll13] = useState(diceRoll(6))
  const [roll14, setRoll14] = useState(diceRoll(6))
  const [roll15, setRoll15] = useState(diceRoll(6))
  const [roll16, setRoll16] = useState(diceRoll(6))
  const [roll17, setRoll17] = useState(diceRoll(6))
  const [roll18, setRoll18] = useState(diceRoll(6))

  const [character, setCharacter ] = useState(null)
  const handleChange = (e)=> {
    setCharacter(prev =>( {...prev, [e.target.name] : e.target.value}))
  }

  const handleCheck = (e) =>{
  setCharacter(prev => ({...prev, [e.target.name]: e.target.checked}))
  }
useEffect(() => {
  console.log(character), [character]
})
 const handleSubmit = (e) => {
    e.preventDefault();
    // const textToImagePrompt = `Photorealistic portrait of a ${skinColor}-skinned ${sex} ${job} dungeons and dragons character that has ${eyeColor} eyes, ${hairColor} colored hair styled ${hairStlye} fashion, wearing ${armor} and wielding ${mainWeapon}.`
    const newCharacter = {
      name,
      campaign,
      sex,
      race,
      job,
      strAbility,
      conAbility,
      dexAbility,
      intAbility,
      wisAbility,
      chaAbility,
      hairColor,
      hairStlye,
      eyeColor,
      skinColor,
      bodyType,
      background,
      mainWeapon,
      rangedWeapon,
      armor,
      commonLanguage,
      dwarvishLanguage,
      elvishLanguage,
      giantLanguage,
      gnomishLanguage,
      goblinLanguage,
      halflingLanguage,
      orcLanguage,
      abyssalLanguage,
      celestialLanguage,
      draconincLanguage,
      deepSpeechLanguage,
      infernalLanguage,
      primordialLanguage,
      sylvanLanguage,
      undercommonLanguage,
      artisanTools,
      alchemistSupplies,
      brewerSupplies,
      calligrapherSupplies,
      carpenterTools,
      cartographerTools,
      cobblerTools,
      cookTools,
      glassblowerTools,
      thievesTools,
      jewellerTools,
      leatherworkerTools,
      masonTools,
      painterSupplies,
      potterTools,
      smithTools,
      tinkerTools,
      weaverTools,
      woodcarverTools,
      disguiseKit,
      cardSet,
      diceSet, 
      herbalismKit,
      forgeryKit,
      musicalInstrument,
      navigatorTools,
      poisonerKit,
      athletics,
      acrobatics,
      sleightOfHand,
      stealth,
      arcana,
      history,
      investigation,
      nature,
      religion,
      animalHandling,
      insight,
      medicine,
      perception,
      survival,
      persuasion,
      deception,
      intimidation,
      performance,
      cantrip1,
      cantrip2,
      cantrip3,
      cantrip4,
      cantrip5,
      spell1,
      spell2,
      spell3,
      spell4,
      spell5,
      spell6,
      spell7,
      spell8,
      spell9,
      spell10,
      weapon,
      rangedWeapon,
      armor,
      hasShield,
      starterpack,
      currency,
      prompt}

      addNewCharacter(newCharacter)

      setCharacter(null)

  }
  

  return (
  <div>
    <h2> Character Generator </h2>
      <form onSubmit={handleSubmit}>

        <label>Character name: </label>
          <input 
            type='text'
            name='name'
            onChange={(e) => handleChange(e)}/>

        <label>Campaign name: </label>
          <input 
            type='text'
            name='campaign'
            onChange={(e) => handleChange(e)}/>

        <label> Choose your sex: </label>
          <select
          type='text'
          name='sex'
          onChange={(e) => handleChange(e)}>
              <option value="cisgenderMale">Male</option>
              <option value="cisgenderFemale">Female</option>
              <option value="transgenderMale">Transgender Male</option>
              <option value="transgenderFemale">Transgender female</option>
              <option value="nonBinary">Non-binary</option>
          </select>

        <label> Choose your Race: </label>
          <select 
            type='text'
            name='race'
            onChange={(e) => handleChange(e)}>
              <option value="human">human</option>
              <option value="dwarf">dwarf</option>
              <option value="elf">elf</option>
              <option value="dragonborn">dragonborn</option>
              <option value="halfling">halfling</option>
              <option value="half-elf">half-elf</option>
              <option value="half-orc">half-orc</option>
              <option value="gnome">gnome</option>
              <option value="tiefling">tiefling</option>

          </select>

        <label> Class: </label>
          <select 
            type='text'
            name='job'
            onChange={(e) => handleChange(e)}>
              <option value="artificer">artificer</option>
              <option value="barbarian">barbarian</option>
              <option value="bard">bard</option>
              <option value="cleric">cleric</option>
              <option value="druid">druid</option>
              <option value="fighter">fighter</option>
              <option value="monk">monk</option>
              <option value="paladin">paladin</option>
              <option value="ranger">ranger</option>
              <option value="rogue">rogue</option>
              <option value="sorcerer">sorcerer</option>
              <option value="warlock">warlock</option>
              <option value="wizard">wizard</option>

          </select>

        <label> Roll for Strenght, pick the highest value: </label>
          <input type="radio" name="strAbility" value={roll1 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll1 + 10} </label>
          <input type="radio" name="strAbility" value={roll2 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result:  {roll2 + 10}</label>
          <input type="radio" name="strAbility" value={roll3 + 10} onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll3 + 10} </label>

        <label> Roll for Constitution, pick the highest value: </label>
          <input type="radio" name="conAbility" value={roll4 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll4 + 10} </label>
          <input type="radio" name="conAbility" value={roll5 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result:  {roll5 + 10}</label>
          <input type="radio" name="conAbility" value={roll6 + 10} onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll6 + 10} </label>

            <label> Roll for Dexterity, pick the highest value: </label>
          <input type="radio" name="dexAbility" value={roll7 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll7 + 10} </label>
          <input type="radio" name="dexAbility" value={roll8 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll8 + 10}</label>
          <input type="radio" name="dexAbility" value={roll9 + 10} onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll9 + 10} </label>
            
            <label> Roll for Inteligence, pick the highest value: </label>
          <input type="radio" name="intAbility" value={roll10 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll10 + 10} </label>
          <input type="radio" name="intAbility" value={roll11 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result:  {roll11 + 10}</label>
          <input type="radio" name="intAbility" value={roll12 +10} onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll12 + 10} </label>

            <label> Roll for Wisdom, pick the highest value: </label>
          <input type="radio" name="wisAbility" value={roll13 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll13 + 10} </label>
          <input type="radio" name="wisAbility" value={roll14 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result:  {roll14 + 10}</label>
          <input type="radio" name="wisAbility" value={roll15 + 10} onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll15 + 10} </label>

            <label> Roll for Charisma, pick the highest value: </label>
          <input type="radio" name="chaAbility" value={roll16 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll16 + 10} </label>
          <input type="radio" name="chaAbility" value={roll17 + 10}  onChange={(e) => handleChange(e)} />
            <label> Roll result:  {roll17 + 10}</label>
          <input type="radio" name="chaAbility" value={roll18 + 10} onChange={(e) => handleChange(e)} />
            <label> Roll result: {roll18 + 10} </label>

        <label> Hair color: </label>
          <select 
            type='text'
            name='hairColor'
           
            onChange={(e) => handleChange(e)}>
            <option value="black">black</option>
            <option value="brown">brown</option>
            <option value="blond">blond</option>
            <option value="red">red</option>
          </select>

          <label> Hair style: </label>
            <select 
              type='text'
              name='hairStyle'
              
              onChange={(e) => handleChange(e)}>
              <option value="straight-hair">straight</option>
              <option value="curly">curly</option>
              <option value="braided">braided</option>
              <option value="bald">bald</option>
          </select>

          <label> Eye color: </label>
            <select 
              type='text'
              name='eyeColor'
             
              onChange={(e) => handleChange(e)}>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="hazel">hazel</option>
              <option value="brown">brown</option>
            </select>

          <label> Skin color: </label>
            <select 
              type='text'
              name='skinColor'
              onChange={(e) => handleChange(e)}>
              <option value="fair">fair</option>
              <option value="olive">olive</option>
              <option value="red">red</option>
              <option value="dark">dark</option>
            </select>

            <label> Body type: </label>
              <select 
                type='text'
                name='bodyType'
                onChange={(e) => handleChange(e)}>
                <option value="skinny">skinny</option>
                <option value="toned">toned</option>
                <option value="muscled">muscled</option>
                <option value="fat">fat</option>
              </select>

          <label> Background: </label>
            <select 
              type='text'
              name='background'
              onChange={(e) => handleChange(e)}>
              <option value="acolyte">acolyte</option>
              <option value="charlatan">acolyte</option>
              <option value="criminalSpy">criminal/spy</option>
              <option value="entertainer">entertainer</option>
              <option value="folkHero">folk hero</option>
              <option value="gladiator">gladiator</option>
              <option value="guildArtisan">guild artisan</option>
              <option value="hermit">hermit</option>
              <option value="knight">knight</option>
              <option value="noble">noble</option>
              <option value="outlander">outlander</option>
              <option value="pirate">pirate</option>
              <option value="sage">sage</option>
              <option value="sailor">sailor</option>
              <option value="soldier">soldier</option>
              <option value="urchin">urchin</option>
            </select>

            <label> Choose your main weapon: </label>
          <input type="radio" name="mainWeapon" value="sword"  onChange={(e) => handleChange(e)} />
            <label> Sword </label>
          <input type="radio" name="mainWeapon" value="greatAxe"  onChange={(e) => handleChange(e)} />
            <label> Great Axe </label>
          <input type="radio" name="mainWeapon" value="mace"  onChange={(e) => handleChange(e)} />
            <label> Mace </label>
          <input type="radio" name="mainWeapon" value="quarterstaff"  onChange={(e) => handleChange(e)} />
            <label> Quarterstaff </label>
          <input type="radio" name="mainWeapon" value="dagger"  onChange={(e) => handleChange(e)} />
            <label> Dagger </label>
          <input type="radio" name="mainWeapon" value="spear"  onChange={(e) => handleChange(e)} />
            <label> Spear </label>

            <label> Choose your ranged weapon: </label>
          <input type="radio" name="rangedWeapon" value="crossbow"  onChange={(e) => handleChange(e)} />
            <label> Crossbow </label>
          <input type="radio" name="rangedWeapon" value="shortbow"  onChange={(e) => handleChange(e)} />
            <label> Shortbow </label>
          <input type="radio" name="rangedWeapon" value="longbow"  onChange={(e) => handleChange(e)} />
            <label> Longbow </label>
          <input type="radio" name="rangedWeapon" value="sling"  onChange={(e) => handleChange(e)} />
            <label> Sling </label>
          <input type="radio" name="rangedWeapon" value="dart"  onChange={(e) => handleChange(e)} />
            <label> Darts </label>

            <label> What armor will you don?: </label>
          <input type="radio" name="armor" value="leatherArmor"  onChange={(e) => handleChange(e)} />
            <label> Leather Armor </label>
          <input type="radio" name="armor" value="studdedLeatherArmor"  onChange={(e) => handleChange(e)} />
            <label> Studded Leather Armor </label>
          <input type="radio" name="armor" value="chainShirt"  onChange={(e) => handleChange(e)} />
            <label> Chain Mail Shirt </label>
          <input type="radio" name="armor" value="scaleMail"  onChange={(e) => handleChange(e)} />
            <label> Scale Mail Armor </label>
          <input type="radio" name="armor" value="ringMail"  onChange={(e) => handleChange(e)} />
            <label> Ring Mail Armor </label>
          <input type="radio" name="armor" value="plate"  onChange={(e) => handleChange(e)} />
            <label> Plate Armor </label>

          <label> What languages do you speak?: </label>
            <input type="checkbox" name="commonLanguage" onChange={handleCheck} />
              <label> Common </label>
            <input type="checkbox" name="dwarvishLanguage" onChange={handleCheck} />
              <label> Dwarvish </label>
            <input type="checkbox" name="elvishLanguage" onChange={handleCheck} />
              <label> Elvish </label>
            <input type="checkbox" name="giantLanguage" onChange={handleCheck} />
              <label> Giant </label>
            <input type="checkbox" name="gnomishLanguage" onChange={handleCheck} />
              <label> Gnomish </label>
            <input type="checkbox" name="goblinLanguage" onChange={handleCheck} />
              <label> Goblin </label>
            <input type="checkbox" name="halflingLanguage" onChange={handleCheck} />
              <label> Hafling </label>
            <input type="checkbox" name="orcLanguage" onChange={handleCheck} />
              <label> Orc </label>
            <input type="checkbox" name="abyssalLanguage" onChange={handleCheck} />
              <label> Abyssal </label>
            <input type="checkbox" name="celestialLanguage" onChange={handleCheck} />
              <label> Celestial </label>
            <input type="checkbox" name="draconicLanguage" onChange={handleCheck} />
              <label> Draconic </label>
            <input type="checkbox" name="deepSpeechLanguage" onChange={handleCheck} />
              <label> Deep Speech </label>
            <input type="checkbox" name="infernalLanguage" onChange={handleCheck} />
              <label> Infernal </label>
            <input type="checkbox" name="primordialLanguage" onChange={handleCheck} />
              <label> Primordial </label>
            <input type="checkbox" name="sylvanLanguage" onChange={handleCheck} />
              <label> Sylvan </label>
            <input type="checkbox" name="undercommonLanguage" onChange={handleCheck} />
              <label> Undercommon </label>

          <label> Choose your tools: </label>
            <input type="checkbox" name="artisanTools" onChange={handleCheck} />
              <label> Artisan's Tools </label>
            <input type="checkbox" name="alchemistSupplies" onChange={handleCheck} />
              <label> Alchemist's Supplies </label>
            <input type="checkbox" name="brewerSupplies" onChange={handleCheck}/>
              <label> Brewer Supplies </label>
            <input type="checkbox" name="calligrapherSupplies" onChange={handleCheck} />
              <label> Calligrapher's Supplies </label>
            <input type="checkbox" name="carpenterTools" onChange={handleCheck} />
              <label> Carpenter's Tools </label>
            <input type="checkbox" name="cartographerTools" onChange={handleCheck} />
              <label> Cartographer's Tools </label>
            <input type="checkbox" name="cobblerTools" onChange={handleCheck} />
              <label> Cobbler's Tools </label>
            <input type="checkbox" name="cookTools" onChange={handleCheck} />
              <label> Cook's Tools </label>
            <input type="checkbox" name="glassblowerTools" onChange={handleCheck} />
              <label> Glassblower's Tools </label>
            <input type="checkbox" name="thievesTools" onChange={handleCheck} />
              <label> Thieves' Tools </label>
            <input type="checkbox" name="jewellerTools" onChange={handleCheck} />
              <label> Jeweller's Tools </label>
            <input type="checkbox" name="leatherworkerTools" onChange={handleCheck} />
              <label> Leatherworker's Tools </label>
            <input type="checkbox" name="masonTools" onChange={handleCheck} />
              <label> Mason's Tools </label>
            <input type="checkbox" name="painterSupplies" onChange={handleCheck} />
              <label> Painter's Supplies </label>
            <input type="checkbox" name="potterTools" onChange={handleCheck} />
              <label> Potter's Tools </label>
            <input type="checkbox" name="smithTools" onChange={handleCheck} />
              <label> Smith's Tools </label>
            <input type="checkbox" name="tinkerTools" onChange={handleCheck} />
              <label> Tinker's Tools </label>
            <input type="checkbox" name="weaverTools" onChange={handleCheck} />
              <label> Weaver's Tools </label>
            <input type="checkbox" name="woodcarverTools" onChange={handleCheck} />
              <label> Woodcarver's Tools </label>
            <input type="checkbox" name="disguiseKit" onChange={handleCheck} />
              <label> Disguise Kit </label>
            <input type="checkbox" name="forgeryKit" onChange={handleCheck} />
              <label> Forgery Kit </label>
            <input type="checkbox" name="diceSet" onChange={handleCheck} />
              <label> Dice Set </label>
            <input type="checkbox" name="cardSet" onChange={handleCheck} />
              <label> Playing Cards Set </label>
            <input type="checkbox" name="herbalismKit" onChange={handleCheck} />
              <label> Herbalism Kit </label>
            <input type="checkbox" name="forgeryKit" onChange={handleCheck} />
            <label> Forgery Kit </label> 
              <input type="checkbox" name="musicalInstrument" onChange={handleCheck} />
            <label> Musical Instrument </label>
              <input type="checkbox" name="navigatorTools" onChange={handleCheck} />
            <label> Navigator Tools </label>
              <input type="checkbox" name="poisonerKit" onChange={handleCheck} />
            <label> Poisoner Kit </label>

          <label> Choose skill to add proficiency: </label>
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
              <button type= "submit"> Create character! </button>
    </form>
  </div>
  )
}

export default CharacterGenerator