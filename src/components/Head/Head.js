import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// css
import './Head.css'
// images
import CedarLogo from '../../images/cedar-logo.png'

class Head extends Component {
  render () {
    return (
      <div className="head">
        <img className="cedar-tree" src={CedarLogo} alt="" /><Link className="cedar-logo" to="/">Cedar</Link>
      </div>
    );
  }
}

export default Head
