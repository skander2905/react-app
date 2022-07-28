import React from 'react';
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import MenuItem from './MenuItem';
import Home from '../pages/Home';
import { Link } from 'react-router-dom';
import "../pages/CreatePost.css";


const menuItems = [
    {
        name: 'Paramètres',
        exact: true,
        subMenus: [
            { name: "Type dossier", to: "/CreatePost/Type_Dossier" },
            { name: "Paramètres globales", to: "/CreatePost/Parametres_globales" },
            { name: "Honoraires en extra", to: "/CreatePost/Honoraires_en_extra" },
            { name: "Timbre", to: "/CreatePost/Timbre" },
            { name: "Photocopie", to: "/CreatePost/Photocopie" },
            { name: "Transport", to: "/CreatePost/Transport" },
            { name: "Recette du finance", to: "/CreatePost/Recette_du_finance" },
            { name: "Emplacement dossier", to: "/CreatePost/Emplacement_dossier" },
            { name: "Tribunaux et administration", to: "/CreatePost/Tribunaux_et_administration" },
            { name: "Utilisateur", to: "/CreatePost/Utilisateur" },
            { name: "Huissier", to: "/CreatePost/Huissier" },
            { name: "Collaborateur", to: "/CreatePost/Collaborateur" },
            { name: "Greffier", to: "/CreatePost/Greffier" },
            { name: "Prime greffier", to: "/CreatePost/Prime_greffier" },
        ],
        iconClassName: 'bi bi-gear',
    },
    {
        name: 'Client',
        exact: true,
        to: "/CreatePost/client",
        iconClassName: 'bi bi-people-fill',
    },
    {
        name: 'Dossier',
        exact: true,
        to: "/CreatePost/dossier",
        iconClassName: 'bi bi-folder',
    },
];

const SideMenu = () => {
    const [user, setUser] = useState(null);
    //methode se met a jour chaque fois l'authentification change
    //on voir voir s'il y a un utilisateur
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);  //si l'utilisateur est connecte on l'aura dans une variable
    });

    const handleLogout = async () => {
        await signOut(auth);
        window.location.replace("/");
    }
    return (
        <div className='side-menu'>
            <div className='main-menu'>
                <ul>
                    {menuItems.map((menuItem, index) => (
                        <MenuItem
                            key={index}
                            name={menuItem.name}
                            exact={menuItem.exact}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus || []}
                            iconClassName={menuItem.iconClassName}
                        />
                    ))}
                    {/*<MenuItem
                        name={"Parametres"}
                        subMenus={[{ name: "type dossier" }, { name: "taxe" }]}
                    />
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <i class="bi bi-people-fill"></i>
                            </div>
                            Client
                        </a>
                    </li>
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <i class="bi bi-folder"></i>
                            </div>
                            Dossier
                        </a>
    </li> */}
                </ul>

            </div>
            <div className='side-menu-footer'>
                <div className='user-info'>
                    <h5> {user?.displayName}</h5>
                </div>
                <div className='logout'>
                    <button onClick={() => handleLogout()}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <p>LogOut</p>
                    </button>


                </div>




            </div>
        </div>

    );
};

export default SideMenu;