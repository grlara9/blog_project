import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand" href="index.html">Soccer Blog</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link">All Blogs</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Add Blog</Link>
            </li>
            <li>
              <Link to="/user" className="nav-link">Add User</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar;