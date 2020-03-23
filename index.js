const express = require('express')

const app = new express()

const PORT = 4000;

//Express will expect all static assets to be in public
app.use(express.static('public'))

app.listen(PORT, ()=> {
    console.log("Listening on PORT: " + PORT)
})