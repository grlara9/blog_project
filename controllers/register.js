var express = require("express")
var router = express.Router()
const User = require('../models/UserRegister')
const bcrypt = require('bcrypt')

router.post("/register",(req, res) => {
    try {
      let { email, password, passwordCheck, username } = req.body;
  
      // validate
  
      if (!email || !password || !passwordCheck)
        return res.status(400).json({ msg: "Not all fields have been entered." });
      if (password.length < 5)
        return res
          .status(400)
          .json({ msg: "The password needs to be at least 5 characters long." });
      if (password !== passwordCheck)
        return res
          .status(400)
          .json({ msg: "Enter the same password twice for verification." });
  
      const existingUser =User.findOne({ email: email });
      console.log(existingUser)
      if (existingUser)
        return res
          .status(400)
          .json({ msg: "An account with this email already exists." });
  
      
  
      const salt = bcrypt.genSalt();
      const passwordHash =  bcrypt.hash(password, salt);
  
      const newUser = new User({
        email,
        password: passwordHash,
        displayName,
      });
      const savedUser =  newUser.save();
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ err });
    }
  });

module.exports = router