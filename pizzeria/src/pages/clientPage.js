import React from "react";
import logo from '../data/coucou.gif'

const ClientPage = (nom) => {
    return (
        <div>
            <h1> Bonjour vous etes le client {nom.nom}</h1>
            <img src={logo} alt="loading..." />
        </div>
    );
};


export default ClientPage;