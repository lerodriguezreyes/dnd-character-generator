import { Link } from "react-router-dom";
function Navbar() {
  return (
    <section id="navBar">
      <img
        id="navLogo"
        src="https://github.com/lerodriguezreyes/dnd-character-generator/blob/main/src/assets/logo.png?raw=true"
      />
      <p id="pageTitle">Nexus Lorekeeper</p>
      <p id="pageSubTitle">Adventure Chronicler</p>
      <hr />
      <div id="navLinks">
        <Link to="/" className="spread">
          Home
        </Link>
        <Link to="/character" className="spread">
          {" "}
          Existing Characters
        </Link>
        <Link to="/generator" className="spread">
          New Character
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
