const {Link} = require('react-router');
const React = require('react');

// wrapped by a Route in App.js
// Route owns property 'posts'
module.exports = function Posts(props) {
  return (
    <div>Posts
      <ol>
      {/* Access attribute which we defined in the route declaration */}
      {props.route.posts.map((post, index) =>
        <li key={post.slug}>
          <Link to={`/posts/${post.slug}`} >
            {post.title}
          </Link>
        </li>
      )}
      </ol>
    </div>
  );
}