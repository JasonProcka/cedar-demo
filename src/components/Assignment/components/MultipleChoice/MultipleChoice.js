import React, { Component } from 'react'
// css
import './MultipleChoice.css'

class MultipleChoice extends Component {
  render () {
    return (
      <div className="multiple-choice">
        <div className="component-number">{this.props.componentNumber}. </div>
        <div className="mc-question">{this.props.question}</div>
        <div className="mc-options">
          <ol type="A">
            {this.props.options.map((option, index) =>
            <li key={index}>
              {option}
            </li>)}
          </ol>
        </div>
      </div>
    );
  }
}

export default MultipleChoice
