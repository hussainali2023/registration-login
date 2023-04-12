// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvV2PoK9GwMiRIrppPa2pVo7P_7zm6kv0",
  authDomain: "registration-app-cd9af.firebaseapp.com",
  projectId: "registration-app-cd9af",
  storageBucket: "registration-app-cd9af.appspot.com",
  messagingSenderId: "334344044362",
  appId: "1:334344044362:web:194f46e5fa53be24e24bb3"
};

console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;