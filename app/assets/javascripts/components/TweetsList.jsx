import Tweet from "./Tweet"

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
