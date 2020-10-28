import React from 'react';

import CardPizza from '../components/cardPizza';


export default function List({pizzas, setPizzas}) {

    console.log(pizzas);
    if (pizzas.length > 0)
        console.log(pizzas[0].title);

  return (
      <div>
          

          <div > <h2>Les pizzas à la carte</h2> </div>
      <div class="container">
      <div class="row" >
          {pizzas.map((value, index) => {
            return <div style={{padding: "0.2em"}}>
            <CardPizza key={index} pizza={value} pizzas={pizzas} setPizzas={setPizzas}/>
            </div>
           })}
      </div>
      </div>

      </div>
  )
}