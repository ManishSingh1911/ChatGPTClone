import {getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYW3XhTRE1Rm5uO6KR4BrVQ7favPhTW-U",
  authDomain: "chatgpt-messenger-yt-c4b48.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-c4b48",
  storageBucket: "chatgpt-messenger-yt-c4b48.appspot.com",
  messagingSenderId: "339016792194",
  appId: "1:339016792194:web:868c9dbab00bc0578e9c9b"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db= getFirestore(app);
