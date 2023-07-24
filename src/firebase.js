import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCdi5treffChLazacS4eBgbeeYCc3_9BK8",
  authDomain: "test-3be97.firebaseapp.com",
  projectId: "test-3be97",
  storageBucket: "test-3be97.appspot.com",
  messagingSenderId: "727754026767",
  appId: "1:727754026767:web:4c151fe903133da246187a"
}).auth()
