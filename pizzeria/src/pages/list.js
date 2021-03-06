import React from 'react';

import CardPizza from '../components/cardPizza';


export default function List({pizzas, setPizzas, reservation, addReservation, I, UserID}) {

  return (
      <div>


          <div > <h2>Les pizzas à la carte</h2> </div>
      <div class="container">
      <div class="row" >
          {pizzas.map((value, index) => {
            console.log(value);
            if(value.carte === true || value.client === UserID){
            return <div style={{padding: "0.2em"}}>
            <CardPizza key={index} pizza={value} pizzas={pizzas} setPizzas={setPizzas} reservation={reservation} addReservation={addReservation}/>
            </div>
            }
           })}
      </div>
      </div>

      </div>
  )
}