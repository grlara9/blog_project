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
  axios.get('http://localhost:5000/user/')
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

    onChangeUsername =(e)=> {
      this.setState({
        username: e.target.value
      })
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
          date: this.state.date
        };
          
      
        console.log("Data sent was: " + blog);
        
        axios.post('http://localhost:5000/blog/add', blog)
          .then(res => console.log(res.data));

          
        
      }

render() {
  return (
    <form onClick={this.onSubmit}>

      <div className="form-group">
        <label>Title: </label> 
      <input type="text" 
      name="title" 
      value={this.state.title}
      onChange={this.handleInputChange}/>
      </div>

      <div className="form-group">

<label>Blog: </label>
  <textarea type="text" className="form-control" name="blog" value={this.state.blog} onChange={this.handleInputChange} />

</div>

<div className="form-group">

    <label>
          Choose username:
          </label>
          <select ref="userInput" required className="form-control" value={this.state.username} 
          onChange={this.onChangeUsername}>
          {
            this.state.users.map(user =>{
              return <option key={user} value={user}>
              {user}
            </option>
          })
        }
        </select>
        </div>



    <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

    <div className="form-group">
          <input type="submit" value="Create Blog" className="btn btn-primary" />
        </div>
  </form>
        )
    }
}
    export default CreateBlog;