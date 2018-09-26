import UniversalRouter from 'universal-router'
import ReactDOM from 'react-dom';
import routes from './routes';

const router = new UniversalRouter(routes)
const container = document.getElementById('container');

export default function navigateTo(location) {
    router.resolve(location)
      .then(renderComponent)
      .catch(function(error) {
        router.resolve({ pathname: '/error', error })
          .then(renderComponent)
      });
}

function renderComponent(component) {
  ReactDOM.render(component, container);
}
