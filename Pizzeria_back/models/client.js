var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


let clientSchema = new Schema({
  nom : String,
  prenom : String,
  age : Number,
  adresse : String,
  username : {
    type : String,
    index : true,
    unique : true
  },
  password : String,

});

clientSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password'))
  	return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err)
    	return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err)
      	return next(err);
      user.password = hash;
      next();
    });
  });
});

clientSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Clients', clientSchema);
