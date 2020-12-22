import React, { useState, useEffect } from 'react';
import Main from "./Components/Main"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "./Firebase/Firebase";
import {ContextUid} from "./Context/Context";
const App = () => {
  const [log, setLog] = useState(false);
  const [Uid, setUid] = useState(null)
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    },
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setLog(!!user)
      setUid(user.uid)
    }
    )

  })
  return (
    <ContextUid.Provider value={Uid}>
      <div className="App" style={{ textAlign: 'center' }}>
        <h1>Hello From APP</h1>
        {log ? (<Main></Main>) : (<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}></StyledFirebaseAuth>)}
      </div>
    </ContextUid.Provider>

  );
}

export default App;
