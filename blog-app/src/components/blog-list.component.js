import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


const Blog = props =>(
  <div className="blog-post">
  <h2 className="blog-post-title">{props.blog.title}</h2>
<p className="blog-post-meta">{props.blog.date} by <a href="#">{props.blog.username}</a></p>
  <p>{props.blog.blog}</p>
  <Link to={"/edit/"+props.blog._id} >Edit</Link><a href="/"><button onClick={() => { props.deleteBlog(props.blog._id) }}>delete</button></a>

  </div>
)

class BlogList extends React.Component {
  constructor(props){
    super(props);

      this.state ={
        blogs: []
      }
  }  
  componentDidMount =() =>{
    axios.get('http://localhost:5000/blog/')
    .then(promise => {
      //console.log(promise)
      this.setState({
        blogs: promise.data
      })
    })
    .catch((error) => {
    console.log(error)
    })

  }

  deleteBlog = (id) => {
    axios.delete('http://localhost:5000/blog/'+id)
    .then(promise => console.log(promise));

    this.setState({
      blogs: this.state.blogs.filter(blog => blog._id ==! id)
    })
  }

  blogsLists = () => {
    return this.state.blogs.map(blogg => {
      return <Blog blog={blogg} deleteBlog={this.deleteBlog} key={blogg._id} />
    }
      )}
    
  
  render() {
        return (
    <React.Fragment>

      {this.blogsLists()}
    </React.Fragment>
       
       
         )
    }
}
export default BlogList