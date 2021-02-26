import React from 'react';
import moment from 'moment';

class Post extends React.Component
{
  constructor(props) {
    super();
    this.state={
      post : [],
      error : null
    }
    this.props = props;
  }
  
  componentDidMount() {
    fetch("https://127.0.0.1:5000/api/blog/" + this.props.postid)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            post: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  
  render() {
    return (
      <div className="post">
        <h1 className="post-title">{this.state.post.title}</h1>
        <div className="post-byline"><span className="post-byline-author">{this.state.post.author}</span> {moment(this.state.post.createdAt).fromNow()}</div>
        <img src={this.state.post.imageUrl} className="post-image"/>
        <p>{this.state.post.body}</p>
      </div>
    );
  }
}

export default Post;
