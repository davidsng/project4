// import React from 'react'
import ReactDOM from 'react-dom'
import TweetActions from '../actions/TweetActions'
var React = window.React = require('react')


export default class TweetBox extends React.Component {
  sendTweet() {
    event.preventDefault()
    TweetActions.sendTweet(this.refs.tweetTextArea.value)
    this.refs.tweetTextArea.value = ''
    toastr.success('You just tweeted!')
  }

  render () {
    return (
      <div className="row">
        <form onSubmit={this.sendTweet.bind(this)}>
          <div className="input-field">
            <textarea ref="tweetTextArea" className="materialize-textarea" />
            <label>Say something!</label>
            <button type="submit" className="btn right">Post</button>
          </div>
        </form>
      </div>
    )
  }
}
