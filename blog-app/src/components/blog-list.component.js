import React, { Component } from 'react';
import axios from 'axios';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Blog = props =>{
  
}

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
    axios.delete('http://localhost:5000/blog/' + id)
    .then(promise => console.log(promise));

    this.setState({
      blogs: this.state.blogs.filter(blog=> blog._id ==! id)
    })
  }

  blogsLists =()=> {
    return this.state.blogs.map(blogg => {
      return <Blog blog={blogg} deleteBlog={this.deleteBlog} key={blogg._id} />
    })
  }
    
  
  render() {
        return (
        {this.blogsLists()}
         )
    }
}
export default BlogList