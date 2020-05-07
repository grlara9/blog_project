var express = require("express")
var router = express.Router()
const user = require('../models/UserRegister')
const bcrypt = require('bcrypt')

router.post("/register", (req, res)=>{
    let {email, password, username} = req.body
})

module.exports = router