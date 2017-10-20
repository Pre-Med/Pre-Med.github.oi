// Initialize Firebase
var config = {
apiKey: "AIzaSyA-DTkUgRphT8xO-vj80VSG4v-UXzDtzRs",
authDomain: "premed-dbe50.firebaseapp.com",
databaseURL: "https://premed-dbe50.firebaseio.com",
projectId: "premed-dbe50",
storageBucket: "premed-dbe50.appspot.com",
messagingSenderId: "548384395530"
};

firebase.initializeApp(config);

var database = firebase.database()

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithRedirect(provider);

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

var userId = firebase.auth().currentUser.uid;
var content = firebase.database().ref('/users/' + userId).once('premed-dbe50').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
});

document.getElementById('text').innerHTML = content;