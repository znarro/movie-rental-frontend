import React from 'react';
import { Center, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Center gridArea="footer" bg="blue.100" h="100px" color="black">
      <Text fontSize="md">&copy; Zamir Narro - 2021</Text>
    </Center>
  );
};

export default Footer;
