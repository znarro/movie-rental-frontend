import React from 'react';
import { ChakraProvider, Grid, theme } from '@chakra-ui/react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        minH="100vh"
        templateRows="100px 1fr 100px"
        templateColumns="repeat(2, 1fr)"
        templateAreas="'header header'
                       'content content'
                       'footer footer'"
        gap={5}
      >
        <Header />
        <Content />
        <Footer />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
