import { getItemSync } from '@src/lib/storage';

export { useFetch };

function useFetch(url, method = 'GET') {
  let data = getItemSync(`http://localhost:9000${url}`);

  if (data) return data;

  const promise = fetch(url, { method });

  throw promise;
}
