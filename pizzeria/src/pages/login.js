import React,{useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import ClientPage from '../pages/clientPage';
import  { Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';



export default function Login(UserID, addUserId){
    let user ='';
    let pass ='';
    const [test, changeTest] = React.useState([false,'']);

    const handleChange = (e) => {
        if(e.target.name === 'user'){
            user = e.target.value;
        }
        if(e.target.name ==='pass'){
            pass = e.target.value;
        };
    };

    function makePostRequest(url, user ,pass) {
        let res =  axios.post(url, {
            account: user,
            password: pass,
        });
        return res;
    };

    const handleSubmit = (event) => {


        event.preventDefault();
        makePostRequest('http://localhost:3000/api/v1/signin',user, pass)
        .then(async (data) => {
           changeTest([true,data.data]);
        })
        .catch((err) => null);
        };
    
    if (test[0] === false){
    return(

        <form method='POST'>
        <div class="form-group">
        <h1>Connexion</h1><br/>
        <div class="row justify-content-center">

        <div class="col-4">
            <label> Nom d'utilisateur </label>
            <input
            class="form-control"
            name="user"
            id="user"
            type="username"
            onChange={handleChange}
            required />
        </div>
        </div>
        <div class="row justify-content-center">

        <div class="col-4">
            <label> Mot de passe </label>
            <input
            class="form-control"
            name="pass"
            type="password"
            id="pass"
            onChange={handleChange}
            required />
        </div>
        </div>
        <br/>
        <div class="row justify-content-center">
        <div class="col-4">
        <input type="submit" value="Submit" onClick={handleSubmit}/>
        </div>
        </div>
        </div>
        </form>
    )}
else{
    UserID.addUserId(test[1])
    console.log(UserID.UserID);
    return <ClientPage nom = {UserID.UserID} />
}
}

