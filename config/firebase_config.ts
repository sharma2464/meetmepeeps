// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjOn7chyn2FijC0ad1DQwUwMZm_F4mOD0",
  authDomain: "digital-252307.firebaseapp.com",
  databaseURL: "https://digital-252307.firebaseio.com",
  projectId: "digital-252307",
  storageBucket: "digital-252307.appspot.com",
  messagingSenderId: "478496488806",
  appId: "1:478496488806:web:4c711138af73078ca79ca7",
  measurementId: "G-PD8NWD02CB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);

auth.languageCode = "it";

const provider = new GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// provider.setCustomParameters({
//   login_hint: "user@example.com",
// });

export { provider };
