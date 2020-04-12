var express = require("express")
var router = express.Router()
var BlogPost = require('./models/BlogPost')

router.get("/", (req, res) => {
    BlogPost.find({})
    .then(response =>{})
    .catch(err => console.log(err))
})


module.exports = router
