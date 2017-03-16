const React = require('react');

// wrapped by a Route in App.js
// Route owns property 'posts'
module.exports = function Post(props) {
  let post = props.route.posts.find(el => (el.slug === props.params.id));
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      <p><a href={post.link} target="_blank">Continue reading...</a></p>
    </div>
  );
}