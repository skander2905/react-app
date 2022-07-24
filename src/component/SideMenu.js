import React from 'react';
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import MenuItem from './MenuItem';
import Home from '../pages/Home';
import { Link } from 'react-router-dom';


const menuItems = [
    {
        name: 'paramétres',
        exact: true,
        subMenus: [
            { name: "type dossier", to: "/CreatePost/parametres/Type_Dossier" },
            { name: "parametres globales", to: "/CreatePost/parametres/parametres_globales" },
            { name: "honoraires en extra", to: "/CreatePost/parametres/honoraires_en_extra" },
            { name: "timbre", to: "/CreatePost/parametres/timbre" },
            { name: "photocopie", to: "/CreatePost/parametres/photocopie" },
            { name: "transport", to: "/CreatePost/parametres/transport" },
            { name: "recette du finance", to: "/CreatePost/parametres/recette_du_finance" },
            { name: "emplacement dossier", to: "/CreatePost/parametres/emplacement_dossier" },
            { name: "tribunaux et administration", to: "/CreatePost/parametres/tribunaux_et_administration" },
            { name: "utilisateur", to: "/CreatePost/parametres/utilisateur" },
            { name: "huissier", to: "/CreatePost/parametres/huissier" },
            { name: "collaborateur", to: "/CreatePost/parametres/collaborateur" },
            { name: "greffier", to: "/CreatePost/parametres/greffier" },
            { name: "prime greffier", to: "/CreatePost/parametres/prime_greffier" },
        ],
        iconClassName: 'bi bi-gear',
    },
    {
        name: 'client',
        exact: true,
        to: "/CreatePost/client",
        iconClassName: 'bi bi-people-fill',
    },
    {
        name: 'dossier',
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