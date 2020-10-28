var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var clientSchema = new Schema({
  nom : String,
  prenom : String,
  age : Number,
  adresse : String
});

module.exports = mongoose.model('Clients', clientSchema);
