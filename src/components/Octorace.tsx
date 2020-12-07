import React from 'react';
import Guilds from './Guilds';
import Guild from './Guild';
import Login from './Login';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';


export default class Octorace extends React.Component<any, any> {
    public render() {
        let loggedIn = (document.cookie.length !== 0);
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        { loggedIn ? <Guilds/> : <Login/> }
                    </Route>
                    <Route exact path="/guild/:guildid">
                        { loggedIn ? <Guild/> : <Login/> }
                    </Route>
                </Switch>
            </Router>
        );
    }
}
