const BlogPost = require('../models/BlogPost')

module.exports = async (req,res)=>{
    const blogpost = BlogPost.findById(req.params.id)
    res.render('post', {
        blogpost
    })
}