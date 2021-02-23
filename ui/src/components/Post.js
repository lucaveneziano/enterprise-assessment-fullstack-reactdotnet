import React from 'react';

const Post = (props) => (
  <div className="post">
    <h1 className="post-title">This is a Hardcoded Blog Post Component</h1>
    <div className="post-byline"><span className="post-byline-author">Ferd Zerding</span> 14 hours ago</div>
    <img src="http://placecorgi.com/800/450" className="post-image"/>
    <p>This component displays a hard-coded blog post, intended to show you the desired layout of the Post component. You should refactor this component so it dynamically renders actual blog posts. You can use the provided sample data to get started, then eventually switch to data from the database. In order to make this look a little more like our eventual posts, here are a few more paragraphs of lorem ipsum filler text.</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
  </div>
)

export default Post;
