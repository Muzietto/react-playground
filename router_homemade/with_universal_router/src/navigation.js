import UniversalRouter from 'universal-router'
import ReactDOM from 'react-dom';
import routes from './routes';

console.log('routes=' + JSON.stringify(routes))

const router = new UniversalRouter(routes)
const container = document.getElementById('container');

export default function navigateTo(location) {
  try {

  router.resolve(location)
    .then(renderComponent)
    .catch(function(error) {
      router.resolve({ pathname: '/error', error })
        .then(renderComponent)
    });
  } catch (e) {}
}

function renderComponent(component) {
  ReactDOM.render(component, container);
}
