import React from 'react';
import moment from 'moment';

const Post = (props) => (  
  <div className="post">
   
    <h1 className="post-title">{props.post.title}</h1>
    <div className="post-byline"><span className="post-byline-author">{props.post.author}</span> {moment(props.post.createdAt).fromNow()}</div>
    <img src={props.post.imageUrl} className="post-image"/>
    <p>{props.post.body}</p>
  </div>
)

export default Post;
