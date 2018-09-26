import UniversalRouter from 'universal-router'
import ReactDOM from 'react-dom';
import history from './history';
import routes from './routes'

// const routes = [
//   {
//     path: '', // optional
//     action: () => `<h1>Home</h1>`,
//   },
//   {
//     path: '/posts',
//     action: () => console.log('checking child routes for /posts'),
//     children: [
//       {
//         path: '', // optional, matches both "/posts" and "/posts/"
//         action: () => `<h1>Posts</h1>`,
//       },
//       {
//         path: '/:id',
//         action: (context) => `<h1>Post #${context.params.id}</h1>`,
//       },
//     ],
//   },
// ]

const router = new UniversalRouter(routes)

// router.resolve('/posts').then(html => {
//   document.body.innerHTML = html // renders: <h1>Posts</h1>
// })

const container = document.getElementById('container');

function renderComponent(component) {
  ReactDOM.render(component, container);
}

function render(location) {
  try {

  router.resolve(location)
    .then(renderComponent)
    .catch(function(error) {
      router.resolve({ pathname: '/error', error })
        .then(renderComponent)
    });
  } catch (e) {}
}

const curLoc = history.location || '/';

render(curLoc); // render the current URL

//history.listen(render); // render subsequent URLs
