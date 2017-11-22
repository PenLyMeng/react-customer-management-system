/**
 * Created by penlymeng on 11/22/17.
 */
import  * as firebase from 'firebase'



// Initialize Firebase
var config = {
    apiKey: "AIzaSyDs_K6PM-6cGDLTuyXnZHM4cJDm9xcwE00",
    authDomain: "testing-9c88a.firebaseapp.com",
    databaseURL: "https://testing-9c88a.firebaseio.com",
    projectId: "testing-9c88a",
    storageBucket: "testing-9c88a.appspot.com",
    messagingSenderId: "203358343892"
};


firebase.initializeApp(config);

const database = firebase.database();

export {firebase,database as default}

