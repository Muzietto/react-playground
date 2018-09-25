import toRegex from 'path-to-regexp';

function matchURI(path, uri) {
  const groups = [];
  const pattern = toRegex(path, groups);
  const match = pattern.exec(uri);

  if (!match) return null;

  const params = match.reduce((acc, curr, index) => {
    if (index === 0) return acc; // ignore first group
    if (typeof match[index] === 'undefined') return acc;
    acc[groups[index - 1].name] = match[index];
    return acc;
  },{});

  return params;
}

function resolve(routes, context) {
  for (const route of routes) {
    const uri = context.error ? '/error' : context.pathname;
    const params = matchURI(route.path, uri);

    if (!params) continue;

    const result = route.action({ ...context, params });
    if (result) return Promise.resolve(result);
  }
  const error = new Error('Not found: ' + JSON.stringify(context));
  error.status = 404;
  return Promise.reject(error);
}
export default { resolve };
