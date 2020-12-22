import React,{useState} from 'react';
import firebase from '../Firebase/Firebase'

export default function Create() {
    const [auteur,setAuteur]=useState("")
    const [text,setText]=useState("")

    const addtodb = ()=>{
        // Call database and Create Ref (Crud)
        const db = firebase.database().ref("Crud");
        // Stock data to add in var
        const dataToAdd = {
            auteur:auteur,
            text:text
        }
        // add data to database through function Push 
        db.push(dataToAdd)
        setText("")
        setAuteur("")
    }
    return (
        <div>
            <input type="text" placeholder="Auteur" value={auteur} onChange={e=>setAuteur(e.target.value)}/>  
            <textarea  placeholder="Entre Le Text" value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={addtodb}>Submit</button>
        </div>
    )
 }
