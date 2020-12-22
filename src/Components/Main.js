import React from 'react'
import firebase from "../Firebase/Firebase";
import Create from './Create';
import Read from './Read';
const Main=()=> {
const signOut =()=>{
    firebase.auth().signOut();
}
    return (
        <div>
            Bonjour {firebase.auth().currentUser.displayName}
            <div onClick={signOut}> Se deconnecter</div>
            <Create></Create>
            <Read></Read>
        </div>
    )
}

export default Main
