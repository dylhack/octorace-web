import React from 'react';
import Store from '../util/Store';
import { Async } from 'react-async';
import { Guild } from '../models/Guild';
import Render from '../util/Render';


type GuildsFetch = {
    isPending: boolean,
    error?: Error,
    data: Guild[]
}

/**
 * @class Guilds
 * Represents the guilds page when the user successfully logs in.
 */
export default class Guilds extends React.Component<any, any> {
    public render() {
        return (
            <Async promiseFn={Store.getGuilds}>
                {({isPending, data, error}: GuildsFetch) => {
                    if (isPending) {
                        return Render.state('Loading...');
                    }
                    if (error) {
                        console.error(error);
                        return Render.state('Something went wrong');
                    }
                    if (data) {
                        console.debug('Received guilds for user', data);
                        return data.map(Render.guild);
                    }
                    console.debug('How did we get here?');
                    return Render.state('How did we get here?');
                }}
            </Async>
        )
    }
}
