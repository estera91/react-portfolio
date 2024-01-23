import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Button, Image } from '@chakra-ui/react';

const TwoSectionsWithAnimation = () => {
  // State for rotation animation
  const [rotation, setRotation] = useState(0);
  
  // Image source URL
  const src = process.env.PUBLIC_URL + '/img/git.jpeg';

  // Function to trigger rotation and open GitHub link on button click
  const handleScroll = () => {
    setRotation(0); // Reset to initial state
    setRotation(360); // Apply rotate animation
    window.open('https://github.com/estera91/react-portfolio', '_blank');
  };

  // Effect to reset rotation when component mounts
  useEffect(() => {
    setRotation(0);
  }, []);

  return (
    // Flex container with black background, white text color, and minimum height of 100vh
    <Flex bg="black" color="white" minH="100vh" align="center" justify="center" p={8}>
      {/* Left Section */}
      <Box flex="1" textAlign="right">
        {/* Text and button to check the code on GitHub */}
        <Text fontSize="xl" mb={4}>
          Check the code of the portfolio on GitHub!
        </Text>
        <Button colorScheme="gray" onClick={handleScroll}>
          Check me
        </Button>
      </Box>
      
      {/* Right Section */}
      <Box flex="1" textAlign="center" ml={8}>
        {/* Image with rotation animation based on the rotation state */}
        <Image
          src={src} // Replace with your actual image URL
          alt="Sample Image"
          boxSize="200px"
          objectFit="cover"
          borderRadius="md"
          style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 1s' }}
        />
      </Box>
    </Flex>
  );
};

export default TwoSectionsWithAnimation;
