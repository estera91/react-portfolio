// Import other necessary dependencies
import * as React from "react";
import { VStack } from "@chakra-ui/react";
import '../css/FullScreenSection.css'; // Import the CSS file

// Functional component for a full-screen section
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  // Return a VStack component representing the full-screen section
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      fontFamily="Arial"
    >
      {/* Nested VStack for handling additional boxProps and rendering children */}
      <VStack
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

// Export the FullScreenSection component as the default export
export default FullScreenSection;
