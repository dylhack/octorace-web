import React from 'react';
import '../css/index.css';
import '../css/Guilds.css';
import {
    CONTENT_CLASS,
    ENDPOINTS,
    GUILD_COUNT_CLASS,
    GUILD_ICON_CLASS,
    GUILD_NAME_CLASS,
    LISTINGS,
    OPEN_GUILD_ICON
} from '..';
import { Guild } from '../models/Guild';


export default class Guilds extends React.Component<any, any> {
    public async render(): Promise<React.ReactNodeArray> {
        let target = document.getElementById(LISTINGS);

        if (target == null) {
            throw new Error("Couldn't get listenings div.");
        }

        let res = await fetch(ENDPOINTS.GUILDS);
        let guilds: Guild[] = await res.json();
        let rendered: React.ReactNodeArray = [];
        for (let guild of guilds) {
            rendered.push(Guilds.renderGuild(guild));
        }

        return rendered;
    }

    private static renderGuild(guild: Guild): React.ReactNode {
        return (
            <div>
                <img className={GUILD_ICON_CLASS} src={guild.icon_url}></img>
                <h1 className={GUILD_NAME_CLASS}>{guild.name}</h1>
                <p className={GUILD_COUNT_CLASS}>{guild.profiles.length}</p>
                <img className={OPEN_GUILD_ICON} src={''}></img>
            </div>
        );
    }
}
