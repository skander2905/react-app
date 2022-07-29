
import Home from "./pages/Home";
import "./App.css"
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Type_dossier from "./pages/Type_dossier";
import Parametres_globales from "./pages/Parametres_globales";
import Honoraires_extra from "./pages/Honoraires_extra";
import Emplacement_dossier from "./pages/Emplacement_dossier";
import Tribu_et_admin from "./pages/Tribu_et_admin";
import Utilisateur from "./pages/Utilisateur";
import Huissier from "./pages/Huissier";
import Collaborateur from "./pages/Collaborateur";
import Greffier from "./pages/Greffier";
import Prime_greffier from "./pages/Prime_greffier";
import Timbre from "./pages/Timbre";
import Photocopie from "./pages/Photocopie";
import Transport from "./pages/Transport";
import Recette_du_finance from "./pages/Recette_du_finance";

import { Outlet } from 'react-router-dom';
import SideMenu from "./component/SideMenu";
import Gestion_Client from "./pages/Gestion_Client";
import Fiche_Signalitique from "./pages/Fiche_Signalitique";
import Recherche from "./pages/Recherche"
import Emplacement_Dossier1 from "./pages/Emplacement_Dossier1"
import Creation from "./pages/Creation"
import Gestion_Archive from "./pages/Gestion_Archive";


const SidebarLayout = () => (
  <>
    <SideMenu />
    <Outlet />
  </>
);

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<SidebarLayout />}>

          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/Type_dossier" element={<Type_dossier />} />
          <Route path="/Admin/Parametres_globales" element={<Parametres_globales />} />
          <Route path="/Admin/Honoraires_en_extra" element={<Honoraires_extra />} />
          <Route path="/Admin/Emplacement_dossier" element={<Emplacement_dossier />} />
          <Route path="/Admin/Tribunaux_et_administration" element={<Tribu_et_admin />} />
          <Route path="/Admin/Utilisateur" element={<Utilisateur />} />
          <Route path="/Admin/Huissier" element={<Huissier />} />
          <Route path="/Admin/Collaborateur" element={<Collaborateur />} />
          <Route path="/Admin/Greffier" element={<Greffier />} />
          <Route path="/Admin/Prime_greffier" element={<Prime_greffier />} />
          <Route path="/Admin/Timbre" element={<Timbre />} />
          <Route path="/Admin/Photocopie" element={<Photocopie />} />
          <Route path="/Admin/Transport" element={<Transport />} />
          <Route path="/Admin/Recette_du_finance" element={<Recette_du_finance />} />
          <Route path="/Admin/Gestion_Client" element={<Gestion_Client />} />
          <Route path="/Admin/Fiche_Signalitique" element={<Fiche_Signalitique />} />
          <Route path="/Admin/Recherche" element={<Recherche />} />
          <Route path="/Admin/Emplacement_Dossier1" element={<Emplacement_Dossier1 />} />
          <Route path="/Admin/Creation" element={<Creation />} />
          <Route path="/Admin/Gestion_Archive" element={<Gestion_Archive />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App; 