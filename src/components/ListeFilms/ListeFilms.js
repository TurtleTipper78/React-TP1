import './ListeFilms.css';
import { Link } from 'react-router-dom'
import TuileFilm from "../TuileFilm/TuileFilm"
import Film from "../Film/Film"
import Filtre from "../Filtre/Filtre"
import { useEffect, useState } from 'react';

function ListeFilms() {
  const urlListeFilms = 'https://four1f-node-api.onrender.com/films';
  const [urlFiltre, setUrlFiltre] = useState(urlListeFilms);
  const [listeFilms, setListeFilms] = useState([]);

  useEffect(() => {
    fetch(urlFiltre)
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
        setListeFilms(data);
      });
  }, [urlFiltre]);

  const tuileFilm = listeFilms.map((film, index) => {
    return (
      <Link key={index} to={`/film/${film.id}`}>
        <TuileFilm data={film} />
      </Link>
    );
  })


  function fUrl(filtre) {
    let url;
    console.log(filtre)
    switch (filtre) {
      case 'Réalisateur alphabétique (A-Z)':
        url = `${urlListeFilms}?orderBy=realisation&orderDirection=asc`;
        break;
      case 'Réalisateur alphabétique (Z-A)':
        url = `${urlListeFilms}?orderBy=realisation&orderDirection=desc`;
        break;
      case 'Titre alphabétique (A-Z)':
        url = `${urlListeFilms}?orderBy=titre&orderDirection=asc`;
        break;
      case 'Titre alphabétique (Z-A)':
        url = `${urlListeFilms}?orderBy=titre&orderDirection=desc`;
        break;
      case 'Par année (du plus récent)':
        url = `${urlListeFilms}?orderBy=annee&orderDirection=desc`;
        break;
      case 'Par année (du plus ancien)':
        url = `${urlListeFilms}?orderBy=annee&orderDirection=asc`;
        break;
      default:
        url = urlListeFilms;
        break;
    }

    setUrlFiltre(url);
    console.log(url)
  }

  return (
    <main>
      <div className="filtre">
        <Filtre handleFiltre={fUrl} />
      </div>
      <div className="tuile">
        {tuileFilm}
      </div>
    </main>
  );
}

export default ListeFilms;
