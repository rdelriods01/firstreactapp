import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyArDmFnZI9HuFuDm505I7J4IIqKs-vNJiw",
    authDomain: "marioplan-hishis.firebaseapp.com",
    databaseURL: "https://marioplan-hishis.firebaseio.com",
    projectId: "marioplan-hishis",
    storageBucket: "marioplan-hishis.appspot.com",
    messagingSenderId: "273049899733"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;