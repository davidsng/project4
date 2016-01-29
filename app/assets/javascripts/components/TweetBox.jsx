export default class TweetBox extends React.Component {
  render () {
    return (
      <form>
        <div className="input-field">
          <textarea className="materialize-textarea" />
          <label>Say something!</label>
          <button className="btn right">Post</button>
        </div>
      </form>
    )
  }
}
