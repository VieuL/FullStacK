function createClient(req, res) {
    let Clients = require('../models/client');

    let newClient = Clients ({
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        adresse: req.body.adresse

    });

    newClient.save()
    .then((savedClient) => {

        //send back the created Client
        res.json(savedClient);

    }, (err) => {
        res.status(400).json(err)
    });

}

function readClients(req, res) {

    let Clients = require("../models/client");

    Clients.find({})
    .then((Clients) => {
        res.status(200).json(Clients);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readClient(req, res) {

    let Clients = require("../models/Client");

    Clients.findById({_id : req.params.id})
    .then((Client) => {
        res.status(200).json(Client);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateClient(req, res) {

    let Clients = require("../models/client");

    Clients.findByIdAndUpdate({_id: req.params.id},
        {
        adresse : req.body.bio,
    },

        {new : true})
    .then((updatedClient) => {
        res.status(200).json(updatedClient);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteClient(req, res) {

    let Clients = require("../models/client");

    Clients.findOneAndRemove({_id : req.params.id})
    .then((deletedClient) => {
        res.status(200).json(deletedClient);
    }, (err) => {
        res.status(500).json(err);
    });
 }



module.exports.create = createClient;
module.exports.reads = readClients;
module.exports.read = readClient;
module.exports.delete = deleteClient;
module.exports.update = updateClient;

