function getStarted() {
    username = document.getElementById("name").value;
    user_room = document.getElementById("room").value;

    if (username, user_room == "") {
        document.getElementById("invalid_error").style.display = "block";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("user_room", user_room);

        window.location = "./public/main.html";
    }
}