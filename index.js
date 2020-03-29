const express = require('express')
var exphbs = require("express-handlebars")
const path = require('path')
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
const app = new express()

const PORT = 4000;

const BlogPost = require('./models/BlogPost')

mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true })

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true} ))

//Express will expect all static assets to be in public
app.use(express.static('public'))

app.get('/', (req, res) =>{
    const blogposts = BlogPost.find({})
    console.log("this is the result:" + blogposts)
   res.render('index', {blogposts: blogposts})
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/post', (req,res)=>{
    res.render('post')
})
app.get('/contact', (req,res)=>{
    res.render('contact')
})
app.get('/posts/new', (req, res)=>{
    res.render('create')
})
app.post('/posts/store', (req, res)=>{
    console.log(req.body)
    BlogPost.create(req.body, (error, blogpost) => {
    res.redirect('/')
    })
})
app.listen(PORT, ()=> {
    console.log("Listening on PORT: " + PORT)
})