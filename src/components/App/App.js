//npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Acceuil from '../Accueil/Accueil';
import ListeFilms from '../ListeFilms/ListeFilms'
import Entete from '../Entete/Entete'
import Film from '../Film/Film'
import './App.css'; 


// function FilmId() {
//   const { id } = useParams();
// }

function App() {
  return (
    <Router>
      <Entete />
      <Routes>
        <Route path="/" element={<Acceuil />}/>
        <Route path="/liste-films" element={<ListeFilms />}/>
        <Route path="/film/:id" element={<Film />}/>
      </Routes>

    </Router>
  );
}

export default App;
