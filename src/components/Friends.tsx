import React from 'react';
import { Async } from 'react-async';
import '../css/index.css';
import '../css/Lists.css';
import { Profile } from '../models/Profile';
import Render from '../util/Render';
import Store from '../util/Store';


type FriendsFetch = {
    isPending: boolean,
    data?: Profile[],
    error?: Error,
}

/**
 * @class Friends
 * The friends component is the page that lists all the user's friends with
 * their; tag, contributions, profile picture, and a their placement on the
 * leaderboard.
 */
export default class Friends extends React.Component<any, any> {
    /* Render the Friends page */
    public render(): React.ReactNode {
        return (
            <Async promiseFn={Store.getFriends}>
                {({ isPending, data, error }: FriendsFetch) => {
                    if (isPending) {
                        return <h1>Loading...</h1>
                    }
                    if (error) {
                        console.error(error);
                        return <h1>Something went wrong</h1>
                    }
                    if (data) {
                        return data.map(Render.profile);
                    }

                    console.debug('How did we get here?');
                    return <h1>How did we get here?</h1>
                }}
            </Async>
        );
    }
}
