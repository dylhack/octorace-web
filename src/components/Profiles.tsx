import React from 'react';
import { Async } from 'react-async';
import { withRouter } from 'react-router';
import { Guild } from '../models/Guild';
import Render from '../util/Render';
import Store from '../util/Store';


type ProfilesParam = {
    id?: number;
}

type ProfilesFetch = {
    isPending: boolean,
    error?: Error,
    data?: Guild,
}

class Profiles extends React.Component<any, any>{
    public render(): React.ReactNode {
        const { id } = this.props.match.params as ProfilesParam;

        if (!id) {
            console.error("An ID wasn't provided in the URL path.");
            console.error(`ID == ${id}`);
            return Render.state("An ID wasn't provided in the URL path.");
        }

        console.debug(`Loading profiles for '${id}'`);
        const getGuilds = async () => await Store.getGuild(id as number);

        return (
            <Async promiseFn={getGuilds}>
                {({isPending, data, error}: ProfilesFetch) => {
                    if (isPending) {
                        return Render.state('Loading...');
                    }
                    if (error) {
                        console.error(error);
                        return Render.state('Something went wrong');
                    }
                    if (data) {
                        return data.profiles.map(Render.profile);
                    }
                    console.debug('How did we get here?');
                    return Render.state('How did we get here?');
                }}
            </Async>
        );
    }
}

export default withRouter(Profiles);
