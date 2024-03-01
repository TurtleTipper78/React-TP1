import { NavLink } from "react-router-dom"
import './Entete.css';
import { useContext } from "react";
import { AppContext } from "../App/App";

function Entete(props) {
  console.log(props)

  const context = useContext(AppContext)

  return (
    <header>
      <nav>
        <a href="/letterbuster/public/letterboxd-decal-dots-neg-rgb.svg"></a>
        <NavLink to="accueil"><h1>Letterbuster</h1></NavLink>
        <NavLink to="liste-films">Liste de films</NavLink>
        { context.estLog ? <NavLink to="/admin">Admin</NavLink> : ""}
        <form onSubmit={(e) => props.handleLogin(e)}>
          <input type="text" name ="usager" placeholder="Username"></input>
          <button>Login</button>
        </form>
      </nav>
    </header>
  );
}

export default Entete;
