// import React from 'react'
var React = window.React = require('react')

import ReactDOM from 'react-dom'
import TweetBox from './TweetBox'
import TweetsList from './TweetsList'
import TweetStore from '../stores/TweetStore'
import TweetActions from '../actions/TweetActions'
import { Link } from 'react-router'


// this getAppState returns the state of app. Thus we can call this function in our this.state and in _onChange's this.setState to set the initial state in every cycle
let getAppState = () => {
  return { tweetsList: TweetStore.getAll() }
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = getAppState()
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount () {
    TweetActions.getAllTweets() // we need to invoke the action at the start
    // Need to use componentDidMount to trigger the live load of tweets when the component is mounted
    // Essentially, "this.onChange" is passed into TweetStore's "addChangeListener" function
    TweetStore.addChangeListener(this._onChange)
  }
  componentWillUnmount(){
    TweetStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    console.log(5, "Main.onChange")
    this.setState(getAppState())
  }
  render () {
    return (
      <div className="container">
        <Link to='/follow'>Who to follow</Link>
        <TweetBox />
        <TweetsList tweets={this.state.tweetsList}/>
      </div>
    )
  }
}
