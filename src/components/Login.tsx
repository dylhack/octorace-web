import React from 'react';
import { LOGIN_BUTTON_CLASS, ENDPOINTS } from '../constants';
import '../css/index.css';
import '../css/Login.css';


export default class Login extends React.Component<any, any> {
    private onClick(_: React.MouseEvent) {
        window.location.replace(
            `/${ENDPOINTS.OAUTH}`,
        );
    }

    public render(): React.ReactNode {
        return (
            <input type="button" value="LOGIN"
                className={LOGIN_BUTTON_CLASS}
                onClick={this.onClick}>
            </input>
        )
    }
}
