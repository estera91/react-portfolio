// Import other necessary dependencies
import * as React from "react";
import { VStack } from "@chakra-ui/react";
import '../css/FullScreenSection.css'; // Import the CSS file

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      fontFamily="Arial"
    >
      <VStack
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
