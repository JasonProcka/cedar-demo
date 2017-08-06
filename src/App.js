import React, { Component } from 'react'
import './App.css'
//Components
import Head from './components/Head/Head'
import Main from './components/Main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Main />
      </div>
    );
  }
}

export default App
