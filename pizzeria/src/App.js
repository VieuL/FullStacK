import React,  {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';
import { fade, makeStyles } from '@material-ui/core/styles';

import ButtonAppBar from './components/navBar';

import Home from './pages/home';
import './App.css';
import List from './pages/list';
import Panier from './pages/panier'
import Creation from './pages/creationPizza';
import Login from './pages/login';
import Logout from './components/logout';
import CreatC from './pages/creationCompte';
import Historique from './pages/historique';

import './App.css';

async function makeGetRequest(url) {
  let res = await axios.get(url);
  let data = res.data;
  return data;
}
function App() {
  useEffect(() => {
    fetchPizzas();
    fetchI();
  }, []);

  // Récupération des pizzas
  const fetchI = () => {
    makeGetRequest('http://localhost:3000/api/v1/ingredients')
    .then((data) => addI(data))
    .catch((err) => null)
  }
  const fetchPizzas = () => {
    makeGetRequest('http://localhost:3000/api/v1/pizzas')
    .then((data) => addPizzas(data))
    .catch((err) => console.log(err))
  }

  // Création des var d'etat
  const [pizzas, addPizzas] = React.useState([]);
  const [reservation, addReservation] = React.useState([]);
  const [I, addI] = React.useState([]);
  const [UserID, addUserId] = React.useState();

  return (
    <BrowserRouter>
    <div className="App">
        <ButtonAppBar nbrR = {reservation} UserID = {UserID}/>

          <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/carte-pizza">
            <List pizzas={pizzas} setPizzas={addPizzas} reservation={reservation} addReservation={addReservation} I = {I} UserID = {UserID}/>
          </Route>

          <Route exact path="/panier">
            <Panier reservation = {reservation} addReservation={addReservation} client={UserID} addUserId={addUserId}/>
          </Route>

          <Route exact path ="/creation">
            <Creation UserID = {UserID} addPizzas={addPizzas}/>
          </Route>

          <Route exact path ="/login">
            <Login UserID = {UserID} addUserId = {addUserId}/>
          </Route>



          <Route exact path ="/logout">
            <Logout UserID = {UserID} addUserId = {addUserId}/>
          </Route>

          <Route exact path ="/creatAcount">
            <CreatC/>
          </Route>


          <Route exact path = "/historique">
            <Historique UserID = {UserID} addUserId = {addUserId}/>
          </Route>


          </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
