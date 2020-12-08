import React from 'react';
import '../css/index.css';
import '../css/Guilds.css';
import {
    CONTENT_CLASS,
    ENDPOINTS,
    GUILD_CLASS,
    GUILD_COUNT_CLASS,
    GUILD_ICON_CLASS,
    GUILD_NAME_CLASS,
    LISTINGS,
    OPEN_GUILD_ICON
} from '..';
import { Guild } from '../models/Guild';
import { Async } from 'react-async';


export default class Guilds extends React.Component<any, any> {
    public render(): React.ReactNode {
        return (
            <Async promiseFn={Guilds.getGuilds}>
                {(guilds: Guild[]) => {
                    let rendered: React.ReactNodeArray = [];
                    for (let guild of guilds) {
                        rendered.push(Guilds.renderGuild(guild));
                    }
                    return rendered;
                }}
            </Async>
        );
    }

    private static async getGuilds(): Promise<Guild[]> {
        let res = await fetch(ENDPOINTS.GUILDS);
        return res.json();
    }

    private static renderGuild(guild: Guild): React.ReactNode {
        return (
            <div className={GUILD_CLASS}>
                <img className={GUILD_ICON_CLASS} src={guild.icon_url}></img>
                <h1 className={GUILD_NAME_CLASS}>{guild.name}</h1>
                <p className={GUILD_COUNT_CLASS}>{guild.profiles.length}</p>
                <img className={OPEN_GUILD_ICON} src={''}></img>
            </div>
        );
    }
}
