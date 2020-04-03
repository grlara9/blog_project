const express = require('express')
var exphbs = require("express-handlebars")

const bodyParser= require('body-parser')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')

const app = express()
const PORT = 4000;


const BlogPost = require('./models/BlogPost')

//Express will expect all static assets to be in public
app.use(express.static('public'))

mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true })


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true} ))

app.use(fileUpload())


// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')


app.get('/', homeController)
app.get('/posts/new', newPostController)

app.listen(PORT, ()=> {
    console.log("Listening on PORT: " + PORT)
})