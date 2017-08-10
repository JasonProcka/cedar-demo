import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// css
import './BooksIntro.css'

class BooksIntro extends Component {
  render () {
    return (
      <div className="books-intro">
        <h3>All assignments are generated from topics. We'll grab topics from your textbook.</h3>
      </div>
    );
  }
}

export default BooksIntro
