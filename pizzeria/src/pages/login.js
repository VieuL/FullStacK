import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
async function makePostRequest(url, user ,pass) {

    let res = await axios.post(url, {
        username: user,
        password: pass,
    });

    return res;

}
export default function Login(){
    let user ='';
    let pass ='';
    const handleChange = (e) => {
        if(e.target.name === 'user'){
            user = e.target.value;
        }
        if(e.target.name ==='pass'){
            pass = e.target.value;
        };
    };

    const handleSubmit = (event) => {
            event.preventDefault();
            makePostRequest('http://localhost:3000/api/v1/signin',user, pass);
          };

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
    )
}

