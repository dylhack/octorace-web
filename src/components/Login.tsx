import React from 'react';
import { CONTENT_CLASS, LOGIN_BUTTON_CLASS, OAUTH } from '../index'
import '../css/index.css';
import '../css/Login.css';


export default class Login extends React.Component<any, any> {
    private onClick(event: React.MouseEvent) {
        window.location.replace(
            `${window.location.hostname}/${OAUTH}`,
        );
    }

    public render(): React.ReactNode {
        return (
            <div className={CONTENT_CLASS}>
                <input type="button" value="LOGIN"
                    className={LOGIN_BUTTON_CLASS}
                    onClick={this.onClick}>

                </input>
            </div>
        )
    }
}
