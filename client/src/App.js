import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import asyncComponent from './utils/asyncComponent';

// Import CSS
import './App.css';

// Lazy Loading Containers
const PageOne = asyncComponent(() => import('./containers/PageOne/PageOne'));
const PageTwo = asyncComponent(() => import('./containers/PageTwo/PageTwo'));
const Landing = asyncComponent(() => import('./containers/Landing/Landing'));
const Layout = asyncComponent(() => import('./containers/Layout/Layout'));
const NotFound = asyncComponent(() => import('./containers/NotFound/NotFound'));

const authRouteVals = [
  {
    path: 'page-1',
    page: PageOne
  },
  {
    path: 'page-2',
    page: PageTwo
  }
];

const unAuthRouteVals = [
  {
    path: '',
    page: Landing
  },
  {
    path: '404',
    page: NotFound
  }
];

const authRouteContent = authRouteVals.map(i => (
  // Serve Routes that require authentication
  <PrivateRoute exact path={`/${i.path}`} component={i.page} key={i.page} />
));

const unAuthRouteContent = unAuthRouteVals.map(i => (
  // Serve Routes that don't require authentication
  <Route exact path={`/${i.path}`} component={i.page} key={i.page} />
));

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          {unAuthRouteContent}
          {authRouteContent}
          {/* If Route not found, redirect to 404 page */}
          <Redirect to="/404" component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
