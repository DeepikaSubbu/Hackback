const mongo=require('../shared/connect');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



exports.signup =async(req,res,next) => {
    const existUser = await mongo.db.collection("pizzadelivery").findOne({email: req.body.email})
    if(existUser)
    return res.status(400).send({msg:"Email already exists"})

    const salt = await bcrypt.genSalt(8);
    req.body.password = await bcrypt.hash(req.body.password, salt);


    var data = await mongo.db.collection("pizzadelivery").insertOne(req.body);
    res.send(data);
}


exports.signin = async(req, res, next) => {

const existUser = await mongo.db.collection("pizzadelivery").findOne({email: req.body.email})
if(!existUser) return res.status(400).send({msg:"Email is not exists"})

const isValid = await mongo.db.collection("pizzadelivery").findOne({password: req.body.password})
if(!isValid) return res.status(400).send({msg:"Incorrect password"})


// const isValid = await bcrypt.compare(req.body.password, existUser.password)
// if(!isValid) return res.status(400).send({msg:"Incorrect password"})


const token = jwt.sign(existUser, "HACK", {expiresIn:"3hr"});
res.send(token);

}