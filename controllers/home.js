const BlogPost = require('../models/BlogPost')

module.exports= (req, res) =>{
    const blogposts = BlogPost.find()
    console.log(blogposts)
    var df = {ics: blogposts}

    res.render("index", df)
}

