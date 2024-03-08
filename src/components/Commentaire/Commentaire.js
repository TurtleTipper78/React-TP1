import './Commentaire.css';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../App/App';

function Commentaire(props) {
    //console.log(props.data);
    const context = useContext(AppContext);

    let id = props.data.param;

    const urlFilm = `https://four1f-node-api.onrender.com/films/${id}`;
    const [listeCommentaire, setListeCommentaire] = useState([]);

    useEffect(() => {
        setListeCommentaire(props.data.commentaires);
    }, [props.data.commentaires]);

    let blockShowCommentaire
    if (listeCommentaire){
        blockShowCommentaire =
        listeCommentaire.map((indexCommentaire, index)=>(
            <div key={index}>
                <p>Comment: {indexCommentaire.commentaire}</p>
                <small>- User: {indexCommentaire.usager}</small>
            </div>
        ))
    };
    
    let blockAjoutCommentaire;
    if (context.estLog){
        blockAjoutCommentaire = 
        <form onSubmit={soumettreCommentaire}>
        <textarea placeholder='Commentaire'></textarea>
        <button>Soumettre</button>
        </form>
    }

    async function soumettreCommentaire(e){
        e.preventDefault()
        
        let aCommentaires;
        let commentaireValue = document.querySelector("textarea").value;


        if (!listeCommentaire) {
            aCommentaires = [{ commentaire: commentaireValue, usager: context.usager }];
        } else {
            aCommentaires = listeCommentaire;
            aCommentaires.push({ commentaire: commentaireValue, usager: context.usager });
        }
        
        const oOption = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({commentaires: aCommentaires})
        }

        let putCommentaire = await fetch(urlFilm, oOption),
            getCommentaire = await fetch(urlFilm);

        Promise.all([putCommentaire, getCommentaire])
            .then(response => response[1].json())
            .then((data) => {
                setListeCommentaire(data.commentaires)
        });
        
        
    };

    return (
        <section >
            <div className='ajout'>
                {blockAjoutCommentaire}
            </div>
            <div className='show'>
                {blockShowCommentaire}
            </div>
        </section>
    );
}


export default Commentaire;
