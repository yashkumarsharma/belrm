import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Link to={"/app"}>
        It is a link
      </Link>
      <Route exact path={"/app"} component={App} />
      <Route exact path={"/"} component={() => <div>yash</div>} />
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
