const express=require("express");
const cors = require("cors");
const mongo = require('./shared/connect');
const registerRouter = require('./routes/pizza')



const app = express();
app.use(cors());

app.use(express.json());
mongo.connect();

app.use('/register', registerRouter);


app.listen(3001);



