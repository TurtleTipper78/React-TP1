import { useState } from 'react';
import { motion } from 'framer-motion'
import './Filtre.css';

function Filtre(props) {

    const [filtreActif, setFiltreActif] = useState('Titre alphabétique (A-Z)')

    function afficheFiltreActif(e){
        setFiltreActif(e.target.textContent)
    }

    const transition = { duration: 0.5, ease: 'easeInOut' };
  
    const variantFiltre = {
        hidden: { opacity: 0, x: -25 },
        visible: { opacity: 1, x: 0, transition },
        exit: { opacity: 0, x: -25, transition }
    }
  
  return (
    <motion.div
        key='filtre'
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={variantFiltre}
        className='filtre'
    >
        <p className='fActif'>Filtre Actif :<span data-testid="filtreActif"> {filtreActif}</span></p>
        <ul>
            <li onClick={(e) => {props.handleFiltre('Réalisateur alphabétique (A-Z)'); afficheFiltreActif(e)}}>
                Réalisateur alphabétique (A-Z) 
            </li> 
            <li onClick={(e) => {props.handleFiltre('Réalisateur alphabétique (Z-A)'); afficheFiltreActif(e)}}>
                Réalisateur alphabétique (Z-A) 
            </li> 
            <li onClick={(e) => {props.handleFiltre('Titre alphabétique (A-Z)'); afficheFiltreActif(e)}}>
                Titre alphabétique (A-Z)
            </li> 
            <li onClick={(e) => {props.handleFiltre('Titre alphabétique (Z-A)'); afficheFiltreActif(e)}}>
                Titre alphabétique (Z-A)
            </li> 
            <li onClick={(e) => {props.handleFiltre('Par année (du plus récent)'); afficheFiltreActif(e)}}>
                Par année (du plus récent)
            </li> 
            <li onClick={(e) => {props.handleFiltre('Par année (du plus ancien)'); afficheFiltreActif(e)}}>
                Par année (du plus ancien)
            </li> 
        </ul>
    </motion.div> 
  );
}


export default Filtre;
