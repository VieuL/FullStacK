function createIngredient(req, res) {
    let Ingredients = require('../models/ingredient');

    let newIngredient = Ingredients ({
        name: req.body.name,
        bio: req.body.bio,
        prix: req.body.prix
    });

    newIngredient.save()
    .then((savedIngredient) => {

        //send back the created Ingredient
        res.json(savedIngredient);

    }, (err) => {
        res.status(400).json(err)
    });

}

function readIngredients(req, res) {

    let Ingredients = require("../models/ingredient");

    Ingredients.find({})
    .then((Ingredients) => {
        res.status(200).json(Ingredients);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readIngredient(req, res) {

    let Ingredients = require("../models/ingredient");

    Ingredients.findById({_id : req.params.id})
    .then((Ingredient) => {
        res.status(200).json(Ingredient);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateIngredient(req, res) {

    let Ingredients = require("../models/ingredient");

    Ingredients.findByIdAndUpdate({_id: req.params.id}, 
        {
        bio : req.body.bio,
    },

        {new : true})
    .then((updatedIngredient) => {
        res.status(200).json(updatedIngredient);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteIngredient(req, res) {

    let Ingredients = require("../models/ingredient");

    Ingredients.findOneAndRemove({_id : req.params.id})
    .then((deletedIngredient) => {
        res.status(200).json(deletedIngredient);
    }, (err) => {
        res.status(500).json(err);
    });
 }



module.exports.create = createIngredient;
module.exports.reads = readIngredients;
module.exports.read = readIngredient;
module.exports.delete = deleteIngredient;
module.exports.update = updateIngredient;

