import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component'
import BlogList from './components/blog-list.component'
import CreateBlog from './components/create-blog.component'
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={BlogList} />
        <Route path="/blog" component={CreateBlog} />
        </div>
    </Router>
  );
}

export default App;
