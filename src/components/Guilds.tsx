import React from 'react';
import '../css/index.css';
import {
    ENDPOINTS,
    LIST_BODY_CLASS,
    LIST_CLASS,
    LIST_COUNT_CLASS,
    LIST_DETAILS_CLASS,
    LIST_ICON_CLASS,
    LIST_NAME_CLASS,
    MAX_GUILDS,
    OPEN_LIST_ICON
} from '..';
import { Guild } from '../models/Guild';
import { Async } from 'react-async';
import GuildStore from '../models/GuildStore';


type FetchCallbackData = {
    data: Guild[],
    isPending: boolean,
    error: Error,
};

export default class Guilds extends React.Component<any, any> {
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
                        rendered.push(Guilds.renderGuild(guild));
                    }
                    return rendered;
                }}
            </Async>
        );
    }

    public static renderGuild(guild: Guild, openIco = true): React.ReactNode {
        return (
            <a href={`/guild/${guild.id}`}>
                <div className={LIST_CLASS}>
                    {openIco
                        ? <img alt="Open guild" className={OPEN_LIST_ICON} src={'/res/open.png'} />
                        : null}
                    <div className={LIST_BODY_CLASS}>
                        <img alt="Guild icon" className={LIST_ICON_CLASS} src={guild.icon_url} />
                        <div className={LIST_DETAILS_CLASS}>
                            <h1 className={LIST_NAME_CLASS}>{guild.name}</h1>
                            <p className={LIST_COUNT_CLASS}>{guild.profiles.length} Developers</p>
                        </div>
                    </div>
                </div>
            </a>
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
        } else if (nameA < nameB) {
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
            .sort(Guilds.cmpGuildsName)
            .sort(Guilds.cmpGuilds);

        guilds.forEach(GuildStore.storeGuild);

        if (guilds.length > MAX_GUILDS) {
            guilds = guilds.slice(0, MAX_GUILDS);
        }

        return guilds;
    }

}
