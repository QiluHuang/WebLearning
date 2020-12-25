import logo from './logo.svg';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import About from './views/About/About.jsx';
import Home from './views/Home/Home.jsx';
import MyNavLink from './components/MyNavLink/MyNavLink.jsx';

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div class="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>

      <div>
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <MyNavLink className="list-group-item" to="/about">About</MyNavLink>
            <MyNavLink className="list-group-item" to="/home">Home</MyNavLink>
          </div>
        </div>
      
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
                <Redirect to="/about" />
              </Switch>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
