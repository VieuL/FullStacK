var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ingredientS = new Schema({
  name : String,
  bio : Boolean,
  prix: Number
});

module.exports = mongoose.model('Ingredients', ingredientS);
