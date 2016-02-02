import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Index from './components/Index'
import Follow from './components/Follow'
import createBrowserHistory from 'history/lib/createBrowserHistory';


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

// var routes = (
//   <Route name='app' path='/' handler={require('./components/Index')}>
//     <Route name='follow' handler={require('./components/Follow')} />
//   </Route>
// )
//
// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, document.getElementById('react'))
// })

// let documentReady = () => {
//   Router.run(routes, Router.HistoryLocation, function (Handler) {
//     ReactDOM.render(
//       <Router>
//         <Route component={App}>  // we need to insert this as react router requires another top level view component to manage which other component should be mounted based on the URL
//           <Route path='/' component={Index} />
//           <Route path='/follow' component={Follow} />
//         </Route>
//       </Router>
//       , document.getElementById('react'))
//     })}
//
//
// $(documentReady)


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
