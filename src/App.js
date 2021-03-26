import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';

import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Text>Edit and save to reload.</Text>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
