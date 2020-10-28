
function createCommande(req, res) {
    let Commandes = require("../models/commande");

    let newCommande = Commandes ({
        pizzas: req.body.pizzas,
        client: req.body.client,
        commentaire: req.body.commentaire
    });
    newCommande.save()
    .then((savedCommande) => {

        //send back the created Pizza
        res.json(savedCommande);

    }, (err) => {
        res.status(400).json(err)
    })
};

function readCommandes(req, res) {

    let Commandes = require("../models/commande");


    Commandes.find({})
    .populate('pizzas')
    .populate('client')
    .then((Commande) => {
        res.status(200).json(Commande);
    }, (err) => {
        res.status(500).json(err);
    });
 };

 function readCommande(req, res) {

    let Commandes = require("../models/commande");

    Commandes.findById({_id : req.params.id})
    .populate('pizzas')
    .populate('client')
    .then((Commande) => {
        res.status(200).json(Commande);
    }, (err) => {
        res.status(500).json(err);
    });
 };

 function updateCommande(req, res) {

    let Commandes = require("../models/commande");

    Commandes.findByIdAndUpdate({_id: req.params.id},
        {pizzas : req.body.pizzas,
        client : req.body.client,
        commentaire : req.body.commentaire,
    },
        {new : true})

    .then((updateCommande) => {
        res.status(200).json(updateCommande);
    }, (err) => {
        res.status(500).json(err);
    });
};

function deleteCommande(req, res) {

    let Commandes = require("../models/commande");

    Commandes.findOneAndRemove({_id : req.params.id})
    .then((deleteCommande) => {
        res.status(200).json(deleteCommande);
    }, (err) => {
        res.status(500).json(err);
    });
 };




 module.exports.create = createCommande;
 module.exports.reads = readCommandes;
 module.exports.read = readCommande;
 module.exports.delete = deleteCommande;
 module.exports.update = updateCommande;
