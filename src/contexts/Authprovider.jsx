import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();




const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create account
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // signup with gmail acc

    const signUpWithGmail = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // login with email and password 
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {

        signOut(auth)
    }

    // update profile
    const updateuserProfile = ({ name, photoURL }) => {
      return  
      updateProfile(auth.currentUser, {
            displayName: "name", photoURL: photoURL
        })

    }

    // check sign-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // if(currentUser){
                setUser(currentUser);
                setLoading(false)
           
        })
        return () => {
            return unsubscribe();
        }
    })

    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut,
        updateuserProfile,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default Authprovider
