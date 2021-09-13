function newUser()
{
    username = document.getElementById("Username").value;
    localStorage.setItem("User_Name", username);
    window.location = "kwitter_room.html";
}