
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyDaeUf4VcDExFwMLTRjORqVuJY2pTWa-bA",
  authDomain: "project94-3107b.firebaseapp.com",
  projectId: "project94-3107b",
  storageBucket: "project94-3107b.appspot.com",
  messagingSenderId: "935820597922",
  appId: "1:935820597922:web:41764b2ea8a5827a18d5fb",
  measurementId: "G-ZPDDT0Q0GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var firebaseConfige
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();



