import React from 'react';
import ReactDOM from 'react-dom';
import Octorace from './components/Octorace';
import Header from './components/Header';
import example from './guilds.json';
import { Guild } from './models/Guild';
import './css/index.css';


export const LOGO_CLASS = 'logo';
export const APP_NAME_CLASS = 'app-name';
export const CONTENT_CLASS = 'content';
export const GUILD_ICON_CLASS = 'guild-icon';
export const DATA: Guild[] = example;


function main() {
  const root = document.getElementById('root');

  if (root) {
    ReactDOM.render(
      <React.StrictMode>
        <Header />
        <Octorace/>
      </React.StrictMode>,
      root,
    );
  } else {
    throw new Error('Failed to get root element');
  }
}


main();