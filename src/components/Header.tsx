import React from 'react';
import { APP_NAME_CLASS, LOGO_CLASS } from '..';


export default class Header extends React.Component {
    public render() {
        return (
            <header>
                <img className={LOGO_CLASS}></img>
                <h1 className={APP_NAME_CLASS}>Octorace</h1>
            </header>
        )
    }
}