import React,  {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';

import ButtonAppBar from './components/navBar';

import Home from './pages/home';
import './App.css';
import List from './pages/list';

const proxy = require("http-proxy-middleware");

async function makeGetRequest(url) {
  let res = await axios.get(url);
  let data = res.data;
  return data;
}
function App() {
  useEffect(() => {
    fetchPizzas();
  }, []);
  const fetchPizzas = () => {
    makeGetRequest('http://localhost:3000/api/v1/pizzas')
    .then(( data ) => addPizzas(data))
    .catch((err) => console.log(err))
  }

  const [pizzas, addPizzas] = React.useState([]);

  return (
    <BrowserRouter>
    <div className="App">
        <ButtonAppBar/>

          <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/carte-pizza">
            <List pizzas={pizzas} setPizzas={addPizzas}/>
          </Route>

          </Switch>
        </div>
    </BrowserRouter>

  );
}

export default App;
