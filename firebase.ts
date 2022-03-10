import firebase from "firebase";
import store from "./store";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9U31c4n3LRC0dCZSHBmujUaoU5hlTRI0",
  authDomain: "boleh-move.firebaseapp.com",
  databaseURL:
    "https://boleh-move-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "boleh-move",
  storageBucket: "boleh-move.appspot.com",
  messagingSenderId: "1074532254821",
  appId: "1:1074532254821:web:74aba4ce60da601bdcb28c",
  measurementId: "G-0JT6V661PF",
};

let app;
if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}

const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export default app;
auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch({ type: "LOGIN", payload: user });
  }
});
export { auth };
export const database = firebase.database();

// Create a storage reference from our storage service

