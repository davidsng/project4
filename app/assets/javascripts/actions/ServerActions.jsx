import AppDispatcher from '../dispatcher'
import ActionTypes from '../constants'

// These server actions will dispatch specific actions when called by the API. The "acton type" each one dispatches will get picked up by the switch statements in the Store files. The stores have already registered with the Dispatcher to listen to these "instructions"
export default {
  receivedTweets(rawTweets) {
    console.log(3, 'ServerActions.receivedTweets');
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets: rawTweets
    })
  },
  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet: rawTweet
    })
  },
  receivedUsers(rawUsers) {
    console.log('ServerActions.receivedUsers');
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers: rawUsers
    })
  },
  receivedOneFollower(rawFollower) {
    console.log('ServerActions.receivedOneFollower')
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
      rawFollower: rawFollower
    })
  }

}
