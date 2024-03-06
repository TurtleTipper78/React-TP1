import { useState } from 'react';
import './Filtre.css';

function Filtre(props) {

    const [filtreActif, setFiltreActif] = useState('Titre alphabétique (A-Z)')

    function afficheFiltreActif(e){
        setFiltreActif(e.target.textContent)
    }
  
  return (
    <div>
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
    </div>
        
  );
}


export default Filtre;
