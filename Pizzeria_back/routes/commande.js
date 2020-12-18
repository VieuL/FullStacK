//Access the router on Express 
const router = require('express').Router();
//Access the controllers
const controller = require('../controllers/commande');

//CREATE
router.post("/commande", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/commandes", (req, res) => {

    controller.reads(req, res);

});

router.get("/commande/:id", (req, res) => {

    controller.read(req, res);

});

//UPDATE
router.put("/commande/:id", (req, res) => {

    controller.update(req, res);

});


//DELETE
router.delete("/commande/:id", (req, res) => {

    controller.delete(req, res);

});

router.get('/readC/:client', function(req, res) {
	controller.clientCom(req, res);
});


module.exports = router;