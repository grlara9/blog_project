var express = require("express")
var router = express.Router()
const BlogPost = require('../models/BlogPost')


router.get("/", (req, res) => {
    BlogPost.find({})
    .then(response =>{
        var hbs = {obj : response}
        return res.render("index", hbs)
    } )
    .catch(err => console.log(err))
})


module.exports = router

