// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmRBNe0WOL_z6gNX5RGlYqVIPRvpw3rJI",
  authDomain: "dimple-project-8c98f.firebaseapp.com",
  projectId: "dimple-project-8c98f",
  storageBucket: "dimple-project-8c98f.appspot.com",
  messagingSenderId: "474602872444",
  appId: "1:474602872444:web:dbbd9ed854ccda070c73f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth
