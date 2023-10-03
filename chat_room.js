
const firebaseConfig = {
    apiKey: "AIzaSyA2zwwoYtKRsUhHogJRwmtp7-v2I5QobEY",
    authDomain: "projeto-kwitter-d3277.firebaseapp.com",
    projectId: "projeto-kwitter-d3277",
    storageBucket: "projeto-kwitter-d3277.appspot.com",
    messagingSenderId: "122223254673",
    appId: "1:122223254673:web:2cb9f7bffc45dee39f3330"
  };
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adicionando nome da sala"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Nome da sala: " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }