import TweetBox from './components/TweetBox'
import TweetsList from './components/TweetsList'

// let mockTweets = [
//   { id: 1, name: 'David 1', body: 'I am happy'},
//   { id: 2, name: 'David 2', body: 'I am joyful'},
//   { id: 3, name: 'David 3', body: 'I am at peace'}
// ]

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tweetsList: [] }
  }
  formattedTweets(tweetsList) {
    let formattedList = tweetsList.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow()
      return tweet
    })
    return {
      tweetsList: formattedList
    }
  }
  addTweet(tweetToAdd) {
    $.post('/tweets', { body: tweetToAdd })
    .success(savedTweet => {
      let newTweetsList = this.state.tweetsList
      newTweetsList.unshift(savedTweet)
      this.setState(this.formattedTweets(newTweetsList))
    })
    .error(error => console.log(error))
  }
  componentDidMount () {
      // Need to use componentDidMount to trigger the live load of tweets
      $.ajax("/tweets")
      .success(data => this.setState(this.formattedTweets(data))) // change the tweetList to the data we received from server
      .error(error => console.log(error))
  }
  render () {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetsList tweets={this.state.tweetsList}/>
      </div>
    )
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react')
  if (reactNode) {
    React.render( <Main />, reactNode)
  }
}

$(documentReady)
