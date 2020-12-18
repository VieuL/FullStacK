import React,  {useState, useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Select from 'react-select'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

async function makeGetRequest(url) {
  let res = await axios.get(url);
  let data = res.data;
  return data;
}


export default function Creation({UserID, addPizzas}) {
    //Récup des ingresiants
    useEffect(() => {
        fetchIngrediants();
      }, []);

      const [test, changeTest] = React.useState(false);
      const fetchPizzas = () => {
        makeGetRequest('http://localhost:3000/api/v1/pizzas')
        .then((data) => addPizzas(data))
        .catch((err) => console.log(err))
      }
    //Fonction reque API création de la pizza
    function makePostRequest(url, name ,typePate, ingredients) {
        let res =  axios.post(url, {
          name: name,
          typePate: typePate,
          ingredients: ingredients,
          carte: false,
          prix: 14,
          image: "https://events.listic.univ-smb.fr/multitemp2015/images/POLYTECH_ANNECY-CHAMBERY.jpg",
          commentaire: 'Pizza perso',
          client: UserID,
        });
        return res;
    };


    //Action a faire quand le formulaire est valider
    const handleSubmit = (event) =>{
      event.preventDefault();
      let listIdIngr = []
      ingr.map(e => (listIdIngr.push(e.value)))
      makePostRequest('http://localhost:3000/api/v1/pizza', nom ,pate, listIdIngr).then(async (data) => {
        // Si il y a une erreur dans le formulaire
        if(data.data.name === "MongoError"){
            alert('Erreur')
        } else{
        fetchPizzas();
        console.log(data);
        changeTest(true);
        }})
         .catch((err) => alert(err));
         };


    // Vari du formu
    let nom = '';
    let pate = ''
    let ingr = [];
    const handleChange = (e) => {
      if(e.target.name === 'nom'){
        nom = e.target.value;
      }
      if(e.target.name === 'pate'){
        pate = e.target.value;
      }
    }

    const handleChangeBis = (e) => {
      console.log(e);
      ingr = e;}
    //Variables pour les ingrédiant
    const [ingredients, addI] = React.useState([]);


      //Req API pour les ingré
      const fetchIngrediants = () => {
        makeGetRequest('http://localhost:3000/api/v1/ingredients')
        .then(( data ) => addI(data))
        .catch((err) => console.log(err))
      }

      //Traitment des ingré pour les mettres dans une liste pour faire la liste dérou
      let listeI = [];
      ingredients.map((i) => {listeI.push({'value': i._id, 'label': i.name})});
      console.log(listeI);
    
    if(test === false){
    return(
    <form>
      <h2>Les pizzas personnalisée sont à 14€</h2>
        <div class="form-group">
        <h1>Votre pizza personnalisée </h1><br/>
        <div class="row justify-content-center">
        <div class="col-4">
            <label> Nom de votre pizza: </label>
            <input
            class="form-control"
            name="nom"
            type="input"
            onChange={handleChange}
            required />
        </div>
        </div>

        <br/>
        <div class="row justify-content-center">
        <div class="col-4">
            <label> Type de pate</label>
            <select onChange={handleChange} name = "pate" class="form-control">
                <option>Haute</option>
                <option>Base</option>
            </select>
        </div>
        </div>

        <br/>
        <div class="row justify-content-center">
        <div class="col-4">
            <label> ingredients </label>
              <Select onChange = {handleChangeBis} options={listeI} isMulti/>
        </div>
        </div>

        <br/>
        <div class="row justify-content-center">
           <div class="col-4">
              {UserID != undefined?
              <Button type="submit" value="Submit" onClick={handleSubmit}>Créer mon compte</Button>:
              <Button variant="success" href = "/login"> Connexion </Button>}
            </div>
        </div>

      </div>
    </form>
    )}

    if(test === true){
      // Si nous venons de créer un compte alors nous affichons :
      return(
      <div>
          <h1>Votre pizza à bien été créée</h1>
      </div>
      )
  }
}

