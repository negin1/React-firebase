import app from 'firebase/app';
import 'firebase/auth';


const config = {
  
    apiKey: "AIzaSyB5W1l-62WU4s3_YK8dP_I3PLKN_Hv7FOY",
    authDomain: "react-firebase-authentic-a7d30.firebaseapp.com",
    projectId: "react-firebase-authentic-a7d30",
    storageBucket: "react-firebase-authentic-a7d30.appspot.com",
    messagingSenderId: "555810023158",
    appId: "1:555810023158:web:2027b6397440cca0672ed7"

};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;