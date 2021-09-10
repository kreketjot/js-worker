const worker = new Worker('./worker.js');
const x = 1e2;
worker.addEventListener('message', (evt) => document.body.append(`${x}! = ${evt.data}`));
worker.addEventListener('error', (evt) => console.error(evt));
worker.postMessage(x);
