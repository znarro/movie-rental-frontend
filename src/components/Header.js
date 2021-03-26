import React from 'react';
import { Flex, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Header = () => {
  return (
    <Flex as="header" gridArea="header" p={5}>
      <Spacer />
      <Heading as="h1" size="xl" my={5} marginLeft={10}>
        Movie Rental
      </Heading>
      <Spacer />
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Header;
