import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// Bonjour, dans cette partie nous réalisons la création d'un compte utilisateurs
const CreatC = () => {
    const [test, changeTest] = React.useState(false);
    //Fonction pour faire les méthodes postes
    function makePostRequest(url, user ,pass, nom, prenom, age, adresse) {
        let res =  axios.post(url, {
            account: user,
            password: pass,
            nom: nom,
            prenom: prenom,
            age: age,
            adresse: adresse
        });
        return res;
    };

    // Création des variables pour les infos
    let user ='';
    let pass ='';
    let nom = '';
    let prenom = '';
    let age;
    let adresse = '';

    // Sauvegarder les valeurs des champs
    const handleChange = (e) => {
        if(e.target.name === 'user'){
            user = e.target.value;
        }
        if(e.target.name ==='pass'){
            pass = e.target.value;
        };
        if(e.target.name ==='nom'){
            nom = e.target.value;
        };
        if(e.target.name ==='prenom'){
            prenom = e.target.value;
        };
        if(e.target.name ==='age'){
            age = e.target.value;
        };
        if(e.target.name ==='adresse'){
            adresse = e.target.value;
        };
    };

    // Quand on valide le formulaire
    // !!! Attention, si on met un user deja utilisé alors le back bug et crash
    const handleSubmit = (event) =>{
        event.preventDefault();
        makePostRequest('http://localhost:3000/api/v1/signup', user ,pass, nom, prenom, age, adresse).then(async (data) => {
        // Si il y a une erreur dans le formulaire
        if(data.data.name === "MongoError"){
            alert('Erreur')
        } else{
        console.log(data);
        changeTest(true);
        }})
         .catch((err) => alert(err));
         };

    if(test === false){
    return(
        <div>
        {/* Création du formulaire */}
        <form method='POST' >
            <div class="form-group">
                <h1>Création de votre compte personnel</h1><br/>
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

                <div class="row justify-content-center">
                    <div class="col-4">
                        <label> Nom </label>
                        <input
                        class="form-control"
                        name="nom"
                        id="nom"
                        type="text"
                        onChange={handleChange}
                        required />
                    </div>
                    <div class="col-4">
                        <label> Prénom </label>
                        <input
                        class="form-control"
                        name="prenom"
                        id="prenom"
                        type="text"
                        onChange={handleChange}
                        required />
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-4">
                        <label> Age </label>
                        <input
                        class="form-control"
                        name="age"
                        id="age"
                        type="int"
                        onChange={handleChange}
                        required />
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-4">
                        <label> adresse </label>
                        <input
                        class="form-control"
                        name="adresse"
                        id="adresse"
                        type="adresse"
                        onChange={handleChange}
                        required />
                    </div>
                </div>

                <br/>
                <div class="row justify-content-center">
                    <div class="col-4">
                        <Button type="submit" value="Submit" onClick={handleSubmit}>Créer mon compte</Button>
                    </div>
                </div>
            </div>
        </form>
        </div>
    )}
    if(test === true){
        // Si nous venons de créer un compte alors nous affichons :
        return(
        <div>
            <h1>Votre compte à bien été créée</h1>
        </div>
        )
    }
}

export default CreatC;
