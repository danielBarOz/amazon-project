import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCa8S_aQBpJww68athla9RFm17l4CDLal4",
  authDomain: "clone-96933.firebaseapp.com",
  databaseURL: "https://clone-96933.firebaseio.com",
  projectId: "clone-96933",
  storageBucket: "clone-96933.appspot.com",
  messagingSenderId: "429417979794",
  appId: "1:429417979794:web:604ebbea296fc228b7ab4b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
