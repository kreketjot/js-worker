/* eslint-disable no-restricted-globals */
self.addEventListener('message', (evt) => {
  let res = 1;
  for (let i = 1; i < evt.data; i += 1) {
    res *= i;
  }
  self.postMessage(res);
});
