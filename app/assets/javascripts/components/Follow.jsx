// import React from 'react'
var React = window.React = require('react')

import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import {Link} from 'react-router'

// a react component in a flux app always reads its state from the store

let getAppState = () => {
  return { users: UserStore.getAll() }
}

// we need to set the state inside the class constructor first
export default class Follow extends React.Component {
  constructor(props) {
    super(props)
    this.state = getAppState()
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount () {
    // Need to use componentDidMount to trigger the live load of users when the component is mounted
    // Essentially, "this.onChange" is passed into UserStore's "addChangeListener" function
    UserActions.getAllUsers()
    UserStore.addChangeListener(this._onChange)
  }
  componentWillUnmount(){
    UserStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    this.setState(getAppState())
  }
  followUser(userId) {
    UserActions.followUser(userId)
    toastr.success('You are now following a new user!')
  }
  followClasses (following) {
    return "secondary-content btn-floating " + (following ? "green" : "grey")
  }

  render () {
    let users = this.state.users.map(user => {
      return (
        <li key={user.id} className="collection-item avatar">
          <img src={user.gravatar} className="circle" />
          <span className="title">{user.name}</span>
          <a className={this.followClasses(user.following)}
            onClick={this.followUser.bind(this, user.id)}>
            <i className="material-icons">person_pin</i>
          </a>
        </li>
      )
    })
    return (
      <div>
        <Link to="/">Back to main page</Link>
        <h3>Who to follow</h3>
        <ul className="collection">{users}</ul>
      </div>
    )
  }
}
