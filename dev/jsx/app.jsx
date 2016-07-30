import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import '../../node_modules/skeleton-css/css/normalize.css'
import '../../node_modules/skeleton-css/css/skeleton.css'
import '../scss/global.scss'

import Container from './container.jsx'
import Home from './home.jsx'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('app'));
