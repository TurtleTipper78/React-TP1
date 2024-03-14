import { NavLink } from "react-router-dom"
import './Entete.css';
import { useContext } from "react";
import { AppContext } from "../App/App";
import { useEffect } from 'react';

function Entete(props) {
  

  const context = useContext(AppContext)

  useEffect(() => {
    const estLogin = sessionStorage.getItem("estLogin");
    if (estLogin) {
      props.setLogging({ estLog: true, usager: estLogin });
    }
  }, []);

  return (
    <header>
      <nav>
        <div className="letterbuster">
          <a className="logo"></a>
          <NavLink to="accueil"><h1>Letterbuster</h1></NavLink>
        </div>
        <NavLink to="liste-films">Liste de films</NavLink>
        { context.estLog ? <NavLink to="/admin">Admin</NavLink> : ""}
        { context.estLog ? <button onClick={props.handleLogout}>Logout</button> :  
        <form onSubmit={(e) => props.handleLogin(e)}>
          <input type="text" name ="usager" placeholder="Username"></input>
          <button>Login</button>
        </form> }
      </nav>
    </header>
  );
}

export default Entete;
