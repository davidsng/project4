import AppDispatcher from '../dispatcher'
import ActionTypes from '../constants'
import AppEventEmitter from './AppEventEmitter'

let _tweets = []

class TweetEventEmitter extends AppEventEmitter {
  getAll() {
      return _tweets.map(tweet => {
        // adds a new key value pair to each tweet for the time of the tweet
        tweet.formattedDate = moment(tweet.created_at).fromNow()
        return tweet
      })
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
