import React, { Component } from 'react'

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
    onChangeUsername = (e) => {
        this.setState({
          title: e.target.value
        });
      }
    
      onChangeDescription =(e)=> {
        this.setState({
          blog: e.target.value
        });
      }
    
      onChangeDuration=(e)=>  {
        this.setState({
          username: e.target.value
        });
      }
    
      onChangeDate =(date)=> {
        this.setState({
          date: date
        });
      }


    render() {
        return (
            <div>
                this is the create componet
            </div>
        )
    }
}
    export default CreateBlog;