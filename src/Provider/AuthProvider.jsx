import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    //console.log(user);

    const [loading,setLoading] = useState(true);


    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logout =  () =>{
        return signOut(auth);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (upDateData) =>{
        return updateProfile(auth.currentUser,upDateData)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logout,
        signIn,
        loading,
        setLoading,
        updateUser,
    };
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;