import './Commentaire.css';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../App/App';

function Commentaire() {

    let { id } = useParams();

    const urlFilm = `https://four1f-node-api.onrender.com/films/${id}`
    const [listeCommentaire, setListeCommentaire] = useState([])

    useEffect(() => {

    fetch(urlFilm)
        .then((reponse) => reponse.json())
        .then((data) => {
        // console.log(data)
        setListeCommentaire(data.commentaires);
        })
    }, []);

    let blockShowCommentaire
    if (listeCommentaire){
        blockShowCommentaire =
        listeCommentaire.map((indexCommentaire, index)=>(
                <p key={index}>Comment: {indexCommentaire.commentaire} User: {indexCommentaire.usager}</p>
        ))
    };
    
    const context = useContext(AppContext);

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
        
        const aCommentaires = listeCommentaire.commentaires || [];

        const commentairValue = document.querySelector("textarea").value

    if (!listeCommentaire.commentaires) {
        aCommentaires = [{ commentaire: commentairValue, usager: context.usager }];
    } else {
        aCommentaires = listeCommentaire.commentaires;
        aCommentaires.push({ commentaire: commentairValue, usager: context.usager });
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
        console.log(data);
        setListeCommentaire(data)
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
