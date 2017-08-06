import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Start from '../Start/Start'

class Main extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/start" component={Start} />
        </Switch>
      </main>
    );
  }
}

export default Main
