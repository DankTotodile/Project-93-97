function navigate()
{
    var username = document.getElementById("username").value;
    localStorage.setItem('USER', username);
    window.location="kwitter_room.html";
    console.log("NAVIGATION SUCCESS");
}