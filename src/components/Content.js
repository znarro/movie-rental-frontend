import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';

import Movies from '../views/Movies';
import Users from '../views/Users';

const Content = () => {
  return (
    <Grid
      as="main"
      gridArea="content"
      p={5}
      templateRows="auto 1fr"
      templateColumns="1fr"
      templateAreas="'title'
                     'table'"
      gap={5}
    >
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/users">User Rentals</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </Grid>
  );
};

export default Content;
