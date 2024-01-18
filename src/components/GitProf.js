import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Button, Image, Center } from '@chakra-ui/react';

const TwoSectionsWithAnimation = () => {
  const [rotation, setRotation] = useState(0);
  const src=process.env.PUBLIC_URL + '/img/git.jpeg';
  // Function to trigger rotation on scroll
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
    <Flex bg="black" color="white" minH="100vh" align="center" justify="center" p={8}>
      {/* Left Section */}
      <Box flex="1" textAlign="right">
        <Text fontSize="xl" mb={4}>
          Check code of portfolio on Git Hub!
        </Text>
        <Button colorScheme="gray" onClick={handleScroll}>
          Check me
        </Button>
      </Box>
      {/* Right Section */}
      <Box flex="1" textAlign="center" ml={8}>
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
