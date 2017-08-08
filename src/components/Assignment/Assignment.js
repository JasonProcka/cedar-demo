import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// css
import './Assignment.css'

class Assignment extends Component {
  render () {
    return (
      <div className="assignment">
        <div className="assignment-container">
          <div className="assignment-head">
            <h3>Go ahead and check out your <i>sweet</i> assignment</h3>
          </div>
          <div className="assignment-body">
            <div className="assignment-info">
            <h3>Chemistry Q2 Test</h3>
            <p>Everyone relax and take a deep breath! This will be a piece of cake.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Assignment
