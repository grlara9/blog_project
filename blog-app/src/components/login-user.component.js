import React, {Component} from 'react'
import axios from 'axios'

class Login extends React.Component {
    constructor(props){
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
       e.preventDefault();

       const user = {
         email: this.state.email,
         password: this.state.password
       }

       axios.post('http://localhost:5000/authenticate/login', user)
       .then(response => {
         localStorage.setItem('usertoken', response.data)
         this.props.history.push(`/main`)
       })
}



render() {
    return(
        <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
             
              <button type="submit" className="btn btn-lg btn-primary btn-block">Register!</button>
            </form>
          </div>
        </div>
      </div>
    )
}
}
export default Login