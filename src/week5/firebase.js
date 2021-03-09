import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVt53_A0kwA5NZ_KVLW3btY5yOYN40IeE",
  authDomain: "friend-test-3b9ff.firebaseapp.com",
  databaseURL: "https://friend-test-3b9ff.firebaseio.com",
  projectId: "friend-test-3b9ff",
  storageBucket: "friend-test-3b9ff.appspot.com",
  messagingSenderId: "535393314714",
  appId: "1:535393314714:web:4ef23f250ca87d7de17c23",
  measurementId: "G-M852M85RP0",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };