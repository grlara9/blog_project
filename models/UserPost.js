const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserPostSchema = new Schema({
        username:{ type: String, trim: true, unique: true, minlength: 3},
        
    },{
        timestamps: true,
    }) ;

const UserPost = mongoose.model('User', UserPostSchema);
module.exports = UserPost;