import React from 'react';
import { CONTENT_CLASS } from '../index'
import '../css/index.css';
import '../css/Login.css';


export default class Login extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <div className={CONTENT_CLASS}>
                <h1>Login</h1>
            </div>
        )
    }
}
