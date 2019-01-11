import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Detail from './detail';

export default class BasicRoute extends React.PureComponent {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/detail' component={Detail} />
                </Switch>
            </HashRouter>
        )
    }
}
