// import React from 'react'
import ReactDOM from 'react-dom'
import Tweet from "./Tweet"
var React = window.React = require('react')


export default class TweetsList extends React.Component {
  render () {
    let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)
    return (
      <div>
        <ul className="collection">
          {tweets}
        </ul>
      </div>
    )
  }
}
