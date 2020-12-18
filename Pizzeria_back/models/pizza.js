var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var pizzaS = new Schema({
  name : String,
  typePate : String,
  ingredients : [{type: Schema.ObjectId, ref:"Ingredients"}],
  prix : Number,
  carte : Boolean,
  commentaire : {type: String, default: 'Pizza personalisée'},
  image : String,
  client : String,

});
module.exports = mongoose.model('Pizzas', pizzaS);
 