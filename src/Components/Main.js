import React from 'react'
import firebase from "../Firebase/Firebase";
import Create from './Create';
import Read from './Read';


const Main=()=> {
    return (
        <div>
            Bonjour {firebase.auth().currentUser.displayName}
            <div onClick={()=>firebase.auth().signOut()}> Se deconnecter</div>
            <Create></Create>
            <Read></Read>
        </div>
    )
}

export default Main
