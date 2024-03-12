import { useState } from "react"
import { diceRoll } from "../utils/randomizer"


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

  const [draconic, setDraconic] = useState(false)
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
  const handleArtisanTools = (e) => setArtisanTools(true)

  const [alchemistSupplies, setAlchemistSupplies] = useState(false)
  const handleAlchemistSupplies = (e) => setAlchemistSupplies(true)
 
  const [brewerSupplies, setBrewerSupplies] = useState(false)
  const handleBrewerSupplies = (e) => setBrewerSupplies(true)

  const [calligrapherSupplies, setCalligrapherSupplies] = useState(false)
  const handleCalligrapherSupplies = (e) => setCalligrapherSupplies(true)
  
  const [carpenterTools, setCarpenterTools] = useState(false)
  const handleCarpenterTools = (e) => setCarpenterTools(true)

  const [cartographerTools, setCartographerTools] = useState(false)
  const handleCartographerTools = (e) => setCartographerTools(true)

  const [cobblerTools, setCobblerTools] = useState(false)
  const handleCobblerTools = (e) => setCobblerTools(true)

  const [cookTools, setCookTools] = useState(false)
  const handleCookTools = (e) => setCookTools(true)
  const [glassblowerTools, setGlassblowerTools] = useState(false)
  const handleGlassblowerTools = (e) => setGlassblowerTools(true)

  const [jewellerTools, setJewellerTools] = useState(false)
  const handleJewellerTools = (e) => setJewellerTools(true)

  const [leatherworkerTools, setLeatherworkerTools] = useState(false)
  const handleLeatherWorkerTools = (e) => setLeatherworkerTools(true)

  const [masonTools, setMasonTools] = useState(false)
  const handleMasonTools = (e) => setMasonTools(true)

  const [painterSupplies, setPainterSupplies] = useState(false)
  const handlePainterSupplies = (e) => setPainterSupplies(true)

  const [potterTools, setPotterTools] = useState(false)
  const handlePotterTools = (e) => setPotterTools(true)

  const [smithTools, setSmithTools] = useState(false)
  const handleSmithTools = (e) => setSmithTools(true)

  const [tinkerTools, setTinkerTools] = useState(false)
  const handleTinkerTools = (e) => setTinkerTools(true)

  const [weaverTools, setWeaverTools] = useState(false)
  const handleWeaverTools = (e) => setWeaverTools(true)

  const [woodcarverTools, setWoodcarverTools] = useState(false)
  const handleWoodcarverTools = (e) => setWoodcarverTools(true)

  const [disguiseKit, setDisguiseKit] = useState(false)
  const handleDisguiseKit = (e) => setDisguiseKit(true)

  const [forgeryKit, setForgeryKit] = useState(false)
  const handleForgeryKit = (e) => setForgeryKit(true)

  const [diceSet, setDiceSet] = useState(false)
  const handleDiceSet = (e) => setDiceSet(true)

  const [herbalismKit, setHerbalismKit] = useState(false)
  const handleHerbalismKit = (e) => setHerbalismKit(true)

  const [musicalInstruments, setMusicalInstruments] = useState(false)
  const handleMusicalInstruments = (e) => setMusicalInstruments(true)

  const [navigatorTools, setNavigatorTools] = useState(false)
  const handleNavigatorTools = (e) => setNavigatorTools(true)

  const [poisonerKit, setPoisonerKit] = useState(false)
  const handlePoisonerKit = (e) => setPoisonerKit(true)

  const [thievesTools,setThievesTools] = useState(false)
  const handleThievesTools = (e) => setThievesTools(true)

  const [vehicles, setVehicles] = useState(false)
  const handleVehicles = (e) => setVehicles(true)
  // skills
  
  const [athletics, setAthletics] = useState(false)
  const handleAthletics = (e) => setAthletics(true)
  
  const [acrobatics, setAcrobatics] = useState(false)
  const handleAcrobatics = (e) => setAcrobatics(true)

  const [sleightOfHand, setSleightOfHand] = useState(false)
  const handleSleightOfHand = (e) => setSleightOfHand(true)

  const [stealth, setStealth] = useState(false)
  const handleStealth = (e) => setStealth(true)

  const [arcana, setArcana] = useState(false)
  const handleArcana= (e) => setArcana(true)
  
  const [history, setHistory] = useState(false)
  const handleHistory = (e) => setHistory(true)

  const [investigation, setInvestigation] = useState(false)
  const handleInvestigation = (e) => setInvestigation(true)

  const [nature, setNature] = useState(false)
  const handleNature = (e) => setNature(true)

  const [religion, setReligion] = useState(false)
  const handleReligion = (e) => setReligion(true)

  const [animalHandling, setAnimalHandling] = useState(false)
  const handleAnimalHandling = (e) => setAnimalHandling(true)

  const [insight, setInsight] = useState(false)
  const handleInsight = (e) => setInsight(true)

  const [medicine, setMedicine] = useState(false)
  const handleMedicine = (e) => setMedicine(true)

  const [perception, setPerception] = useState(false)
  const handlePerception = (e) => setPerception(false)

  const [survival, setSurvival] = useState(false)
  const handleSurvival = (e) => setSurvival(false)

  const [persuasion, setPersuasion] = useState(false)
  const handlePersuasion = (e) => setPersuasion(true)

  const [deception, setDeception] = useState(false)
  const handleDeception = (e) => setDeception(true)

  const [intimidation, setIntimidation] = useState(false)
  const handleIntimidation = (e) => setIntimidation(true)

  const [performance, setPerformance] = useState(false)
  const handlePerformance = (e) => setPerformance(true)

  // spells and cantrips
  const [cantrip1, setCantrip1] = useState("");
  const handleCantrip1 = (e) => setCantrip1(e.target.value)
  
  const [cantrip2, setCantrip2] = useState("");
  const handleCantrip2 = (e) => setCantrip2(e.target.value)

  const [cantrip3, setCantrip3] = useState("");
  const handleCantrip3 = (e) => setCantrip3(e.target.value)

  const [cantrip4, setCantrip4] = useState("");
  const handleCantrip4 = (e) => setCantrip4(e.target.value)

  const [spell1, setSpell1] = useState("");
  const handleSpell1 = (e) => setSpell1(e.target.value)

  const [spell2, setSpell2] = useState("");
  const handleSpell2 = (e) => setSpell2(e.target.value)
  
  const [spell3, setSpell3] = useState("");
  const handleSpell3 = (e) => setSpell3(e.target.value)
  
  const [spell4, setSpell4] = useState("");
  const handleSpell4 = (e) => setSpell4(e.target.value)
  
  const [spell5, setSpell5] = useState("");
  const handleSpell5 = (e) => setSpell5(e.target.value)
  
  const [spell6, setSpell6] = useState("");
  const handleSpell6 = (e) => setSpell6(e.target.value)
  
  const [spell7, setSpell7] = useState("");
  const handleSpell7 = (e) => setSpell7(e.target.value)

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

  const [prompt, setPrompt] = useState('')
  const handlePrompt = setPrompt(`Photorealistic portrait of a ${setSkinColor}-skinned $(setSex) ${setJob} dungeons and dragons character that has ${setEyeColor} eyes, ${setHairColor} colored hair styled as ${setHairStlye}, wearing ${armor} and wielding ${setWeapon}.`)

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
            onChange={handleName}/>

        <label>Campaign name: </label>
          <input 
            type= 'text'
            name= 'campaign'
            value={campaign}
            onChange={handleCampaign}/>

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
            onChange={handleRace}>
            <option value="human">human</option>
            <option value="dwarf">dwarf</option>
            <option value="elf">elf</option>
          </select>

        <label> Class: </label>
          <select 
            type= 'text'
            name= 'class'
            value={job}
            onChange={handleJob}>
            <option value="barbarian">barbarian</option>
            <option value="rogue">rogue</option>
            <option value="cleric">cleric</option>
            <option value="wizard">wizard</option>
          </select>

// help here, not sure if this is correctly setting it to the Strength score state.
          <label> Choose your strengh score: </label>
          <input type="radio" name="strAbility" value= {diceRoll(6)} />
            <label for='D6 Roll 1'> Result:  </label><br/>
          <input type="radio" name="strAbility" value= {diceRoll(6)} />
            <label for="D6 Roll 2"> Result:</label><br/>
          <input type="radio" name="strAbility" value= {diceRoll(6)} />
            <label for="D6 Roll 3"> Result: </label> <br/>

        <label> Hair color: </label>
          <select 
            type= 'text'
            name= 'hairColor'
            value={hairColor}
            onChange={handleHairColor}>
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
              onChange={handleHairStyle}>
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
              onChange={handleEyeColor}>
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
              onChange={handleSkinColor}>
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
                onChange={handleBodyType}>
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
              onChange={handleBackground}>
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
            <input type="checkbox" name="language7" value={halfling} />
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