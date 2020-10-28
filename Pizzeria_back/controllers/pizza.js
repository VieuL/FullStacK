

function createPizza(req, res) {
    let Pizzas = require('../models/pizza');

    let newPizza = Pizzas ({
        name: req.body.name,
        typePate : req.body.typePate,
        prix : req.body.prix,
        ingredients: req.body.ingredients,
        carte: req.body.carte,
        commentaire: req.body.commentaire,
        image: req.body.image
    });

    newPizza.save()
    .then((savedPizza) => {

        //send back the created Pizza
        res.json(savedPizza);

    }, (err) => {
        res.status(400).json(err)
    });

}

function readPizzas(req, res) {

    let Pizzas = require("../models/pizza");

    Pizzas.find({})
    .populate('ingredients')
    .then((Pizzas) => {
        res.status(200).json(Pizzas);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readPizza(req, res) {

    let Pizzas = require("../models/pizza");

    Pizzas.findById({_id : req.params.id})
    .populate('ingredients')
    .then((Pizza) => {
        res.status(200).json(Pizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function addIngredient(req,res) {
     let Pizzas = require("../models/pizza");
     Pizzas.findByIdAndUpdate({_id: req.params.id},
        {ingredients : ingredients.push(req.body.ingredients)
        // req.body.ingredients
    },
    {new : false})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }


function updatePizza(req, res) {

    let Pizzas = require("../models/pizza");

    Pizzas.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        typePate : req.body.typePate,
        prix : req.body.prix,
        commentaire: req.body.commentaire
    },

        {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deletePizza(req, res) {

    let Pizzas = require("../models/pizza");

    Pizzas.findOneAndRemove({_id : req.params.id})
    .then((deletedPizza) => {
        res.status(200).json(deletedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function deleteIngredient(req, res) {
    let Pizzas = require("../models/pizza");
    const idi = req.body.idi;
    console.log(idi);
    let listeIngredients = req.params.ingredients;
    let j = 0;
    for(const i in listeIngredients){
        if (i === idi) {
            listeIngredients.remove(j);
        }
        j++;
    }
    Pizzas.findByIdAndUpdate({_id: req.params.id}, 
        {ingredients: listeIngredients
    },
    {new : true})
    .then((updatedPizza) => {
        res.status(200).json(updatedPizza);
    }, (err) => {
        res.status(500).json(err);
    });
}

module.exports.create = createPizza;
module.exports.reads = readPizzas;
module.exports.read = readPizza;
module.exports.delete = deletePizza;
module.exports.update = updatePizza;
module.exports.add = addIngredient;
module.exports.delI = deleteIngredient;

