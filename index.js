const express = require('express')
const path = require('path')

const app = new express()

const PORT = 4000;

//Express will expect all static assets to be in public
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})
app.get('/about', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})
app.get('/about', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})
app.get('/about', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})
app.listen(PORT, ()=> {
    console.log("Listening on PORT: " + PORT)
})