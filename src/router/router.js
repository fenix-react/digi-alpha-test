import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './route';
import ROUTES from 'config/routes';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {
          // maps the list of routes provided in the config dir
          ROUTES.map(({ Component, ...rest }) => (
            <Route
              {...rest}
              path={rest.path}
              key={rest.path}
              render={routeProps => {
                return <Component {...routeProps} />;
              }}
            />
          ))
        }
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
