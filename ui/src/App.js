import React from "react";

import Post from "./components/Post";
import Feed from "./components/Feed";
import Admin from "./components/Admin";

/*
  READ THESE COMMENTS AS A PART OF STEP TWO

  To manage switching among the different views in this application, 
  we have implemented a "view switcher" in the `App` component. 

  There are three key parts to the view switcher:
    1. The `view` property defined on the `App` component's `state`
    2. The `changeView` method defined on the `App` component
    3. The `renderView` method defined on the `App` component

  The value of the `view` property will determine which gets returned by the
  `renderView` method, which is invoked inside the `App` component's `render`. 
  You can set the initial value of `view` in the `App` component's `constructor`
  function, determining what view gets rendered "by default".

  If you haven't modified this code yet, the view switcher observes the following rules:
  - The default view is 'feed'
  - If the view is set to 'feed', the `<Feed>` component is displayed
  - If the view is set to any other value, the `<Post>` component is displayed
  - The `changeView` function should change the value of `view` in the `App` component's state.

  You'll make some refactors and additions to this view switcher throughout the
  next steps of the assessment. When you're ready, return to the README.
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "feed",
      post_id: 0,
      error: null,
      isLoaded: false,
      posts: []
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(option, postId=0) {
    this.setState({
      view: option,
      post_id: postId
    });
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

  renderView() {
    const { view, post_id } = this.state;

    if (view === "feed") {
      return <Feed handleClick={this.changeView} postData={this.state.posts} />;
    } 
    else if(view === "admin"){
      return <Admin handleClick={this.changeView} />;
    }
    else 
    {
      let curPost;
      this.state.posts.map((post) => {
          if (post._id == post_id) {
            curPost = post;
          }
      });
      return <Post postid={curPost._id} />;
    }
  }
  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
      return <div>Loading...</div>;
    } 
    else {
      return (
        <div>
          <div className="nav">
            <span className="logo" onClick={() => this.changeView("feed")}>
              BLOGMODO
            </span>
            <span
              className={
                this.state.view === "feed" ? "nav-selected" : "nav-unselected"
              }
              onClick={() => this.changeView("feed")}
            >
              See all Posts
            </span>
            <span className="nav-unselected">Write a Post</span>
            <span 
              className = {
               this.state.view === "admin" ? "nav-selected" : "nav-unselected"
              }
              onClick={() => this.changeView("admin")}
            >
              Admin
            </span>
          </div>

          <div className="main">{this.renderView()}</div>
        </div>
      );
    }
  }
}

export default App;
