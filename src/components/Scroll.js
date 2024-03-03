// ScrollButtons.js

import React from 'react';
import { Button, VStack } from '@chakra-ui/react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';



// ScrollButtons functional component
const ScrollButtons = () => {
  // Function to scroll up by the screen height when the button is clicked
  const scrollUpByScreenHeight = () => {
    const screenHeight = window.innerHeight;
    window.scrollBy({ top: -screenHeight, behavior: 'smooth' });
  };

  // Function to scroll down by the screen height when the button is clicked
  const scrollDownByScreenHeight = () => {
    const screenHeight = window.innerHeight;
    window.scrollBy({ top: screenHeight, behavior: 'smooth' });
  };

  // JSX structure for rendering scroll-up and scroll-down buttons
  return (
    <VStack
      position="fixed"
      bottom="4"
      right="4"
      spacing="4"
      align="flex-end"
      zIndex="999"
    >
      {/* Scroll-up button */}
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
      {/* Scroll-down button */}
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
        marginbottom="20px"
        border="solid 2px white"
      >
        <FaArrowDown />
      </Button>
    </VStack>
  );
};

// Export the ScrollButtons component as the default export
export default ScrollButtons;
