import { useState } from "react"
import { diceRoll } from "../utils/randomizer"
import { BACKEND_URL } from "../utils/BACKEND_API";
import { GeneratorContext } from "../context/generator.context";


function CharacterGenerator() {

// name
  const [name, setName] = useState("");
  const handleName = (e) => setName(e.target.value)
  
  // campaign
  const [campaign, setCampaign] = useState("");
  const handleCampaign = (e) => setCampaign(e.target.value)

  // sex
  const [sex, setSex] = useState('Male')
  const handleSex = (e) => setSex(e.target.value)
  // race
  const [race, setRace] = useState("");
  const handleRace = (e) => setRace(e.target.value)
  
  // class
  const [job, setJob] = useState("");
  const handleJob = (e) => setJob(e.target.value)
  
  // abilty scores
  const [strScore, setStrScore] = useState(10);
  const handleStrScore = (e) => setStrScore(e.target.value)

  const [conScore, setConScore] = useState(10);
  const handleConScore = (e) => setConScore(e.target.value)

  const [dexScore, setDexScore] = useState(10);
  const handleDexScore = (e) => setDexScore(e.target.value)

  const [intScore, setIntScore] = useState(10);
  const handleIntScore = (e) => setIntScore(e.target.value)

  const [wisScore, setWisScore] = useState(10);
  const handleWisScore = (e) => setWisScore(e.target.value)

  const [chaScore, setChaScore] = useState(10);
  const handleChaScore = (e) => setChaScore(e.target.value)

  //ability score dice rolls
  const strRoll1 = diceRoll(6)
  const strRoll2 = diceRoll(6)
  const strRoll3 = diceRoll(6)
  const conRoll1 = diceRoll(6)
  const conRoll2 = diceRoll(6)
  const conRoll3 = diceRoll(6)
  const dexRoll1 = diceRoll(6)
  const dexRoll2 = diceRoll(6)
  const dexRoll3 = diceRoll(6)
  const intRoll1 = diceRoll(6)
  const intRoll2 = diceRoll(6)
  const intRoll3 = diceRoll(6)
  const wisRoll1 = diceRoll(6)
  const wisRoll2 = diceRoll(6)
  const wisRoll3 = diceRoll(6)
  const chaRoll1 = diceRoll(6)
  const chaRoll2 = diceRoll(6)
  const chaRoll3 = diceRoll(6)

  // physical description
  const [hairColor, setHairColor] = useState("");
  const handleHairColor = (e) => setHairColor(e.target.value)

  const [hairStlye, setHairStlye] = useState("");
  const handleHairStyle = (e) => setHairStlye(e.target.value)

  const [eyeColor, setEyeColor] = useState("");
  const handleEyeColor = (e) => setEyeColor(e.target.value)

  const [skinColor, setSkinColor] = useState("");
  const handleSkinColor = (e) => setSkinColor(e.target.value)

  const [bodyType, setBodyType] = useState("");
  const handleBodyType = (e) => setBodyType(e.target.value)

  const [prompt, setPrompt] = useState('')
  const handlePrompt = setPrompt(`Photorealistic portrait of a ${setSkinColor}-skinned $(setSex) ${setJob} dungeons and dragons character that has ${setEyeColor} eyes, ${setHairColor} colored hair styled as ${setHairStlye}, wearing ${armor} and wielding ${setWeapon}.`)

  // personality and background traits
  const [background, setBackground] = useState("")
  const handleBackground = (e) => setBackground(e.target.value)

  const [personality1, setPersonality1] = useState("")
  const handlePersonality1 = (e) => setPersonality1(e.target.value)

  const [personality2, setPersonality2] = useState("")
  const handlePersonality2 = (e) => setPersonality2(e.target.value)

  const [personality3, setPersonality3] = useState("")
  const handlePersonality3 = (e) => setPersonality3(e.target.value)

  const [bond, setBond] = useState("")
  const handleBond = (e) => setBond(e.target.value)

  const [ideal, setIdeal] = useState("")
  const handleIdeal = (e) => setIdeal(e.target.value)  

  const [flaw, setFlaw] = useState("")
  const handleFlaw = (e) => setFlaw(e.target.value)

  const [god, setGod] = useState("")
  const handleGod = (e) => setGod(e.target.value)

  const [story, setStory] = useState("")
  const handleStory = (e) => setStory(e.target.value)

  const [enemies, setEnemies] = useState("")
  const handleEnemies = (e) => setEnemies(e.target.value)
  
  const [allies, setAllies] = useState("")
  const handleAllies = (e) => setAllies(e.target.value)

  // languages and tools
  const [common, setCommon] = useState(false)
  const handleCommon = (e) => setCommon(true)

  const [dwarvish, setDwarvish] = useState(false)
  const handleDwarvish = (e) => setDwarvish(true)

  const [elvish, setElvish] = useState(false)
  const handleElvish = (e) => setElvish(true)

  const [giant, setGiant] = useState(false)
  const handleGiant = (e) => setGiant(true)
  
  const [gnomish, setGnomish] = useState(false)
  const handleGnomish = (e) => setGnomish(true)

  const [goblin, setGoblin] = useState(false)
  const handleGoblin = (e) => setGoblin(true)

  const [halfling, setHalfling] = useState(false)
  const handleHalfling = (e) => setHalfling(true)
  
  const [orc, setOrc] = useState(false)
  const handleOrc = (e) => setOrc(true)

  const [abyssal, setAbyssal] = useState(false)
  const handleAbyssal = (e) => setAbyssal(true)

  const [celestial, setCelestial] = useState(false)
  const handleCelestial = (e) => setCelestial(true)

  const [draconinc, setDraconic] = useState(false)
  const handleDraconic = (e) => setDraconic(true)

  const [deepSpeech, setDeepSpeech] = useState(false)
  const handleDeepSpeech = (e) => setDeepSpeech(true)

  const [infernal, setInfernal] = useState(false)
  const handleInfernal = (e) => setInfernal(true)

  const [primordial, setPrimordial] = useState(false)
  const handlePrimordial = (e) => setPrimordial(true)

  const [sylvan, setSylvan] = useState(false)
  const handleSylvan = (e) => setSylvan(true)

  const [undercommon, setUndercommon] = useState(false)
  const handleUndercommon = (e) => setUndercommon(true)

  const [artisanTools, setArtisanTools] = useState(false)

  const [alchemistSupplies, setAlchemistSupplies] = useState(false)

  const [brewerSupplie, setBrewerSupplie] = useState(false)

  const [calligrapherSupplies, setCalligrapherSupplies] = useState(false)

  const [carpenterTools, setCarpenterTools] = useState(false)

  const [cartographerTools, setCartographerTools] = useState(false)

  const [cobblerTools, setCobblerTools] = useState(false)

  const [cookTools, setCookTools] = useState(false)

  const [glassblowerTools, setGlassblowerTools] = useState(false)

  const [jewellerTools, setJewellerTools] = useState(false)

  const [leatherworkerTools, setLeatherworkerTools] = useState(false)

  const [masonTools, setMasonTools] = useState(false)

  const [painterSupplies, setPainterSupplies] = useState(false)

  const [potterTools, setPotterTools] = useState(false)

  const [smithTools, setSmithTools] = useState(false)

  const [tinkerTools, setTinkerTools] = useState(false)

  const [weaverTools, setWeaverTools] = useState(false)

  const [woodcarverTools, setWoodcarverTools] = useState(false)

  const [disguiseKit, setDisguiseKit] = useState(false)

  const [forgeryKit, setForgeryKit] = useState(false)

  const [gamingSets, setGamingSets] = useState(false)

  const [herbalismKit, setHerbalismKit] = useState(false)

  const [musicalInstruments, setMusicalInstruments] = useState(false)

  const [navigatorTools, setNavigatorTools] = useState(false)

  const [poisonerKit, setPoisonerKit] = useState(false)

  const [thievesTools,setThievesTools] = useState(false)

  const [vehicles, setVehicles] = useState(false)

  // skills
  
  const [athletics, setAthletics] = useState(false)
  
  const [acrobatics, setAcrobatics] = useState(false)
  
  const [sleightOfHand, setSleightOfHand] = useState(false)
  
  const [stealth, setStealth] = useState(false)
  
  const [arcana, setArcana] = useState(false)
  
  const [history, setHistory] = useState(false)

  const [investigation, setInvestigation] = useState(false)

  const [nature, setNature] = useState(false)

  const [religion, setReligion] = useState(false)

  const [animalHandling, setAnimalHandling] = useState(false)

  const [insight, setInsight] = useState(false)

  const [medicine, setMedicine] = useState(false)

  const [perception, setPerception] = useState(false)

  const [survival, setSurvival] = useState(false)

  const [persuasion, setPersuasion] = useState(false)

  const [deception, setDeception] = useState(false)

  const [intimidation, setIntimidation] = useState(false)

  const [performance, setPerformance] = useState(false)

  // spells and cantrips
  const [cantrip1, setCantrip1] = useState("");

  const [cantrip2, setCantrip2] = useState("");

  const [cantrip3, setCantrip3] = useState("");

  const [cantrip4, setCantrip4] = useState("");


  const [spell1, setSpell1] = useState("");
  const handleSpell1 = setSpell1(e.target.value)

  const [spell2, setSpell2] = useState("");
  const handleSpell2 = setSpell2(e.target.value)
  
  const [spell3, setSpell3] = useState("");
  const handleSpell3 = setSpell3(e.target.value)
  
  const [spell4, setSpell4] = useState("");
  const handleSpell4 = setSpell4(e.target.value)
  
  const [spell5, setSpell5] = useState("");
  const handleSpell5 = setSpell5(e.target.value)
  
  const [spell6, setSpell6] = useState("");
  const handleSpell6 = setSpell6(e.target.value)
  
  const [spell7, setSpell7] = useState("");
  const handleSpell7 = setSpell7(e.target.value)

  // gear and inventory
  const [weapon, setWeapon] = useState("");
  const handleWeapon = (e) => setWeapon(e.target.value)

  const [rangedWeapon, setRangedWeapon] = useState("");
  const handleRangedWeapon = (e) => setRangedWeapon(e.target.value)
  
  const [armor, setArmor] = useState("");
  const handleArmor = (e) => setArmor(e.target.value)

  const [hasShield, setHasShield] = useState(false);
  const handleHasShield = (e) => setHasShield(e.target.value)

  const [starterpack, setStarterpack] = useState("");
  const handleStarterpack = (e) => setCurrency(e.target.value)
  
  const [currency, setCurrency] = useState(0);
  const hanleCurrency = (e) => setCurrency(e.target.value)

  const handleSubmit = (e) => e.preventDefault(); 

  return (
  <div>
    <h2> Character Generator </h2>
      <form>

        <label>Character name: </label>
          <input 
            type= 'text'
            name= 'name'
            value={name}
            onChange={handleChange}/>

        <label>Campaign name: </label>
          <input 
            type= 'text'
            name= 'campaign'
            value={campaign}
            onChange={handleChange}/>

        <label>Character name: </label>
          <select 
            type= 'text'
            name= 'sex'
            value={sex}  
            onChange={handleSex}/>
              <option value="cisgenderMale">Male</option>
              <option value="cisgenderFemale">Female</option>
              <option value="transgenderMale">Transgender Male</option>
              <option value="transgenderFemale">Transgender female</option>
              <option value="nonBinary">Non-binary</option>

        <label> Choose your Race: </label>
          <select 
            type= 'text'
            name= 'race'
            value={race}
            onChange={handleChange}>
            <option value="human">human</option>
            <option value="dwarf">dwarf</option>
            <option value="elf">elf</option>
          </select>

        <label> Class: </label>
          <select 
            type= 'text'
            name= 'class'
            value={job}
            onChange={handleChange}>
            <option value="barbarian">barbarian</option>
            <option value="rogue">rogue</option>
            <option value="cleric">cleric</option>
            <option value="wizard">wizard</option>
          </select>

// help here, not sure if this is correctly setting it to the Strength score state.
          <label> Choose your strengh score: </label>
          <input type="radio" name="strAbility" value={strRoll1} />
            <label for='D6 Roll 1'> Result: {strRoll1}</label><br/>
          <input type="radio" name="strAbility" value={strRoll2} />
            <label for="D6 Roll 2"> Result: {strRoll2}</label><br/>
          <input type="radio" name="strAbility" value={strRoll3} />
            <label for="D6 Roll 3"> Result: {strRoll3}</label> <br/>

        <label> Hair color: </label>
          <select 
            type= 'text'
            name= 'hairColor'
            value={hairColor}
            onChange={handleChange}>
            <option value="black">black</option>
            <option value="brown">brown</option>
            <option value="blond">blond</option>
            <option value="red">red</option>
          </select>

          <label> Hair style: </label>
            <select 
              type= 'text'
              name= 'hairStyle'
              value={hairStlye}
              onChange={handleChange}>
              <option value="straight-hair">straigth</option>
              <option value="curly">curly</option>
              <option value="braided">braided</option>
              <option value="bald">bald</option>
          </select>

          <label> Eye color: </label>
            <select 
              type= 'text'
              name= 'eyeColor'
              value={eyeColor}
              onChange={handleChange}>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="hazel">hazel</option>
              <option value="brown">brown</option>
            </select>

          <label> Skin color: </label>
            <select 
              type= 'text'
              name= 'skinColor'
              value={skinColor}
              onChange={handleChange}>
              <option value="fair">fair</option>
              <option value="olive">olive</option>
              <option value="red">red</option>
              <option value="dark">dark</option>
            </select>

            <label> Body type: </label>
              <select 
                type= 'text'
                name= 'bodyType'
                value={bodyType}
                onChange={handleChange}>
                <option value="skinny">skinny</option>
                <option value="toned">toned</option>
                <option value="muscled">muscled</option>
                <option value="fat">fat</option>
              </select>

          <label> Background: </label>
            <select 
              type= 'text'
              name= 'background'
              value={background}
              onChange={handleChange}>
              <option value="acolyte">acolyte</option>
              <option value="criminal">criminal</option>
              <option value="lyceum-student">lyceum student</option>
              <option value="outlander">outlander</option>
            </select>

          <label> Choose your languages: </label>
            <input type="checkbox" name="language1" value={common} />
              <label for="common"> Common </label>
            <input type="checkbox" name="language2" value={dwarvish} />
              <label for="dwarvish"> Dwarvish </label>
            <input type="checkbox" name="language3" value={elvish} />
              <label for="elvish"> Elvish </label>
            <input type="checkbox" name="language4" value={giant} />
              <label for="giant"> Giant </label>
            <input type="checkbox" name="language5" value={gnomish} />
              <label for="gnomish"> Gnomish </label>
            <input type="checkbox" name="language6" value={goblin} />
              <label for="goblin"> Goblin </label>
            <input type="checkbox" name="language7" value={hafling} />
              <label for="hafling"> Hafling </label>
            <input type="checkbox" name="language8" value={orc} />
              <label for="orc"> Orc </label>
            <input type="checkbox" name="language9" value={abyssal} />
              <label for="abyssal"> Abyssal </label>
            <input type="checkbox" name="language10" value={celestial} />
              <label for="celestial"> Celestial </label>
            <input type="checkbox" name="language11" value={draconic} />
              <label for="draconic"> Draconic </label>
            <input type="checkbox" name="language12" value={deepSpeech} />
              <label for="deepSpeech"> Deep Speech </label>
            <input type="checkbox" name="language13" value={infernal} />
              <label for="infernal"> Infernal </label>
            <input type="checkbox" name="language14" value={primordial} />
              <label for="primordial"> Primordial </label>
            <input type="checkbox" name="language15" value={sylvan} />
              <label for="sylvan"> Sylvan </label>
            <input type="checkbox" name="language16" value={undercommon} />
              <label for="undercommon"> Undercommon </label>

          <label> Choose your tools: </label>
            <input type="checkbox" name="tool1" value="artisanTools" />
              <label for="artisanTools"> Artisan's Tools </label>
            <input type="checkbox" name="tool2" value="alchemistSupplies" />
              <label for="alchemistSupplies"> Alchemist's Supplies </label>
            <input type="checkbox" name="tool3" value="brewerSupplies" />
              <label for="brewerSupplies"> Brewer Supplies </label>
            <input type="checkbox" name="tool4" value="calligrapherSupplies" />
              <label for="calligrapherSupplies"> Calligrapher's Supplies </label>
            <input type="checkbox" name="tool5" value="carpenterTools" />
              <label for="carpenterTools"> Carpenter's Tools </label>
            <input type="checkbox" name="tool6" value="cartographerTools" />
              <label for="cartographerTools"> Cartographer's Tools </label>
            <input type="checkbox" name="tool7" value="cobblerTools" />
              <label for="cobblerTools"> Cobbler's Tools </label>
            <input type="checkbox" name="tool8" value="cookTools" />
              <label for="cookTools"> Cook's Tools </label>
            <input type="checkbox" name="tool9" value="glassblowerTools" />
              <label for="glassblowerTools"> Glassblower's Tools </label>
            <input type="checkbox" name="tool10" value="thievesTools" />
              <label for="thievesTools"> Thieves' Tools </label>
            <input type="checkbox" name="tool11" value="jewellerTools" />
              <label for="jewellerTools"> Jeweller's Tools </label>
            <input type="checkbox" name="tool12" value="leatherworkerTools" />
              <label for="leatherworkerTools"> Leatherworker's Tools </label>
            <input type="checkbox" name="tool13" value="masonTools" />
              <label for="masonTools"> Mason's Tools </label>
            <input type="checkbox" name="tool14" value="painterSupplies" />
              <label for="painterSupplies"> Painter's Supplies </label>
            <input type="checkbox" name="tool15" value="potterTools" />
              <label for="potterTools"> Potter's Tools </label>
            <input type="checkbox" name="tool16" value="smithTools" />
              <label for="smithTools"> Smith's Tools </label>
            <input type="checkbox" name="tool17" value="tinkerTools" />
              <label for="tinkerTools"> Tinker's Tools </label>
            <input type="checkbox" name="tool18" value="weaverTools" />
              <label for="weaverTools"> Weaver's Tools </label>
            <input type="checkbox" name="tool19" value="woodcarverTools" />
              <label for="woodcarverTools"> Woodcarver's Tools </label>
            <input type="checkbox" name="tool20" value="disguiseKit" />
              <label for="disguiseKit"> Disguise Kit </label>
            <input type="checkbox" name="tool21" value="forgeryKit" />
              <label for="forgeryKit"> Forgery Kit </label>
            <input type="checkbox" name="tool22" value="diceSet" />
              <label for="diceSet"> Dice Set </label>
            <input type="checkbox" name="tool23" value="cardSet" />
              <label for="cardSet"> Playing Cards Set </label>
            <input type="checkbox" name="tool24" value="herbalismKit" />
              <label for="herbalismKit"> Herbalism Kit </label>
            <input type="checkbox" name="tool24" value="forgeryKit" />
            <label for="forgeryKit"> Forgery Kit </label> 
              <input type="checkbox" name="tool25" value="musicalInstrument" />
            <label for="musicalInstrument"> Musical Instrument </label>
              <input type="checkbox" name="tool26" value="navigatorTools" />
            <label for="navigatorTools"> Navigator Tools </label>
              <input type="checkbox" name="tool27" value="poisonerKit" />
            <label for="poisonerKit"> Poisoner Kit </label>

          <label> Choose skill to add proficiency: </label>
            <input type="checkbox" name="skill1" value="athletics" />
              <label for="athletics"> Athletics - Strength based </label>
              <input type="checkbox" name="skill2" value="acrobatics" />
              <label for="acrobatics"> Acrobatics - Dexterity based </label>
              <input type="checkbox" name="skill3" value="sleigthOfHand" />
              <label for="sleigthOfHand"> Sleigth Of Hand - Dexterity based </label>
              <input type="checkbox" name="skill4" value="stealth" />
              <label for="stealth"> Stealth - Dexterity based </label>
              <input type="checkbox" name="skill5" value="arcana" />
              <label for="arcana"> Arcana - Inteligence based </label>
              <input type="checkbox" name="skill6" value="history" />
              <label for="history"> History - Inteligence based </label>
              <input type="checkbox" name="skill7" value="investigation" />
              <label for="investigation"> Investigation - Inteligence based </label>
              <input type="checkbox" name="skill8" value="nature" />
              <label for="nature"> Nature - Inteligence based </label>
              <input type="checkbox" name="skill9" value="religion" />
              <label for="religion"> Religion - Inteligence based </label>
              <input type="checkbox" name="skill10" value="animalHandling" />
              <label for="animalHandling"> Animal Handling - Wisdom based </label>
              <input type="checkbox" name="skill11" value="insight" />
              <label for="insight"> Insight - Wisdom based </label>
              <input type="checkbox" name="skill12" value="medicine" />
              <label for="medicine"> Medicine - Wisdom based </label>
              <input type="checkbox" name="skill13" value="perception" />
              <label for="perception"> Perception - Wisdom based </label>
              <input type="checkbox" name="skill14" value="survival" />
              <label for="survival"> Survival - Wisdom based </label>
              <input type="checkbox" name="skill15" value="persuasion" />
              <label for="persuasion"> Persuasion - Charisma based </label>
              <input type="checkbox" name="skill16" value="deception" />
              <label for="deception"> Deception - Charisma based </label>
              <input type="checkbox" name="skill17" value="intimidation" />
              <label for="intimidation"> Intimidation - Charisma based </label>
              <input type="checkbox" name="skill18" value="performance" />
              <label for="performance"> Performance - Charisma based </label>
    </form>
  </div>
  )
}

export default CharacterGenerator