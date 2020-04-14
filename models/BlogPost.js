const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    
    title:{ 
        type: String,
        trim: true, 
        index: true, 
        
    },
    body:{
        type: String,
       
    },
    username:{
        type: String,
    },
    datedPosted:{
        type: Date,
        default: new Date()
    },
    image:{
        type: String,
    }
}) ;

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;