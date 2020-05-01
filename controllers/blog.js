var express = require("express")
var router = express.Router()
var BlogPost = require('../models/BlogPost')

router.get("/", (req, res) => {
    BlogPost.find()
    .then(blogs =>res.json(blogs))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post("/add", (req, res)=>{
    
    const title= req.body.title;
    const blog=req.body.blog;
    const username = req.body.username;
    const date = Date.parse(req.body.date)

    const newBlog = new BlogPost({
        title,
        blog,
        username,
        date
        });
        
        newBlog.save()
        .then(()=> res.json("Blog Added"))
        .catch(err=> res.status(400).json("Error: " + err))
    });

    router.get("/:id", (req, res)=>{
        BlogPost.findById(req.params.id)
        .then(response => res.json(response))
        .catch(err=>res.status(400).json("Error:" + err))
    })

    router.delete("/:id", (req, res)=>{
        BlogPost.findByIdAndDelete(req.params.id)
        .then(()=>res.json("Blog deleted!"))
        .catch(err=>res.status(400).json("Error: " + err));
    })

    router.put("/update/:id", (req, res)=>{
        BlogPost.findById(req.params.id)
        .then(response =>{
            response.title= req.body.title;
            response.blog = req.body.blog;
            response.username = req.body.username;
            response.date = Date.parse(req.body.date)

            response.save()
            .then(() => res.json("Blog Updated"))
            .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err))
    })


module.exports = router
