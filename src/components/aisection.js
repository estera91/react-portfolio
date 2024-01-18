import React from 'react';
import { Flex, Box, Text, Image, ChakraProvider } from '@chakra-ui/react';

const ResponsiveComponent = () => {
const img1 = process.env.PUBLIC_URL + '/img/ai1.jpeg';
const img2 = process.env.PUBLIC_URL + '/img/ai2.jpeg';
const img3 = process.env.PUBLIC_URL + '/img/ai3.jpeg';
const img4 = process.env.PUBLIC_URL + '/img/ai4.jpeg';
const img5 = process.env.PUBLIC_URL + '/img/ai5.jpeg';

  return (
    <ChakraProvider>
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        bg="black"
        color="white"
      >
        <Flex justify="center" w="100%">
          <Image src={img5} alt="Image 1" boxSize="400px" m={2} />
        </Flex>
            <Text fontSize="20px"  mb={4} marginRight="70px" marginLeft="70px" marginBottom="80px" marginTop="80px">
            My passion for AI....
            In the captivating fusion of innovation, I shape a future where AI breathes life into ideas. With trusted companions like ChatGPT 4 and Microsoft Designer, I elevate conversations and turn imagination into reality. Welcome to my digital atelier, where passion meets pixels, pushing the boundaries of AI-driven artistry.
            </Text>
         
        
        <Flex justify="center" w="100%">
          <Image src={img1} alt="Image 1" boxSize="200px" m={2} />
          <Image src={img2} alt="Image 2" boxSize="200px" m={2} />
          <Image src={img3} alt="Image 3" boxSize="200px" m={2} />
          <Image src={img4} alt="Image 3" boxSize="200px" m={2} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default ResponsiveComponent;
