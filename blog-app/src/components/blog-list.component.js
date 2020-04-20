import React, { Component } from 'react';
import axios from 'axios';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BlogList extends React.Component {
  constructor(props){
    super(props);
      //.deleteBlog = this.deleteBlog.bind(this);

      this.state ={
        blogs: []
      }
  }  
  componentDidMount() {
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

  deleteBlog(id) {
    axios.delete('http://localhost:5000/blog/' + id)
    .then(promise => console.log(promise));

    this.setState({
      blogs: this.state.blogs.filter(blog=> blog._id ==! id)
    })
  }
    
  
  render() {
        return (
          <div>
            <div className="modal" >
                <div className="modal-dialog" >
              <div className="modal-content">
                <div className="modal-header">
        <h5 className="modal-title">{this.props.blogs.title}</h5>
                  <button type="button" className="close" >
                    <span ></span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" >Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
          </div>
        </div>
          </div>
         
         )
    }
}
export default BlogList