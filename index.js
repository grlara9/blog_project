var express = require('express')
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
const fileUpload = require('express-fileupload')
require('dotenv').config();


const app = express()
const PORT = 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true} ))

app.use(fileUpload())


//Express will expect all static assets to be in public
app.use(express.static('public'))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully")
})


//const newPostController = require('./controllers/newPost')
//const homeController = require('./controllers/home')
//const storePostController = require('./controllers/storePost')
//const getPostController = require('./controllers/getPost')
const blogController = require('./controllers/blog')

app.use('/blog', blogController)
//app.use(homeController)
//app.get('/posts/new', newPostController)
//app.get('/post/:id', getPostController)
//app.use("post", storePostController)

app.listen(PORT, ()=> {
    console.log("Listening on PORT: " + PORT)
})