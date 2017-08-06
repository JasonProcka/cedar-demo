import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// css
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className="home">
        <div className="intro-content">
          <h2>Create intelligent assignments with artificial intelligence</h2>
          <Link to="/start">Get Started</Link>
        </div>
      </div>
    );
  }
}

export default Home
