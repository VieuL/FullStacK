import { Button, colors } from "@material-ui/core";
import React from "react";


function Panier (reservation) {

    const reservations = reservation.reservation.slice();
    console.log(reservations);
    if(reservations.length > 0){
    return(
        <div class = "container">
            <h1>Votre commande</h1>
            <table class="table table-bordered" style={{columnWidth: "60px"}}>
            <thead class="thead-dark">
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prix</th>
                <th scope="col">Action</th>
                </tr>
            </thead>

            {reservations.map(r => (<tr><td>{r.Pizza.name}</td> <td>{r.Pizza.prix}€</td> <td><Button>-</Button></td></tr>))}
            </table>

            <Button>Valider la commande</Button>
        </div>
    )
    }

    else{
        return (
            <div>
                <h1>Votre panier est vide</h1>
            </div>
        )
    }
}

export default Panier;