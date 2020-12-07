import React from 'react';
import '../css/index.css';
import '../css/Guild.css';
import { CONTENT_CLASS } from '..';


export default class Guilds extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <div className={CONTENT_CLASS}>
                <h1>Guilds</h1>
            </div>
        )
    }
}
