import './App.scss';
// import { Button, DatePicker, version } from "antd";
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Routes from './router/Routes'

function RouteWithSubRoutes (route) {
  return <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component routes={route.routes} {...props} />}
  />
}

function App() {
  return (
    <Router>
        <Switch>
          {
            Routes.map((route, index) => {
              return <RouteWithSubRoutes key={index} {...route} />
            })
          }
        </Switch>
    </Router>
  );
}

function Error404 () {
  return <h3 style={{ color: 'red' }}>Error 404</h3>
}

export default App;
