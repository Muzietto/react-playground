import ReactDOM from 'react-dom';
import history from './history';
import router from './router';
import routes from './routes';

const container = document.getElementById('container');

function renderComponent(component) {
  ReactDOM.render(component, container);
}

function render(location) {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error })
    .then(renderComponent));
}

const curLoc = history.location;

render(curLoc); // render the current URL

history.listen(render);               // render subsequent URLs
