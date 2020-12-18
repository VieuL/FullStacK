import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { unsupportedProp } from '@material-ui/core';
import { Redirect } from "react-router-dom";


async function makeGetRequest(url) {
    let res = await axios.get(url);
    let data = res.data;
    return data;
  }
const Historique = (UserID, addUserId) => {
    useEffect(() => {
        fetchHist();
      }, []);

    const [hist, addHist] = React.useState([]);

    const fetchHist = () => {
    makeGetRequest('http://localhost:3000/api/v1/readC/' + UserID.UserID)
    .then((data) => addHist(data))
    .catch((err) => null)
    }

    if (UserID.UserID != undefined) {
    return (
        <div>
        <h1>Votre historique de commandes</h1>
        <table class="table table-bordered" style={{columnWidth: "60px"}}>
        <thead class="thead-dark"></thead>
        <tr>
                <th scope="col">N° de commande</th>
                <th scope="col">Commandes</th>
        </tr>
        {hist.map( d => <tr><td>{d._id}</td><td> {d.pizzas.map(p => (<p>{p.name}</p>))} </td></tr> )}
        </table>
        </div>
    )}

    // Si la personne n'est pas co
    else {
        return <Redirect to="./" />
    }

}

export default Historique;



