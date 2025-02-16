import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firbase.config";


const AuthContext=createContext();

export const UseAuth=()=>{
    return useContext(AuthContext);
}

const googleProvider=new GoogleAuthProvider()
export const AuthProvide=({children})=>{
 const [currentUser,setCurrentUser]=useState(null);
 const [isLoading,setIsLoading]=useState(true);

 const registerUser=async(email,password)=>{
    return await createUserWithEmailAndPassword(auth,email,password);
 }

 const loginUser=async(email,password)=>{
    return await signInWithEmailAndPassword(auth,email,password);
 }

 const loginWithGoogle=async()=>{
return await signInWithPopup(auth,googleProvider);
 }

 useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
        setIsLoading(false);
        if(user){
            const {email,displayName,photoURL}=user;
            const userData={
                email,
                name:displayName,
                photo:photoURL
            }
        }
    })
    return ()=>unsubscribe();
  
 }, []);

 const logout=async()=>{
return signOut(auth); 
}

 const value={
    currentUser,
    registerUser,
    loginUser,
    loginWithGoogle,
    logout
 }

  return(  
<AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>
)}