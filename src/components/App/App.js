//npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import Entete from '../Entete/Entete'
import Acceuil from '../Accueil/Accueil';
import ListeFilms from '../ListeFilms/ListeFilms'
import Film from '../Film/Film'
import Filtre from '../Filtre/Filtre';
import Admin from '../Admin/Admin'
import Footer from '../Footer/Footer';

import './App.css'; 

export const AppContext = React.createContext();

// function FilmId() {
//   const { id } = useParams();
// }

function App() {

  const location = useLocation();

  const [logging, setLogging] = useState({estLog: false, usager: ''})

  function login(e) {
    e.preventDefault()
    if (e.target.usager.value == 'admin'){
      // sessionStorage.setItem('estLogin');
      setLogging(logging => ({ ...logging, estLog: true, usager: e.target.usager.value}) )
      e.target.reset();
    }
  }

  function logout() {
    setLogging(logging => ({ ...logging, estLog: false, usager: ""}) )
  }

  return (
    <AppContext.Provider value={logging}> 
        <Entete handleLogin={login} logging={logging} handleLogout={logout}/>
        <AnimatePresence mode="wait">

          <Routes location={location} key={location.key}>
            <Route path="/" element={<Acceuil />}/>
            <Route path="/accueil" element={<Acceuil />}/>
            <Route path="/liste-films" element={<ListeFilms />}/>
            <Route path="/film/:id" element={<Film />}/>
            <Route path="/filtre" element={<Filtre />}/>
            <Route path="/admin" element={logging.estLog ? <Admin /> : <Navigate to="/" />} />
          </Routes>

        </AnimatePresence>
        <Footer />
    </AppContext.Provider>
  );
}

export default App;
