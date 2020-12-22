import React,{useState,useEffect} from 'react'
import firebase from "../Firebase/Firebase"
function UpdateDelete({info}) {
    // MAKE 3 VARIABLES (UPDATE ,NEW AUTEUR ,NEW TEXT)
    const [update,setUpdate] = useState(false)
    const [uauteur,setUAuteur] = useState(null)
    const [utext,setUText] = useState(null)
    // FUNCTION MAKE UPDATE 
    const updateFunction = ()=>{ 
        // CALL UPDATE AND RECEIVE ID FOR EACH DATA (CHILD.ID)
        const db = firebase.database().ref("Crud").child(info.id)
        // CONDITION TO RETURN DATA TO STATE 
        if (uauteur!==null)
            {
                db.update({auteur:uauteur})
            }
        if (utext!==null)
            {
                db.update({text:utext})
            }
        // TRANSITION TO READ A NEW INTERFACE and entre to 
        setUpdate(false)
    } 
    // Function to remove    
    const removeFunction=()=>{
        const db = firebase.database().ref("Crud").child(info.id)
        db.remove()
    }
    return (
        <div>
            
          {/* for a read a value from database */}
          {update===false && (   
            <div>
                <ul>
                    <li>l'auteur est: {info.auteur} <br/> message est : {info.text}</li>
                             {/* switch to interface if update true */}
                    <button onClick={()=>setUpdate(true)}>Update</button>
                    <button onClick={removeFunction}>Delete</button>
                </ul>
            </div>)
          }
          {update&&(
              <div>
                <input defaultValue={info.auteur} onChange={e=>setUAuteur(e.target.value)} type="text"/>
                <textarea defaultValue={info.auteur} onChange={e=>setUText(e.target.value)}/>
                <button onClick={updateFunction}>Set Update</button>
              </div>
          )}
        </div>
    )
}

export default UpdateDelete
