import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom';
import { Grid, Container, HStack, Divider, Link } from '@chakra-ui/react';

import Movies from '../views/Movies';
import Users from '../views/Users';
import User from '../views/User';

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
        <Container maxW="5xl">
          <nav>
            <HStack height="50px">
              <Link as={RouterLink} color="blue.500" to="/movies">
                Movies
              </Link>
              <Divider orientation="vertical" />
              <Link as={RouterLink} color="blue.500" to="/users">
                User Rentals
              </Link>
            </HStack>
          </nav>

          <Switch>
            <Route exact path="/movies" children={<Movies />} />
            <Route exact path="/users" children={<Users />} />
            <Route exact path="/users/:id" children={<User />} />
            <Route exact path="/" children={<Movies />} />
          </Switch>
        </Container>
      </Router>
    </Grid>
  );
};

export default Content;
