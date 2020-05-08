 const mongoose = require('mongoose')
 const Schema = mongoose.Schema

  const RegisterSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
        minlength: 5
      },
      username: {
          type: String
      }
  })
  const User = mongoose.model('Register', RegisterSchema);
module.exports = User;