user_name = localStorage.getItem("username");
room_store = localStorage.getItem("user_room");

newPageTitle = user_name + "'s " + "Room";
document.querySelector('title').textContent = newPageTitle;

var firebaseConfig = {
    apiKey: "AIzaSyBURIuR6e-p-zsmUw-p9cfhZ2VPaLRRK7k",
    authDomain: "collab-database.firebaseapp.com",
    databaseURL: "https://collab-database-default-rtdb.firebaseio.com",
    projectId: "collab-database",
    storageBucket: "collab-database.appspot.com",
    messagingSenderId: "896498122744",
    appId: "1:896498122744:web:044e5019310fdd0033600d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("room_name").innerHTML = "Your Collab ID is: " + room_store;

function send() {
    msg = document.getElementById("msg").value;

    if (msg == "") {
        document.getElementById("msg").placeholder = "Don't type empty massage";
    } else {
        firebase.database().ref(room_store).push({
            name: user_name,
            message: msg
        });
        document.getElementById("msg").value = "";
        document.getElementById("msg").placeholder = "Aa";
    }
}

function getData() {
    firebase.database().ref("/" + room_store).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];

                name_tag = "<h4 class='username_h4'><img class='user_tick' src='./images/default-user.png'/> " + name + "</h4>";
                message_tag = "<h4 class='message_h4'>" + message + "</h4><hr>";
                row = name_tag + message_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function videoChatActivate() {
    sessionStorage.setItem("username", user_name);
    window.open("https://provido-meetings-by-gyanam.herokuapp.com/");
}

function invitee() {
    window.alert("Share this room name to chat with everyone. Your room is " + room_store);
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("user_room");
    window.location = ".././index.html";
}