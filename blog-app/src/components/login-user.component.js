import React, {Component} from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(){
        super(props)
        this.state ={
            email: '',
            password: ''
        }
    }
    onChange = (e)=> {
        const { name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5000/authenticate/login', user)
        .then(response => {
        localStorage.setItem('usertoken', response.data)
        if (response){
            this.props.history.push('/')
        }
        })
        .catch(err => {console.log(err)})
}
    
}