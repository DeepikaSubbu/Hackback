var express=require('express');
var router =express.Router();
var pizzamodule = require('../modules/pizzamodule')

router.post('/signup', pizzamodule.signup);
router.post('/signin', pizzamodule.signin);
module.exports = router;