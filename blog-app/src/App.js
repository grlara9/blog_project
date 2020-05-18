import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component'
import BlogList from './components/blog-list.component'
import CreateBlog from './components/create-blog.component'
import CreateUser from './components/create-user.component'
import Edit from './components/edit-blog.component'
import Register from './components/register-user.component'
import Login from './components/login-user.component'
import NoMatch from './components/no-match.component'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Switch>
          <Route path="/" exact component={BlogList} />
          <Route path="/blog" component={CreateBlog} />
          <Route path="/user" component={CreateUser} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
        </div> 
    </Router>
  );
}

export default App;
