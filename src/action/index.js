/**
 * Created by l.pen on 11/22/2017.
 */

import {firebase} from '../firebase/firebase'

export const startLogin = (email="megnlovegood@gmail.com",password="penlymeng123")=>{

    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }
}