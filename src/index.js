import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router basename={'/belrm'}>
    <div>
      <Link to={"/app"}>
        It is a link
      </Link>
      <Route exact path={`${process.env.PUBLIC_URL}/app`} component={App} />
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={() => <div>yash</div>} />
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
