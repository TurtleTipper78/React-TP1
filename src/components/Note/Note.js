import { color } from 'framer-motion';
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
    const [note, setNote] = useState("")


    useEffect(() => {
        fetch(urlFilm)
            .then((reponse) => reponse.json())
            .then((data) => {
            setFilm(data);
            // console.log(data)
            calculNote(data.notes)
            })
        }, []);

    function calculNote(data){
        let dataNote = data
        // console.log(dataNote)
        let somme = 0;
        let compte = 0;

        for (let i = 0; i < dataNote.length; i++) {
            if (dataNote[i] !== null) {
                somme += dataNote[i];
                compte++;
            }
        }
        const moyVote = (somme / compte + 1).toFixed(1);
        const totalVote = compte + 1 

        setTotal(totalVote)
        setMoy(moyVote)
    }

    let blockShowNote;
    if ( total > 0) {
        blockShowNote = (
            <div className='moy'>
                <h1> Moyenne: {moy}</h1>
                <small>Vote total: {total}</small>
            </div>
        );
    } else {
        blockShowNote = <h3>Ce film n'a pas de vote</h3>;
    }

    async function soumettreNote(e){
    // console.log(e.target.textContent)

    let note = e.target.getAttribute('data-value');
    let aNotes = []
    // console.log(note)
    setNote(note)

    // if (!film.note) {
    //     aNotes = [];
    //     console.log("Prout")
    // } else {
        aNotes = film.notes;
        aNotes.push(Number(note));
        // console.log(aNotes)
    // }

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

    function star(val){
        let stars = document.querySelector(".soumettre").children;
        let currentStarEl = stars[val-1]
        //console.log(currentStarEl.value)
        for (let i = 0; i < currentStarEl.value; i++) {
            // console.log(stars[i])
            stars[i].style = "color: green;"
        }  
    }

    function exit(){
        let stars = document.querySelector(".soumettre").children;
        for (let i = 0; i < stars.length; i++) {
            if(stars[i] > note){
                stars[i].style = "color: black"
            }
            
        }
    }

    

    // className={note >= 2 ? "star" : "starhover"}
    return(
    <section className='note'>
        <div className='soumettre'>
            <button data-value="1" value="1" className={note >= 1 ? "star" : ""} onMouseEnter={() => star("1")}onMouseLeave={exit} onClick={soumettreNote}></button>
            <button data-value="2" value="2" className={note >= 2 ? "star" : ""} onMouseEnter={() => star("2")}onMouseLeave={exit} onClick={soumettreNote}></button>
            <button data-value="3" value="3" className={note >= 3 ? "star" : ""} onMouseEnter={() => star("3")}onMouseLeave={exit} onClick={soumettreNote}></button>
            <button data-value="4" value="4" className={note >= 4 ? "star" : ""} onMouseEnter={() => star("4")}onMouseLeave={exit} onClick={soumettreNote}></button>
            <button data-value="5" value="5" className={note >= 5 ? "star" : ""} onMouseEnter={() => star("5")}onMouseLeave={exit} onClick={soumettreNote}></button>
        </div>
        {blockShowNote}
    </section>

    );
}

export default Note;