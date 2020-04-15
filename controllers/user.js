var express = require("express")
var router = express.Router()
var UserPost = require('../models/UserPost')

router.get("/", (req, res) =>{
    UserPost.find()
    .then(users=> res.json(users))
    .catch(err => res.status(400).json("Error:" + err));
})

router.post("add", (req, res)=>{
    const username = req.body.username;
    
    const newUser = new UserPost({username});

    newUser.save()
    .then(()=> res.json("User Added!"))
    .catch(err => res.status(400).json("Error: " + err));
})
module.exports = router