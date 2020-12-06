import React from 'react';
import './App.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./views/Home";

class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
                {/* Always use exact={true} */}
              <Route path="/" component={Home} exact={true}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
