// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpjmNtHgUZDZAprYPLO4sGUvnNHNb--Gg",
    authDomain: "ema-john-simple-90d2a.firebaseapp.com",
    projectId: "ema-john-simple-90d2a",
    storageBucket: "ema-john-simple-90d2a.appspot.com",
    messagingSenderId: "9693379201",
    appId: "1:9693379201:web:131cc7394328174476ab80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;