username= localStorage.getItem('USER');
document.getElementById("welcome").innerHTML = "Welcome, "+ username;
function addRoom()
{
    rname = document.getElementById("room_name").value;
    localStorage.setItem("Room", rname);
    firebase.database().ref("/").child(rname).update({
      purpose : "Adding New Room"
    })
    window.location = "kwitter_page.html";
    document.getElementById("room_name").value = "";  
}
var firebaseConfig = {
      apiKey: "AIzaSyD3FzcpHnEw0SVZUc4WEFAcuf079yH84ko",
      authDomain: "kwitter-9f0d4.firebaseapp.com",
      databaseURL: "https://kwitter-9f0d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-9f0d4",
      storageBucket: "kwitter-9f0d4.appspot.com",
      messagingSenderId: "610149845753",
      appId: "1:610149845753:web:a4374cc2532a4b86ae3028"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     r = "<div id="+Room_names+" onclick = 'navigate(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += r;
      //End code
      });});}
getData();
function navigate(e)
{
      localStorage.setItem("Room", e);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("USER");
      localStorage.removeItem("Room");
      window.location = "index.html";
}