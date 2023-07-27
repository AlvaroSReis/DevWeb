import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASECONFIG)

const firebaseConfig = {
    apiKey: "AIzaSyDji2Gg9J0v7uJWG4uCLOsHu4fHztiY1r0",
    authDomain: "dctpv-devweb.firebaseapp.com",
    projectId: "dctpv-devweb",
    storageBucket: "dctpv-devweb.appspot.com",
    messagingSenderId: "77245788805",
    appId: "1:77245788805:web:5c70bfa22b440a50006fec"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};
