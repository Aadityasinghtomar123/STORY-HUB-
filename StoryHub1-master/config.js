import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCrmyBqOOt3uyrSOQLpuf1Sql3n5oQiQ9Y",
  authDomain: "newsletter-3dd18.firebaseapp.com",
  databaseURL: "https://newsletter-3dd18.firebaseio.com",
  projectId: "newsletter-3dd18",
  storageBucket: "newsletter-3dd18.appspot.com",
  messagingSenderId: "946867243492",
  appId: "1:946867243492:web:2647f1e9693d810d8a9ff1"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   