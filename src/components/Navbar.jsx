import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <section id="navBar">
      <img id="navLogo" src="https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/logo.png?raw=true" />
      <p id="pageTitle">Nexus Lorekeeper</p>
      <p id="pageSubTitle">Adventure Chronicler</p>
      <hr/>
      <div id='navLinks'> 
        <NavLink to='/' className="spread">Home</NavLink>
        <NavLink to='/character' className="spread"> Existing Characters</NavLink>
        <NavLink to='/character/generator' className="spread">New Character</NavLink>
      </div>
    </section>
  )
}

export default Navbar