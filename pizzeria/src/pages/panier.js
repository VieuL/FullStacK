import { colors } from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import React from "react";
import axios from 'axios';
import  { Redirect } from 'react-router-dom';


async function makePostRequest(url, lpizzas ,idClient) {

    let res = await axios.post(url, {
        pizzas: lpizzas,
        client: idClient,
        commentaire: "",
    });

    return res; 

}


function Panier (reservation, addReservation, client, addUserId) {
    // Fonction pour calcuer le prix total de le réservation
    const totalPrix = () =>{
        let tot = 0;
        const reservations = reservation.reservation.slice();
        for(const µ in reservations){
            tot = tot + reservations[µ].Pizza.prix;
        }
        return tot;
    }


    // Fonction pour supprimier une pizza de la réservation.
    const delPizza = (id) => {
        const reservations = reservation.reservation.slice();
        for(const µ in reservations){
            if(reservations[µ].id == id){
                reservations.splice(µ,1);
            }
        }
        reservation.addReservation(reservations);
    }

    //Validation de la commande, inscription dans la base de données.
    const validationC = () => {
        let aRetourner = [];
        const res = reservation.reservation.slice();
        for(const µ in res){
            aRetourner.push(res[µ].Pizza._id)
        }

        makePostRequest('http://localhost:3000/api/v1/commande',aRetourner, reservation.client)
        .then(( data ) => console.log(data))
        .catch((err) => console.log(err))

        // On vide le pannier
        reservation.addReservation([]);
    }

    //============================================================================
    // Si il y a une réservation.
    if(reservation.reservation.length > 0){
    return(
        <div class = "container">
            <h1>Votre commande</h1>
            {/* Nous créons un tableau qui affichera chaque pizza commandé 
            La table est constitué du nom de la pizza de son prix et d'une possibilité de supp la pizza de la commande
            */}
            <table class="table table-bordered" style={{columnWidth: "60px"}}>
            <thead class="thead-dark">
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prix</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            {reservation.reservation.map(r => (
            <tr><td>{r.Pizza.name}</td>
            <td>{r.Pizza.prix}€</td>
             <td><Button variant="outline-danger" onClick={() => delPizza(r.id)}>-</Button></td></tr>))}

            <tr>
                <td>Total</td>
                <td>{totalPrix()}€</td>
                <td></td>
            </tr>
            </table>
             {reservation.client != undefined ?

            <Button variant="success" onClick={validationC}> Valider la commande </Button>:
            <Button variant="success" href = "/login"> Connexion </Button>
            }
        </div>
    )
    }

    // Si le panier est vide
    else{
        return (
            <div>
                <h1>Votre panier est vide</h1>
            </div>
        )
    }
}

export default Panier;