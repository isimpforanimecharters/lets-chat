var firebaseConfig = {
    apiKey: "AIzaSyBTDhPY_uSwiFuAJt9Y7B4azIpjYZbRM6g",
    authDomain: "kwitter-5c7e7.firebaseapp.com",
    databaseURL: "https://kwitter-5c7e7-default-rtdb.firebaseio.com",
    projectId: "kwitter-5c7e7",
    storageBucket: "kwitter-5c7e7.appspot.com",
    messagingSenderId: "745577968097",
    appId: "1:745577968097:web:af4d1472883c0e7a5aa2a0",
    measurementId: "G-B0HQVFRPP8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name")
 document.getElementById("user_name").innerHTML="welcome " + user_name + "!" 
 function AddRoom (){
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"adding room name"
       })
       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html"
 }
function getData()
{firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("roomName- " + Room_names);
row="<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>";
document.getElementById("output").innerHTML+=row;

    //End code
    });});}
    getData();

    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="kwitter_page.html"
    }

function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,like:0
    
    });
    document.getElementById("msg").value="";
}