import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase config block from firebase console
const firebaseConfig = {
	apiKey: "AIzaSyCxYSu7wjzfUmIC-kunu3zEsNGUvhcb6Y4",
	authDomain: "together-2c1ab.firebaseapp.com",
	projectId: "together-2c1ab",
	storageBucket: "together-2c1ab.appspot.com",
	messagingSenderId: "904274167722",
	appId: "1:904274167722:web:f9658b858be10970e04dd3",
};

// init our firebase
firebase.initializeApp(firebaseConfig);

// init services for our project
const togetherFirestore = firebase.firestore();
const togetherAuth = firebase.auth();

// timestamp func
const timestamp = firebase.firestore.Timestamp;

export { togetherFirestore, togetherAuth, timestamp };
