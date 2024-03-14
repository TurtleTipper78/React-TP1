import './Note.css';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

function Note() {
    let { id } = useParams();

    const urlFilm = `https://four1f-node-api.onrender.com/films/${id}`
    // const urlFilm = `https://nodejstp1.onrender.com/films/${id}`

    const [film, setFilm] = useState({})
    const [moy, setMoy] = useState("")
    const [total, setTotal] = useState("")
    const [msgErreur, setMsgErreur] = useState("")

    useEffect(() => {
        fetch(urlFilm)
            .then((reponse) => reponse.json())
            .then((data) => {
            setFilm(data);
            console.log(data.notes)
    
            calculNote(data.notes)
            })
        }, []);

    function calculNote(data){
        console.log(data)
        let dataNote = data
        let somme = 0;
        let compte = 0;

        for (let i = 0; i < dataNote.length; i++) {
            if (dataNote[i] !== null) {
                somme += dataNote[i];
                compte++;
            } else if (dataNote[i] == null){
                let msgErreurString = "Pas de vote s'ti"
                setMsgErreur(msgErreurString)
            }
        }
        const moyVote = (somme / compte + 1).toFixed(1);
        const totalVote = compte + 1 
        setTotal(totalVote)
        setMoy(moyVote)
    }

    async function soumettreNote(e){
    console.log(e.target.textContent)

    let aNotes = (e.target.textContent);
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
        setFilm(data)
        calculNote(data.notes)
    });

    }
    return(
    <section className='note'>
        <div className='soumettre'>
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
        {msgErreur ? (
            <h3>{msgErreur}</h3>
        ) : (
            <>
                <div className='moy'>
                    <h1> Moyenne: {moy}</h1>
                    <small>Vote total: {total}</small>
                </div>
            </>
        )}
    </section>

    );
}

export default Note;