//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("Room");
name1 = localStorage.getItem("USER");
function send()
{
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            message : msg,
            likes : 0,
            person : name1
      })
      document.getElementById("message").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

m = message_data['message'];
l = message_data['likes'];
u = message_data['person'];

un = "<h4 >"+u+"<img src='tick.png' class = 'user_tick'></h4>";
msg = "<h4 class = 'message_h4'>"+m+"</h4>";
tu = "<button class = 'btn btn-primary' id = "+firebase_message_id+" value = "+l+" onclick = 'thumbsup(this.id)'>";
aa = "<span class = 'glyphicon glyphicon-thumbs-up'></span>Like = "+l+"</button>";
r = un+msg+tu+aa;

document.getElementById("output").innerHTML += r;
//End code
      } });  }); }
getData();
function thumbsup(lol)
{
      lel = lol;
      likes = document.getElementById(lel).value;
      ulikes = Number(likes) + 1;
      firebase.database().ref(room_name).child(lol).update({
            likes:ulikes
      });
}

