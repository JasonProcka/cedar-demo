import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// css
import './Start.css'

const subjects = ['English', 'Chemistry', 'English', 'Algebra', 'Physics', 'Astronomy']

class Start extends Component {
  render () {
    return (
      <div className="start">
        <div className="options-container">
          <div className="options-head">
            <h3>Choose one <span>subject</span></h3>
          </div>
          <div className="options-body">
            <div className="options-search">
              <input placeholder="Browse subjects..." type="text" />
            </div>
            <ul className="subjects">
              {subjects.map((subject, index) => <li key={index}>{subject}</li>)}
            </ul>
          </div>
          <div className="options-actions">
            <Link className="to-topic" to="/topic">Done</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Start
