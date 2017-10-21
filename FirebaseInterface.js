// Initialize Firebase
var config = {
apiKey: "AIzaSyA-DTkUgRphT8xO-vj80VSG4v-UXzDtzRs",
authDomain: "premed-dbe50.firebaseapp.com",
databaseURL: "https://premed-dbe50.firebaseio.com",
projectId: "premed-dbe50",
storageBucket: "premed-dbe50.appspot.com",
messagingSenderId: "548384395530"
};

var content = "nothing"

firebase.initializeApp(config);

var database = firebase.database()
function auth()
{
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider);
	getdata()
	
	document.getElementById('text').innerHTML = content;
}

function getdata()
{
	var userId = firebase.auth().currentUser.uid;
	content = firebase.database().ref('/users/' + userId).once('premed-dbe50');
}


