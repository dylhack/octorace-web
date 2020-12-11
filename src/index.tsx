import React from 'react';
import ReactDOM from 'react-dom';
import Octorace from './components/Octorace';
import './css/index.css';


/* Endpoints */
export const ENDPOINTS = {
  USER: '/api/user',
  GUILDS: '/api/guilds',
  OAUTH: 'oauth',
};


/* Configurable */
export const MAX_GUILDS = 15;


/* General CSS */
export const CONTENT_CLASS = 'content';

/* Login CSS */
export const LOGIN_BUTTON_CLASS = 'login-button';

/* Guild CSS */
export const LIST_CLASS = 'list-item';
export const LIST_ICON_CLASS = 'list-icon';
export const LIST_DETAILS_CLASS = 'list-item-details';
export const LIST_BODY_CLASS = 'list-item-body';
export const LIST_NAME_CLASS = 'list-item-name';
export const LIST_COUNT_CLASS = 'list-count';
export const OPEN_LIST_ICON = 'list-open';


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
