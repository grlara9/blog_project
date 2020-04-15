const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title:{ type: String, trim: true},
    body:{type: String},
    date:{type: Date},
    },{
        timestamps: true,
    }) ;

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;