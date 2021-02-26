import React from 'react';
import samplePosts from "../sampleData";
import moment from 'moment';

class Feed extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
  
  render() {
      return (
        <div className="feed">
          <ul>
          {this.props.postData.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map((post) => 
          <li className="feed-list-item">
            <div className="feed-list-item-title" onClick={()=>this.props.handleClick("post", post._id)}>{post.title}</div>
          <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{post.author}</span> {moment(post.createdAt).fromNow()}</div>
            <img src={post.imageUrl} onClick={()=>this.props.handleClick("post", post._id)} className="feed-list-item-image"/>
          <span className="feed-list-item-lede">{post.body}</span>
          </li>)}
          </ul>
        </div>
        
      );
  }
}
export default Feed;
