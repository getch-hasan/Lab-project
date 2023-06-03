// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcJLRQ9Xs8sXCZIfkLgQuZXYLTyfpAOCE",
    authDomain: "e-commerce-37346.firebaseapp.com",
    projectId: "e-commerce-37346",
    storageBucket: "e-commerce-37346.appspot.com",
    messagingSenderId: "569378276896",
    appId: "1:569378276896:web:134e9108440f65c98fde45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;