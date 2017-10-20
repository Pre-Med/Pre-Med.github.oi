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

//var database = firebase.database()

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithRedirect(provider);

/* var userId = firebase.auth().currentUser.uid;
var content = firebase.database().ref('/users/' + userId).once('premed-dbe50').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
});
 */
//document.getElementById('text').innerHTML = content;