// ScrollButtons.js

import React from 'react';
import { Button, VStack, CSSReset, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
      },
    },
  },
});

const ScrollButtons = () => {
  const scrollUpByScreenHeight = () => {
    const screenHeight = window.innerHeight;
    window.scrollBy({ top: -screenHeight, behavior: 'smooth' });
  };

  const scrollDownByScreenHeight = () => {
    const screenHeight = window.innerHeight;
    window.scrollBy({ top: screenHeight, behavior: 'smooth' });
  };

  return (
    <VStack
      position="fixed"
      bottom="4"
      right="4"
      spacing="4"
      align="flex-end"
      zIndex="999"
    >
      <Button
        onClick={scrollUpByScreenHeight}
        bgColor="black"
        borderRadius="150px"
        fontSize="40px"
        color="orange"
        height="auto"
        width="auto"
        paddingTop="4px"
        paddingBottom="4px"
        border="solid 2px white"
      >
        <FaArrowUp />
      </Button>
      <Button
        onClick={scrollDownByScreenHeight}
        bgColor="black"
        marginTop="10px"
        fontSize="40px"
        borderRadius="150px"
        borderColor="white"
        color="orange"
        height="auto"
        width="auto"
        paddingTop="4px"
        paddingBottom="4px"
        marginBottom="20px"
        border="solid 2px white"
      >
        <FaArrowDown />
      </Button>
    </VStack>
  );
};

export default ScrollButtons;
