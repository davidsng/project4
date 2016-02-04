import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Index from './components/Index'
import Follow from './components/Follow'
import createBrowserHistory from 'history/lib/createBrowserHistory';

window.React = React

// if the route is '/', the component <Index /> will be inserted here

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

let documentReady = () => {
    ReactDOM.render(
      <Router history={createBrowserHistory()}>
        <Route component={App}>  // we need to insert this as react router requires another top level view component to manage which other component should be mounted based on the URL
          <Route path='/' component={Index} history={browserHistory}/>
          <Route path='/follow' component={Follow} history={browserHistory} />
        </Route>
      </Router>
      , document.getElementById('react'))
  }

$(documentReady)
