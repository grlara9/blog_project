var express = require("express")
var router = express.Router()
var BlogPost = require('../models/BlogPost')

router.get("/", (req, res) => {
    BlogPost.find()
    .then(blogs =>res.json(blogs))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post("/add", (req, res)=>{
    //let image = req.files.image;
    //image.mv(path.resolve(__dirname, '..','public/img', image.name), async (error)=> 
    //{
    const title=req.body.title;
    const body=req.body.body;
    console.log("value for title and body is: " + title + body)
    const newBlog = new BlogPost({
        title,
        body,
        //image: '/img/'+ image.name
        });
        
        newBlog.save()
        .then(()=> res.json("Blog Added"))
        .catch(err=> res.status(400).json("Error: " + err))
    });



module.exports = router
