import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'

class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    onChangeUSername = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onSubmit =(e) => {
        e.preventDefault();
        const user = {
          username: this.state.username
        }
        
        axios.post('http://localhost:5000/user/add', user)
          .then(res => console.log(res.data));
    
        this.setState({
          username: ''
        })
      }
    render() {
        return (
            <Form  onClick={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" 
                    value={this.state.username}
                    onChange={this.onChangeUSername}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    } 
} 
export default CreateUser