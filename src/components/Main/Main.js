import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Start from '../Start/Start'
import Assignment from '../Assignment/Assignment'

class Main extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/start" component={Start} />
          <Route path="/assignment" component={Assignment} />
        </Switch>
      </main>
    );
  }
}

export default Main

// <Route path="/slide-2" component={SlideTwo} />
// <Route path="/slide-2" component={Topics} />
// <Route path="/slide-2" component={SlideThree} />
// <Route path="/slide-2" component={Proportions} />
// <Route path="/slide-2" component={SlideFour} />
// <Route path="/slide-2" component={Assignment} />
// <Route path="/slide-2" component={LastSlide} />
// <Route path="/slide-2" component={Feedback} />
