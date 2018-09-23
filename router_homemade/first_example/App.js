import history from './history';

function render(location) { /* Render React app, read on */ }

render(history.getCurrentLocation()); // render the current URL

history.listen(render);               // render subsequent URLs
