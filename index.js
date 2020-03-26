const express = require('express')
var exphbs = require("express-handlebars")
const path = require('path')

const app = new express()

const PORT = 4000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Express will expect all static assets to be in public
app.use(express.static('public'))

app.get('/', (req, res) =>{
   res.render('index')
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

app.listen(PORT, ()=> {
    console.log("Listening on PORT: " + PORT)
})