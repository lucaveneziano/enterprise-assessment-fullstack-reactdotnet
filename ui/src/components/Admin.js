import React from 'react';
import samplePosts from "../sampleData";
import moment from 'moment';

class Admin extends React.Component {
  constructor(props) {
    super();
    this.state = {
        posts : [],
        error : null
    }
    this.props = props;
  }
  
  componentDidMount() {
    fetch("https://127.0.0.1:5000/api/blog")
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
    
      return (
        <div className="admin">
          <ul>{
            this.state.posts.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map((post) => 
                <div className="admin-list-item" 
                    onClick = {() => this.props.handleClick("post", post._id)}>
                    
                    {post.title}
                    <br></br>
                    <span className="date-item">
                        {post.createdAt}
                    </span>
                    <br></br>
                    <span className="views-item">
                        Views:{post.views}
                    </span>
                </div>)
            }
          </ul>
        </div>
      );
  }
}
export default Admin;