import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// css
import './Start.css'

const subjects = ['English', 'Chemistry', 'English', 'Algebra', 'Physics', 'Astronomy', 'Geology', 'Botany', 'Biology', 'Environmental Science']

class Start extends Component {
  render () {
    return (
      <div className="start">
        <div className="options-container">
          <div className="options-head">
            <h3>Start by choosing <span>Chemistry</span> as your subject <i className="em em-smile"></i></h3>
          </div>
          <div className="options-body">
            <div className="options-search">
              <input placeholder="Browse subjects..." type="text" />
            </div>
            <form>
              <ul className="subjects">
                {subjects.map((subject, index) =>
                <li key={index}>
                  <label htmlFor={'subject-'+index}>{subject}</label>
                  <input className="subject-check" name="subject" type="checkbox" value={'subject-'+index} id={'subject-'+index} />
                </li>)}
              </ul>
            </form>
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
