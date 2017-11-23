/**
 * Created by l.pen on 11/22/2017.
 */

import {firebase} from '../firebase/firebase'

export const startLogin = (email="megnlovegood@gmail.com",password="penlymeng123",onSuccess)=>{


    console.log("email " + email)
    console.log("password " + password)


    const result = firebase.auth().signInWithEmailAndPassword(email, password)
    let isSuccess = false

    result.then((snapshot)=>{

        console.log(snapshot.er)

        if(snapshot){
            isSuccess = true
            console.log("if")
        }else{
            isSuccess = false
            onSuccess()


            console.log("else")
        }
    })

      return {payload:isSuccess,type:"START_LOGIN"}

}

export const startSignUp = (email="megnlovegood@gmail.com",password="penlymeng123")=>{


    const result = firebase.auth().createUserWithEmailAndPassword(email, password)
    let isSuccess = false

    result.then((error)=>{
        if(error){
            isSuccess = false
        }else{
            isSuccess = true
        }
    })

    return {payload:isSuccess,type:"START_SIGN_UP"}

}


export const startSignout = ()=>{

    const result = firebase.auth().signOut()
    let isSuccess = false

    result.then((error)=>{
        if(error){
            isSuccess = false
        }else{
            isSuccess = true
        }
    })

    return {payload:isSuccess,type:"START_LOGOUT"}

}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log("User is signed in.")
        // ...
    } else {
        // User is signed out.
        console.log("User is signed out.")
    }
});

