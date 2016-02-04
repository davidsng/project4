// import React from 'react'
var React = window.React = require('react')

import ReactDOM from 'react-dom'

export default class Tweet extends React.Component {
  render () {
    return (
  <li className="collection-item avatar">
    <img className="circle" src={this.props.gravatar} />
    <span className="title">{this.props.name}</span>
    <time>{this.props.formattedDate}</time>
    <p>{this.props.body}</p>
    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
  </li>
    )
  }
}
