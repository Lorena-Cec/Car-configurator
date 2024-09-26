import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

  apiKey: "AIzaSyBZ7MVz6N80NMB4XwVgLOEcIyqEHZiIu4g",
  authDomain: "car-configurator-prototy-f7101.firebaseapp.com",
  projectId: "car-configurator-prototy-f7101",
  storageBucket: "car-configurator-prototy-f7101.appspot.com",
  messagingSenderId: "371814645250",
  appId: "1:371814645250:web:f9b8f4cd37da0ba710311b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); 

export { auth, googleProvider, db };
