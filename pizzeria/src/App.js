import React,  {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';

import ButtonAppBar from './components/navBar';

import Home from './pages/home';
import './App.css';
import List from './pages/list';
import Panier from './pages/panier'
import Creation from './pages/creationPizza';
import Login from './pages/login';


async function makeGetRequest(url) {
  let res = await axios.get(url);
  let data = res.data;
  return data;
}
function App() {
  useEffect(() => {
    fetchPizzas();
  }, []);
  // Récupération des pizzas
  const fetchPizzas = () => {
    makeGetRequest('http://localhost:3000/api/v1/pizzas')
    .then((data) => addPizzas(data))
    .catch((err) => console.log(err))
  }

  // Création des var d'etat
  const [pizzas, addPizzas] = React.useState([]);
  const [reservation, addReservation] = React.useState([]);

  return (
    <BrowserRouter>
    <div className="App">
        <ButtonAppBar nbrR = {reservation}/>

          <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/carte-pizza">
            <List pizzas={pizzas} setPizzas={addPizzas} reservation={reservation} addReservation={addReservation}/>
          </Route>

          <Route exact path="/panier">
            <Panier reservation = {reservation} addReservation={addReservation}/>
          </Route>

          <Route exact path ="/creation">
            <Creation />
          </Route>

          <Route exact path ="/login">
            <Login/>
          </Route>

          </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
