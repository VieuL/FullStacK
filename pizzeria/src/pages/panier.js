import { Button, colors } from "@material-ui/core";
import React from "react";


function Panier (reservation, addReservation) {

    const totalPrix = () =>{
        let tot = 0;
        const reservations = reservation.reservation.slice();
        for(const µ in reservations){
            console.log(reservations[µ]);
            tot = tot + reservations[µ].Pizza.prix;
        }
        return tot;
    }
    const delPizza = (id) => {
        const reservations = reservation.reservation.slice();
        console.log(id);
        for(const µ in reservations){
            if(reservations[µ].id == id){
                console.log(reservations[µ])
                reservations.splice(µ,1);
            }
        }

        reservation.addReservation(reservations);
    }

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
             <td><Button style={{color:"red"}} onClick={() => delPizza(r.id)}>-</Button></td></tr>))}

            <tr>
                <td>Total</td>
                <td>{totalPrix()}€</td>
                <td></td>
            </tr>
            </table>

            <Button> Valider la commande </Button>
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