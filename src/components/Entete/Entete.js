import { NavLink } from "react-router-dom"
import './Entete.css';

function Entete() {
  return (
    <div>
      <header>
        <NavLink to="accueil"><h1>Lettebuster</h1></NavLink>
        <nav>
          <NavLink to="liste-films">Liste de films</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Entete;
