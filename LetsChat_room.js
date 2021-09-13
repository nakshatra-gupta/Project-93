const firebaseConfig = {
      apiKey: "AIzaSyDEVYSvCMEeZP73X3l-xPwJKG5zC7tOl5Y",
      authDomain: "practice-68572.firebaseapp.com",
      databaseURL: "https://practice-68572-default-rtdb.firebaseio.com",
      projectId: "practice-68572",
      storageBucket: "practice-68572.appspot.com",
      messagingSenderId: "802046389771",
      appId: "1:802046389771:web:270eb00e257c3d2c42e10e"
    };
    
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
