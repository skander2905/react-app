
import Home from "./pages/Home";
import "./App.css"
import CreatePost from "./pages/CreatePost";
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

          <Route path="/CreatePost" element={<CreatePost />} />


          <Route path="/CreatePost/parametres/Type_dossier" element={<Type_dossier />} />
          <Route path="/CreatePost/parametres/parametres_globales" element={<Parametres_globales />} />
          <Route path="/CreatePost/parametres/honoraires_en_extra" element={<Honoraires_extra />} />
          <Route path="/CreatePost/parametres/emplacement_dossier" element={<Emplacement_dossier />} />
          <Route path="/CreatePost/parametres/tribunaux_et_administration" element={<Tribu_et_admin />} />
          <Route path="/CreatePost/parametres/utilisateur" element={<Utilisateur />} />
          <Route path="/CreatePost/parametres/huissier" element={<Huissier />} />
          <Route path="/CreatePost/parametres/collaborateur" element={<Collaborateur />} />
          <Route path="/CreatePost/parametres/greffier" element={<Greffier />} />
          <Route path="/CreatePost/parametres/prime_greffier" element={<Prime_greffier />} />
          <Route path="/CreatePost/parametres/timbre" element={<Timbre />} />
          <Route path="/CreatePost/parametres/photocopie" element={<Photocopie />} />
          <Route path="/CreatePost/parametres/transport" element={<Transport />} />
          <Route path="/CreatePost/parametres/recette_du_finance" element={<Recette_du_finance />} />

        </Route>


      </Routes>
    </BrowserRouter>
  );
};
export default App; 