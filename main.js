var firebaseConfig = {
    apiKey: "AIzaSyCnGJTlACrYqtaPQVDVWGZRvfEiwSQnkOw",
    authDomain: "practice-aed8a.firebaseapp.com",
    databaseURL: "https://practice-aed8a-default-rtdb.firebaseio.com",
    projectId: "practice-aed8a",
    storageBucket: "practice-aed8a.appspot.com",
    messagingSenderId: "949199097825",
    appId: "1:949199097825:web:7f5b7b09812c799dd50ca0",
    measurementId: "G-79RHZ4RMDR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
}
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
function getData() {firebase.database().red("/").on('value', function(snapshot) {document.getElementById("output").innerHTML
        Room_names = childKey;
        //Start code
        console.log("Room name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
        //End code
        });});}
    getData();