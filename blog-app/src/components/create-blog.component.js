import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

class CreateBlog extends React.Component {

constructor(props){
    super(props);
    this.state = {
        title: '',
        blog: '',
        username: '',
        date: new Date,
        users: []
    }
}
    handleInputChange= (e)=> {
      const { name, value } = e.target
      this.setState ({
        [name]: value
      });
    }

    onChangeUsername = (e) => {
        this.setState({
          username: e.target.value
        });
      }
    
      onChangeBlog =(e)=> {
        this.setState({
          blog: e.target.value
        });
      }
    
      onChangeDate =(date)=> {
        this.setState({
          date: date
        });
      }


    render() {
        return (
          <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" onChange/>
          </Form.Group>
         
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Blog</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
        )
    }
}
    export default CreateBlog;