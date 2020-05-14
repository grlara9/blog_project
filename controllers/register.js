var express = require("express")
var router = express.Router()
const User = require('../models/UserRegister')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

router.post("/register",(req, res) => {
  let { email, password, confirmPass } = req.body;

  if (!email || !password || !confirmPass)
    return res.status(400).json({ msg: "Not all fields have been entered." });
  if (password.length < 5)
    return res.status(400).json({ msg: "The password needs to be at least 5 characters long." });
  if (password !== confirmPass)
    return res.status(400).json({ msg: "Enter the same password twice for verification." });

    User.findOne({email: email})
      .then(user => {
        if (!user) {
          bcrypt.hash(password, 10, (err, hash) => {
          password = hash

          const newUser = new User({
            email,
            password
          })
          newUser.save()
              .then(()=> res.json("Registered! "))
              .catch(err => res.status(400).json("Error: " + err))
             })

          } else {
            res.json({ error: 'User already exists' })
          }
        })

        .catch(err => {res.send('error: ' + err)})
      })

router.post("/login", (req, res) =>{
  const { email, password} = req.body
    User.findOne({
      email: email
    }).then(user =>{
      console.log(user)
      if(user){
        if(bcrypt.compare(password, user.password)){

         const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

          res.json({token, 
            user: {
              id: user._id,
              email: user.email
            },
            });
        }else{
          res.json({error: "User combination incorrect"})
        }
      }else{
        res.json({error: "User combination incorrect"})
      }
    })
    .catch(err => {
      res.json("Error: " + err)
    })
  })

  
module.exports = router
