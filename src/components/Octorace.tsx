import React from 'react';
import Util from '../util/Util';
import Friends from './Friends';
import Login from './Login';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';


export default class Octorace extends React.Component<any, any> {
    public render() {
        let loggedIn = Util.isLoggedIn();

        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        {loggedIn ? <Friends /> : <Login />}
                    </Route>
                </Switch>
            </Router>
        );
    }
}
