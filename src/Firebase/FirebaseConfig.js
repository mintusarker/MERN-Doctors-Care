// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXAWu-RRVvdGbIZVWvVBZ57Z3NYCd71-g",
  authDomain: "hello-doctors-5639e.firebaseapp.com",
  projectId: "hello-doctors-5639e",
  storageBucket: "hello-doctors-5639e.appspot.com",
  messagingSenderId: "159342580935",
  appId: "1:159342580935:web:73cbe561d1f4b539859ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;