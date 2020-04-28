import React, { Component } from 'react'
import { Form, Button, } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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

componentDidMount() {
  axios.get('http://localhost:5000/blog/')
  .then(response => {
    console.log("this is response: " + response)
    if( response.data.length > 0){
      this.setState({ 
        users: response.data.map(user => user.username),
        username: response.data[0].username
      })
    }
 })
 .catch((error)=>{ console.group("this is the error: " + error)
})
} 
  handleInputChange= (e)=> {
      const { name, value } = e.target
      this.setState ({
        [name]: value
      });
    }
         
  onChangeDate =(date)=> {
  this.setState({
    date: date
  });
}
  onSubmit=(e)=> {
        e.preventDefault();
      
        const blog = {
          title: this.state.title,
          blog: this.state.blog,
          username: this.state.username,
          date: this.state.date,
        };
          
      
        console.log(blog);
        
        axios.post('http://localhost:5000/blog/add', blog)
          .then(res => console.log(res.data));

          
        
      }

render() {
  return (
    <Form onClick={this.onSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            name="title" 
            value={this.state.title}
            onChange={this.handleInputChange}
            />
          </Form.Group>
         
      <Form.Group >
      <Form.Label>Username</Form.Label>
      <Form.Control as="select" ref="userInput" required 
        value={this.state.username}
        onChange={this.handleInputChange}
      >
        {
          this.state.users.map((user) =>{
            return <option key={user} value={user}>{user}</option>
          })
        }
       
      </Form.Control>
    </Form.Group>


          <Form.Group>
            <Form.Label>Blog</Form.Label>
            <Form.Control as="textarea" rows="3" 
            name="blog" 
            value={this.state.blog}
            onChange={this.handleInputChange}
             />
          </Form.Group>

          <Form.Group>
            <Form.Label>Date </Form.Label>
            <DatePicker 
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
            
          </Form.Group>

          <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
        )
    }
}
    export default CreateBlog;