//npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Acceuil from '../Accueil/Accueil';
import ListeFilms from '../ListeFilms/ListeFilms'
import Entete from '../Entete/Entete'
import Film from '../Film/Film'
import './App.css'; 
import Filtre from '../Filtre/Filtre';
import Footer from '../Footer/Footer';
import Admin from '../Admin/Admin'

export const AppContext = React.createContext();

// function FilmId() {
//   const { id } = useParams();
// }

function App() {

  const [logging, setLogging] = useState({estLog: false, usager: ''})

  function login(e) {
  e.preventDefault()
    if (e.target.usager.value == 'admin'){
      e.target.reset()
      setLogging(logging => ({ ...logging, estLog: true, usager: e.target.usager.value}) )
    }
  
  }

  return (
    <AppContext.Provider value={logging}> 
      <Router>
        <Entete handleLogin={login} logging={logging}/>
        <Routes>
          <Route path="/" element={<Acceuil />}/>
          <Route path="/liste-films" element={<ListeFilms />}/>
          <Route path="/film/:id" element={<Film />}/>
          <Route path="/filtre" element={<Filtre />}/>
          <Route path="/admin" element={logging.estLog ? <Admin /> : <Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
