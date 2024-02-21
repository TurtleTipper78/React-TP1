//npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Acceuil from '../Accueil/Accueil';
import ListeFilms from '../ListeFilms/ListeFilms'
import Entete from '../Entete/Entete'
import './App.css'; 


function App() {
  return (
    <Router>
      <Entete />
      <Routes>
        <Route path="/" element={<Acceuil />}/>
        <Route path="/liste-films" element={<ListeFilms />}/>

      </Routes>

    </Router>
  );
}

export default App;
