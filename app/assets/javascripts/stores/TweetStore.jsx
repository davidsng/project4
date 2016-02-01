import AppDispatcher from '../dispatcher'
import ActionTypes from '../constants'
import { EventEmitter } from 'events'

let _tweets = []
const CHANGE_EVENT = 'CHANGE'

class TweetEventEmitter extends EventEmitter {
  getAll() {
      return _tweets.map(tweet => {
        // adds a new key value pair to each tweet for the time of the tweet
        tweet.formattedDate = moment(tweet.created_at).fromNow()
        return tweet
      })
  }
  emitChange() {
    this.emit(CHANGE_EVENT)
  }
  addChangeListener(callback) {
    // the view will supply the callback. This line says "we are listening to your change event, and here is what I want to do when that event happens"
    this.on(CHANGE_EVENT, callback)
  }
  removeChangeListener(callback) {
    // the view will supply the callback. This line says "we are listening to your change event, and here is what I want to do when that event happens"
    this.removeListener(CHANGE_EVENT, callback)
  }
}

// TweetStore is an instance of the new TweetEventEmitter class
let TweetStore = new TweetEventEmitter()

// the store needs to register with the dispatcher to tell the dispatcher that it is interested in the data it is dispatching
AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      console.log(4, 'TweetStore')
      _tweets = action.rawTweets
      TweetStore.emitChange()
      break;
    case ActionTypes.RECEIVED_ONE_TWEET:
      console.log('received one tweet working')
      _tweets.unshift(action.rawTweet)
      TweetStore.emitChange()
    default:
      // no op
  }
})

export default TweetStore
