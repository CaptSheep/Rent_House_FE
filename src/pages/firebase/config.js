// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjVbB0cIvsvuMGdL1yqqh3hRsNQiByuvQ",
    authDomain: "renthouse-b0a3b.firebaseapp.com",
    projectId: "renthouse-b0a3b",
    storageBucket: "renthouse-b0a3b.appspot.com",
    messagingSenderId: "842795931857",
    appId: "1:842795931857:web:dfd87c1d72f33794180df0",
    measurementId: "G-2CQEEXH5LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);