import React from 'react';
import '../css/index.css';
import '../css/Guilds.css';
import {
    CONTENT_CLASS,
    GUILD_COUNT_CLASS,
    GUILD_ICON_CLASS,
    GUILD_NAME_CLASS,
    OPEN_GUILD_ICON
} from '..';
import { Guild } from '../models/Guild';


export default class Guilds extends React.Component<any, any> {
    private guilds: Guild[];

    constructor(props: any, guilds: Guild[]) {
        super(props);
        this.guilds = guilds;
    }


    private renderGuild(guild: Guild): React.ReactNode {
        return (
            <div>
                <img className={GUILD_ICON_CLASS} src={guild.icon_url}></img>
                <h1 className={GUILD_NAME_CLASS}>{guild.name}</h1>
                <p className={GUILD_COUNT_CLASS}>{guild.profiles.length}</p>
                <img className={OPEN_GUILD_ICON} src={''}></img>
            </div>
        );
    }


    public render(): React.ReactNode {
        return (
            <div className={CONTENT_CLASS}>
                {this.guilds.map(this.renderGuild)}
            </div>
        )
    }
}
