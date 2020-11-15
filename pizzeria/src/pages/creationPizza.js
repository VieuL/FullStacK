import React,  {useState, useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Select from 'react-select'
import axios from 'axios';

export default function Creation() {
    useEffect(() => {
        fetchIngrediants();
      }, []);

    const handelSummit = (event) =>{
        console.log("Fait")
    }
    const [ingredients, addI] = React.useState([]);

    async function makeGetRequest(url) {
        let res = await axios.get(url);
        let data = res.data;
        return data;
      }

      const fetchIngrediants = () => {
        makeGetRequest('http://localhost:3000/api/v1/ingredients')
        .then(( data ) => addI(data))
        .catch((err) => console.log(err))
      }

      let listeI = [];
      ingredients.map((i) => {listeI.push({'value': i.name, 'label': i.name})});
      console.log(listeI);

    return(
    <form onSubmit = {handelSummit}>
        <div class="form-group">
        <h1>Votre pizza personalism </h1><br/>
        <div class="row justify-content-center">

        <div class="col-4">
            <label> Nom de votre pizza: </label>
            <input
            class="form-control"
            name="nom"
            type="input"
            required />
        </div>
        </div>

        <br/>
        <div class="row justify-content-center">
        <div class="col-4">
            <label> Type de pate</label>
            <select class="form-control">
                <option>Haute</option>
                <option>Base</option>
            </select>
        </div>
        </div>

        <br/>
        <div class="row justify-content-center">
        <div class="col-4">
            <label> ingredients </label>
            <Select options={listeI} isMulti/>
        </div>
        </div>


      </div>
    </form>
    )
}

