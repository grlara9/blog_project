var express = require("express")
var router = express.Router()
var BlogPost = require('../models/BlogPost')
//const path = require('path')

router.post("/create",(req, res)=>{

    //let image = req.files.image;

    //image.mv(path.resolve(__dirname, '..','public/img', image.name), async (error)=> 
    //{

        BlogPost.create({
            title:req.body.title,
            body:req.body.title, 
            //image: '/img/'+ image.name
        }).then(blog => {
            console.log(blog)
            console.log("success")
            res.redirect('/')

        })
        .catch(err=> console.log(err))
        })
    //})

    module.exports = router
    