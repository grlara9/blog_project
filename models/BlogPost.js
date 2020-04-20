const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title:{ type: String, trim: true},
    blog:{type: String},
    username:{type:String},
    date:{type: Date, default: Date.now}
    },{
        timestamps: true,
    }) ;

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;