import React from 'react';
import { CONTENT_CLASS, LOGIN_BUTTON_CLASS, ENDPOINTS } from '../index'
import '../css/index.css';
import '../css/Login.css';


export default class Login extends React.Component<any, any> {
    private onClick(event: React.MouseEvent) {
        // Go-to oauth page
        window.location.replace(
            `/${ENDPOINTS.OAUTH}`,
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
