// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeD33GSXkmnMjimbvLglie07oToexSSWk",
  authDomain: "netflixgpt-bc096.firebaseapp.com",
  projectId: "netflixgpt-bc096",
  storageBucket: "netflixgpt-bc096.appspot.com",
  messagingSenderId: "586043445942",
  appId: "1:586043445942:web:81dfcc06f7f387481bcc17",
  measurementId: "G-SZSS9PH2GT",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
