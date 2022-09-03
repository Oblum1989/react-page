// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArE0V1OJ4cPk7qYF9rSdnpn3U2mxVgNrg",
  authDomain: "cv-web-app-3dc0d.firebaseapp.com",
  projectId: "cv-web-app-3dc0d",
  storageBucket: "cv-web-app-3dc0d.appspot.com",
  messagingSenderId: "195514340870",
  appId: "1:195514340870:web:00a1f42f59178a45db9587",
  measurementId: "G-H8FBF4XLDN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup =  () => signInWithPopup(auth, provider)