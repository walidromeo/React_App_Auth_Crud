import React,{useEffect,useState} from 'react'
import firebase from"../Firebase/Firebase"
import UpdateDelete from './UpdateDelete';
function Read() {
    const [recu,setRecu]=useState([]);
    useEffect(()=>{
      const database= firebase.database().ref("Crud")
      database.on("value",(snapShot)=>{
          const items = []
          // recovery data 
          const data = snapShot.val()
          // for loop specify each object in Array
          for ( let id in data)
          {
              items.push({id,...data[id]})
          }
        setRecu(items)
      })
    },[])
    return (
        <div>
        {recu.map((info,index)=>(<UpdateDelete info={info} key={index}></UpdateDelete>))}
        </div>
    )
}

export default Read
