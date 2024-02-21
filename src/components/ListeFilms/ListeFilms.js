import './ListeFilms.css';
import { NavLink } from "react-router-dom"
import TuileFilm from "../TuileFilm/TuileFilm"
import Film from "../Film/Film"
import { useEffect, useState } from 'react';

function ListeFilms() {

  const urlListeFilms = 'https://four1f-node-api.onrender.com/films'
  const [listeFilms, setListeFilms] = useState([]);

  // const listeFilms = [
  //   {titre: 'film 1', realisateur: "billy", annee: "2020"},
  //   {titre: 'film 2', realisateur: "joe", annee: "2022"},
  //   {titre: 'film 3', realisateur: "blow", annee: "2023"}

  // ];

  useEffect(() => {
    console.log("rendu");

    fetch(urlListeFilms)
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data)
        setListeFilms(data);
      })

  }, []);

  const tuileFilms = listeFilms.map((film, index) => {
    return <TuileFilm key={index} data={film}/>
  })

  return (
    <main>
      <h2>ListeFilms</h2>
      <nav><NavLink to={`data.titre`}>{tuileFilms}</NavLink></nav>
    </main>
  );
}

export default ListeFilms;


