var express = require("express")
var router = express.Router()
const user = require('../models/UserRegister')
const bcrypt = require('bcrypt')

router.post("/register", (req, res)=>{
    let {email, password, username} = req.body

    if (!email || !password || username)
    return res.status(400).json({msg: "Fill all fields!"})

    if(password.length > 5)
    return res.status(400).json({msg: "Password must be 5 character in length"})

    if (password !== confirmPassword)
      return res.status(400).json({ msg: "Enter the same password twice for verification." });

})

module.exports = router