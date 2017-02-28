import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route, IndexRoute }from 'react-router';
import { browserHistory } from 'react-router';
import 'whatwg-fetch'

import App from './App';
import Repos from './Repos';
import About from './About';
import Home from './Home';
import RepoDetails from './RepoDetails';
import './index.css';

ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="about" component={About}/>
  <Route path="repos" component={Repos}>
    {/* Add the route, nested where we want the UI to nest */}
    <Route path="details/:repo_name" component={RepoDetails} />
  </Route>
  <Route path="repos" component={Repos}/>
  </Route>
</Router>,
  document.getElementById('root')
);
