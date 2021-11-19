import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBz0AXXabmhCIyN_M37hhYxAYgvpA0dISs",
    authDomain: "mo-bookshelf-app.firebaseapp.com",
    databaseURL: "https://mo-bookshelf-app-default-rtdb.firebaseio.com",
    projectId: "mo-bookshelf-app",
    storageBucket: "mo-bookshelf-app.appspot.com",
    messagingSenderId: "907580774274",
    appId: "1:907580774274:web:72e1ff1445d8df8dfe219b"

};

firebase.initializeApp(firebaseConfig)
export default firebase;