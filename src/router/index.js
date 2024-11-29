import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const routes = {
  '/': '/index.html',
  '/page1': '/src/views/scriptecho/page1.html',
  '/page2': '/src/views/scriptecho/page2.html',
};

let iframe = null;
let currentPath = null; // Track the current path

const render = () => {
  const path = history.location.pathname;
  const page = routes[path] || routes['/'];

  const appDiv = document.getElementById('app');
  if (appDiv) {
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '100%';
      appDiv.appendChild(iframe);
    }

    // Only update iframe.src if the path has changed
    if (path !== currentPath) {
      iframe.src = page;
      currentPath = path;
    }
  } else {
    console.error("Element with id 'app' not found!");
  }
};

document.addEventListener('DOMContentLoaded', () => {
  render();
  history.listen(render);
});

function navigate(path) {
  history.push(path);
}

export { history, navigate };