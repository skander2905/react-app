import React from 'react';
import "./CreatePost.css";
import SideMenu from "../component/SideMenu"
import { Container } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";





const CreatePost = () => {
    const [user, setUser] = useState(null);
    //methode se met a jour chaque fois l'authentification change
    //on voir voir s'il y a un utilisateur
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);  //si l'utilisateur est connecte on l'aura dans une variable
    });
    return (
        <div className='page1'>
            <h5>Welcome {user?.displayName}</h5>
        </div>
    );
};

export default CreatePost;