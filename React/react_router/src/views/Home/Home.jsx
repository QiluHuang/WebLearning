import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyNavLink from '../../components/MyNavLink/MyNavLink.jsx';

import News from '../News/News.jsx';
import Messages from '../Messages/Messages.jsx';

const Home = () => {
    return (
        <div>
            <h2>home route component</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/home/news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/messages">Messages</MyNavLink>
                    </li>
                </ul>
                
                <div>
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/messages" component={Messages}></Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Home;