import { Link } from "react-router-dom";
import '../styles/Navbar.css'
function Navbar() {
  return (
    <section id="navBar">
      <p id="pageTitle">Nexus Lorekeeper</p>
      <p id="pageSubTitle">Adventure Chronicler</p>
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
