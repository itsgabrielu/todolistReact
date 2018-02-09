const firebase = require("firebase");
const config = {
    apiKey: "AIzaSyCT2Er-ENswqpytPQg9scU3Ei1L_MprESc",
    authDomain: "personalsite-fe700.firebaseapp.com",
    databaseURL: "https://personalsite-fe700.firebaseio.com",
    projectId: "personalsite-fe700",
    storageBucket: "personalsite-fe700.appspot.com",
    messagingSenderId: "528799413722"
  };
const fire = firebase.initializeApp(config);
export default fire;
