import './ListeFilms.css';
import { NavLink } from "react-router-dom"
import { Link } from 'react-router-dom'
import TuileFilm from "../TuileFilm/TuileFilm"
import Film from "../Film/Film"
import { useEffect, useState } from 'react';

function ListeFilms() {

  const urlListeFilms = 'https://four1f-node-api.onrender.com/films'
  const [listeFilms, setListeFilms] = useState([]);

  useEffect(() => {

    fetch(urlListeFilms)
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data)
        setListeFilms(data);
      })

  }, []);

  const tuileFilm = listeFilms.map((film, index) => {
    return (
      <NavLink key={index} to={`/film/${film.id}`}>
        <TuileFilm data={film} />
      </NavLink>
    );
  })
  
  return (
    <main>
      <h2>ListeFilms</h2>
      <nav>
          {tuileFilm}
      </nav>
    </main>
  );
  
}

export default ListeFilms;


