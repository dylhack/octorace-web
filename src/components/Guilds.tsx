import React from 'react';
import '../css/index.css';
import '../css/Guilds.css';
import {
    ENDPOINTS,
    GUILD_CLASS,
    GUILD_COUNT_CLASS,
    GUILD_ICON_CLASS,
    GUILD_NAME_CLASS,
    MAX_GUILDS,
    OPEN_GUILD_ICON
} from '..';
import { Guild } from '../models/Guild';
import { Async } from 'react-async';


type FetchCallbackData = {
    data: Guild[],
    isPending: boolean,
    error: Error,
};

export default class Guilds extends React.Component<any, any> {
    public static guilds: Map<number, Guild> = new Map();

    public render(): React.ReactNode {
        return (
            <Async promiseFn={Guilds.getGuilds}>
                {({ data, error, isPending }: FetchCallbackData) => {
                    if (isPending) {
                        return "Loading...";
                    }
                    if (error) {
                        console.error(error);
                        return "Something went wrong"
                    }
                    let rendered: React.ReactNodeArray = [];
                    for (let guild of data) {
                        Guilds.guilds.set(guild.id, guild);
                        rendered.push(Guilds.renderGuild(guild));
                    }
                    return rendered;
                }}
            </Async>
        );
    }

    private static cmpGuilds(guildA: Guild, guildB: Guild): number {
        if (guildA.profiles.length === guildB.profiles.length) {
            return 0;
        } else if (guildA.profiles.length > guildB.profiles.length) {
            return -1;
        } else {
            return 1;
        }
    }

    private static cmpGuildsName(guildA: Guild, guildB: Guild): number {
        let nameA = guildA.name.toUpperCase();
        let nameB = guildB.name.toUpperCase();
        if (nameA === nameB) {
            return 0;
        } else if (nameA > nameB) {
            return -1;
        } else {
            return 1;
        }
    }

    private static filterGuild(guild: Guild): boolean {
        return guild.profiles.length > 1;
    }

    private static async getGuilds(): Promise<Guild[]> {
        let res = await fetch(ENDPOINTS.GUILDS);
        let guilds: Guild[] = await res.json();

        guilds = guilds.filter(Guilds.filterGuild)
            .sort(Guilds.cmpGuilds);

        if (guilds.length > MAX_GUILDS) {
            guilds = guilds.slice(0, MAX_GUILDS);
        }

        return guilds;
    }

    private static renderGuild(guild: Guild): React.ReactNode {
        return (
            <div className={GUILD_CLASS}>
                <a href={`/guild/${guild.id}}`}>
                    <img className={GUILD_ICON_CLASS} src={guild.icon_url}/>
                    <h1 className={GUILD_NAME_CLASS}>{guild.name}</h1>
                    <p className={GUILD_COUNT_CLASS}>{guild.profiles.length}</p>
                    <img className={OPEN_GUILD_ICON} src={'res/open.png'}></img>
                </a>
            </div>
        );
    }
}
