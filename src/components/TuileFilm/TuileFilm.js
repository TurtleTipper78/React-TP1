import './TuileFilm.css';

function TuileFilm(props) {
  return (
    <article>
      <img src={`img/${props.data.titreVignette}`} alt={props.data.titre} />
      <h2>{props.data.titre}</h2>
      <p>{props.data.realisation}</p>
      <p>{props.data.annee}</p>
    </article>
  );
}


export default TuileFilm;