import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
    .then(response => {
      console.log(response)
      this.setState({
        blogs: response.data
      })
    })
    .catch((error) => {
    console.log(error)
    })

  }
    
  
  render() {
        return (
          <div>
      <Button color="danger"></Button>
      <Modal>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Do Something</Button>{' '}
          <Button color="secondary">Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
         
         )
    }
}
export default BlogList