import React from 'react';
import axios from 'axios';

class CreatePost extends React.Component
{
  constructor(props) {
    super();
    this.state={
      post_title:'',
      post_author:'', 
      post_createdAt:'',
      post_imageUrl:'',
      post_body:''
    }
    this.props = props;

    this.editPost = this.editPost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  editPost(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("title", this.state.post_title);
    data.append("author", this.state.post_author);
    data.append("imageUrl", this.state.post_imageUrl);
    data.append("body", this.state.post_body);
    axios({
        method: 'post',
        url: 'https://127.0.0.1:5000/api/blog/',
        data: data,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then((response) => {
        this.props.reloadPosts();
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }

  render() {
    return (
        <div class="create">
            <div class="create-editor">
                <h2>AUTHOR</h2>
                <form onSubmit={this.handleSubmit}>
                <input class="create-input" type="text" name="post_title" placeholder="Post Title" onChange={this.editPost}></input>
                <input class="create-input" type="text" name="post_author" placeholder="Author" onChange={this.editPost}></input>
                <input class="create-input" type="text" name="post_imageUrl" placeholder="Image URL" onChange={this.editPost}></input>
                <textarea class="create-body-textarea" name="post_body" placeholder="Post Body" onChange={this.editPost}></textarea>
                <button class="create-submit-button" type="submit">Save post</button>
                </form>
            </div>
            <div class="create-preview">
                <h2>PREVIEW</h2>
                <div className="post">
                    <h1 className="post-title">{this.state.post_title}</h1>
                    <div className="post-byline"><span className="post-byline-author">{this.state.post_author}</span></div>
                    <img src={this.state.post_imageUrl} className="post-image"/>
                    <p>{this.state.post_body}</p>
                </div>
            </div>
        </div>
      
    );
  }
}

export default CreatePost;
