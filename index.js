var express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();


const app = express()
const PORT = 5000;

app.use(cors());
app.use(express.json());


//Express will expect all static assets to be in public
app.use(express.static('public'))

 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully")
})

 
const blogController = require('./controllers/blog')
const userController = require('./controllers/user')

app.use('/blog', blogController)
app.use('/user', userController)


app.listen(PORT, ()=> {
    console.log("Listening on PORT: " + PORT)
})