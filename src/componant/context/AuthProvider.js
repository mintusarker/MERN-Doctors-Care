import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/FirebaseConfig';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }
   

    const updateUser = (userInfo) =>{
          return updateProfile(auth.currentUser, userInfo)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
        });
        return (() => unsubscribe())
    }, [])

    const authInfo = {
        createUser,
        userLogin,
        googleLogin,
        logOut,
        updateUser,
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;