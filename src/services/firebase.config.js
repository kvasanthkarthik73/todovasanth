import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT4HC9yOlUJepYKTyPNfCU7xUuy0YbEyg",
  authDomain: "todovasanth.firebaseapp.com",
  projectId: "todovasanth",
  storageBucket: "todovasanth.appspot.com",
  messagingSenderId: "519988411511",
  appId: "1:519988411511:web:ebc89d9b7b99dbffa91a72",
  measurementId: "G-QE616MF9W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);