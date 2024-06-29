// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwmBR_OIEYI97sHJxkBp8jtEA30XWxsZY",
  authDomain: "spk-citra.firebaseapp.com",
  projectId: "spk-citra",
  storageBucket: "spk-citra.appspot.com",
  messagingSenderId: "1075881418861",
  appId: "1:1075881418861:web:68d8ad63256dde6d445f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }