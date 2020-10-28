var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var commS = new Schema({
    pizzas : [{type: Schema.ObjectId, ref:'Pizzas'}],
    client : {type: Schema.ObjectId, ref:'Clients'},
    commentaire : String,

});

module.exports = mongoose.model('Commandes', commS);
