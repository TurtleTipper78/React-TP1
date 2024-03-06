import './Film.css';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import  Commentaire  from '../Commentaire/Commentaire'

function Film() {

  let { id } = useParams();

const urlFilm = `https://four1f-node-api.onrender.com/films/${id}`
const [film, setFilm] = useState({})

useEffect(() => {

  fetch(urlFilm)
    .then((reponse) => reponse.json())
    .then((data) => {
      // console.log(data)
      setFilm(data);
    })
}, []);


async function soumettreNote(e){
  // console.log(e.target.textContent)

  let aNotes = e.target.textContent
  // console.log(aNotes)
  if (!film.note) {
    aNotes = [1];
  } else {
    aNotes = film.notes;
    aNotes.push(1);
  }

  const oOption = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({notes: aNotes})
  }

  let putNote = await fetch(urlFilm, oOption),
      getFilm = await fetch(urlFilm);

  Promise.all([putNote, getFilm])
    .then(response => response[1].json())
    .then((data) => {
      // console.log(data.notes);
      setFilm(data)
  });
}

    
  return (
    <article className="film">
      <img src={`/img/${film?.titreVignette}`} alt={film?.titre} />
      <h2>{film?.titre}</h2>
      <p>{film?.realisation}</p>
      <p>{film?.annee}</p>
      <p>{film?.description}</p>
      <div className='btn'>
        <button onClick={soumettreNote}>0.5</button>
        <button onClick={soumettreNote}>1</button>
        <button onClick={soumettreNote}>1.5</button>
        <button onClick={soumettreNote}>2</button>
        <button onClick={soumettreNote}>2.5</button>
        <button onClick={soumettreNote}>3</button>
        <button onClick={soumettreNote}>3.5</button>
        <button onClick={soumettreNote}>4</button>
        <button onClick={soumettreNote}>4.5</button>
        <button onClick={soumettreNote}>5</button>
      </div>
      <p>{film?.notes}</p>
      <Commentaire />
    </article>
    
  );
}

export default Film;
