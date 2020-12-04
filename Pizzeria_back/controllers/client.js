function signin(req, res) {

    let Clients = require('../models/client');
	Clients.findOne({username: req.body.account}, function(err, client) {
		if (err) {
            throw err;
		}
		if (client.comparePassword(req.body.password)) {
            req.session.username = req.body.account;
			req.session.logged = true;
			// Nous retournons le nom du client
			res.status(200).json(client._id);
			// res.redirect('/profile');

		}
		else
			res.redirect('/');
	});
}

function signup(req, res) {

    let Clients = require('../models/client');
	let user = new Clients();

	user.username = req.body.account;
	user.password = req.body.password;
    user.nom = req.body.nom;
    user.prenom = req.body.prenom;
    user.age = req.body.age;
    user.adresse = req.body.adresse;

	user.save((err, savedUser) => {

		if (err)
			throw err;

		res.redirect('/');

	});
}

function signout(req, res) {

    req.session.username = "";
	req.session.logged = false;
    res.redirect("/");

}

function profile(req, res) {

    if (req.session.logged)
        res.send("Profile");
    else
        res.redirect('/');

}

module.exports.signin = signin;
module.exports.signup = signup;
module.exports.signout = signout;
module.exports.profile = profile;