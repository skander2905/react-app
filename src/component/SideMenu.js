import React from 'react';
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import MenuItem from './MenuItem';
import Home from '../pages/Home';
import { Link } from 'react-router-dom';
import "../pages/Admin.css";


const menuItems = [
    {
        name: 'Paramètres',
        exact: true,
        subMenus: [
            { name: "Type Dossier", to: "/Admin/Type_Dossier" },
            { name: "Paramètres Globales", to: "/Admin/Parametres_globales" },
            { name: "Honoraires en Extra", to: "/Admin/Honoraires_en_extra" },
            { name: "Timbre", to: "/Admin/Timbre" },
            { name: "Photocopie", to: "/Admin/Photocopie" },
            { name: "Transport", to: "/Admin/Transport" },
            { name: "Recette du Finance", to: "/Admin/Recette_du_finance" },
            { name: "Emplacement Dossier", to: "/Admin/Emplacement_dossier" },
            { name: "Tribunaux et Administration", to: "/Admin/Tribunaux_et_administration" },
            { name: "Utilisateur", to: "/Admin/Utilisateur" },
            { name: "Huissier", to: "/Admin/Huissier" },
            { name: "Collaborateur", to: "/Admin/Collaborateur" },
            { name: "Greffier", to: "/Admin/Greffier" },
            { name: "Prime Greffier", to: "/Admin/Prime_greffier" },
        ],
        iconClassName: 'bi bi-gear',
    },
    {
        name: 'Client',
        exact: true,
        subMenus: [
            { name: "Gestion Client", to: "/Admin/Gestion_Client" },
            { name: "Fiche Signalitique", to: "/Admin/Fiche_Signalitique" },
        ],
        iconClassName: 'bi bi-people-fill',
    },
    {
        name: 'Dossier',
        exact: true,
        subMenus: [
            { name: "Recherche", to: "/Admin/Recherche" },
            { name: "Emplacement Dossier", to: "/Admin/Emplacement_Dossier1" },
            { name: "Creation", to: "/Admin/Creation" },
            { name: "Gestion Archive", to: "/Admin/Gestion_Archive" },
        ],
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