import React ,{useState,useEffect} from 'react';
import Main from "./Components/Main"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "./Firebase/Firebase";
const App =()=> {
  const [log,setLog]=useState(false);
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions:[
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess:()=> false
      },  
  };
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user=>{
      setLog(!!user)
    } 
      )
  })
  return (
    <div className="App" style={{textAlign:'center'}}>
      <h1>Hello From APP</h1>
      {log?(<Main></Main>):(<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}></StyledFirebaseAuth>)}
    </div>
  );
}

export default App;
