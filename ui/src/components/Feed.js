import React from 'react';
import samplePosts from "../sampleData";
import moment from 'moment';

class Feed extends React.Component {
  constructor(props) {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    };
    this.props = props;
  }

  componentDidMount() {
    fetch("https://127.0.0.1:5000/api/blogs")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="feed">
          <ul>
          {posts.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map((post) => 
          <li className="feed-list-item">
            <div className="feed-list-item-title" onClick={this.props.handleClick}>{post.title}</div>
          <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{post.author}</span> {moment(post.createdAt).fromNow()}</div>
            <img src={post.imageUrl} onClick={this.props.handleClick} className="feed-list-item-image"/>
          <span className="feed-list-item-lede">{post.body}</span>
          </li>)}
          </ul>
        </div>
        
      );
    }
    
  }
}
/*
const Feed = (props) => (
  <div className="feed">
    <ul>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>This is an example blog post title.</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
        <img src="http://www.placecorgi.com/350/197" onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
      </li>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>This is an example blog post title.</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
        <img src="http://www.placecorgi.com/350/197" onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
      </li>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>This is an example blog post title.</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
        <img src="http://www.placecorgi.com/350/197" onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
      </li>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>This is an example blog post title.</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
        <img src="http://www.placecorgi.com/350/197" onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
      </li>
    </ul>
  </div>
);
*/
export default Feed;