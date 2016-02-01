import AppDispatcher from '../dispatcher'
import ActionTypes from '../constants'
import AppEventEmitter from './AppEventEmitter'

let _users = []
let _followedIds = []

class UserEventEmitter extends AppEventEmitter {
  getAll() {
      return _users.map(user => {
        // we need to figure out whether the user being followed
        user.following = _followedIds.indexOf(user.id) >= 0
        // user.following will be true if the user.id is in the _followedIds array
        return user
      })
  }
}

// UserStore is an instance of the new TweetEventEmitter class
let UserStore = new UserEventEmitter()

// the store needs to register with the dispatcher to tell the dispatcher that it is interested in the data it is dispatching
AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_USERS:
      _users = action.rawUsers
      UserStore.emitChange()
      break
    case ActionTypes.RECEIVED_ONE_FOLLOWER:
      _followedIds.push(action.rawFollower.user_id)
      UserStore.emitChange()
      break

    default:
      // no op
  }
})

export default UserStore
