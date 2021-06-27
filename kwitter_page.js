
var firebaseConfig = {
  apiKey: "AIzaSyD6YvFoAjUB8LTgh_DKCIjOo1WomTlxd8A",
  authDomain: "lets-chat-6e816.firebaseapp.com",
  databaseURL: "https://lets-chat-6e816-default-rtdb.firebaseio.com",
  projectId: "lets-chat-6e816",
  storageBucket: "lets-chat-6e816.appspot.com",
  messagingSenderId: "497713919094",
  appId: "1:497713919094:web:3efa00c325e2dd226c5b57",
  measurementId: "G-NM6DGLYTS8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();