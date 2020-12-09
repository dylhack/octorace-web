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
export const GUILD_CLASS = 'guild';
export const GUILD_ICON_CLASS = 'guild-icon';
export const GUILD_DETAILS_CLASS = 'guild-details';
export const GUILD_BODY_CLASS = 'guild-body';
export const GUILD_NAME_CLASS = 'guild-name';
export const GUILD_COUNT_CLASS = 'guild-count';
export const OPEN_GUILD_ICON = 'guild-open';


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
