import React from 'react';
import ReactDOM from 'react-dom';
import Octorace from './components/Octorace';
import './css/index.css';


function main() {
  const root = document.getElementById('root');

  if (root) {
    ReactDOM.render(
      <React.StrictMode>
        <Octorace />
      </React.StrictMode>,
      root,
    );
  } else {
    throw new Error('Failed to get root element');
  }
}

main();
