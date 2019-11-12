import app from "firebase/app"; //import firebase api
import "firebase/auth"; //responsible for authentication

var config = {
  apiKey: "AIzaSyDKLWI2GCULk7cwthUfO6Kq7PEVAUNLoao",
  authDomain: "react-firebase-884dd.firebaseapp.com",
  databaseURL: "https://react-firebase-884dd.firebaseio.com",
  projectId: "react-firebase-884dd",
  storageBucket: "react-firebase-884dd.appspot.com",
  messagingSenderId: "192664896619",
  appId: "1:192664896619:web:24deec1725e8e192fc9d2e",
  measurementId: "G-QVFW3G0784"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => this.auth.SignInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.SignOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
