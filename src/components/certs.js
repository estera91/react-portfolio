// Import necessary packages
import React from 'react';
import { Box, Grid, Image, Text, Container,Heading } from '@chakra-ui/react';
import ShowPhotos from './ShowPhotos.js'
// Define your component
const MyComponent = () => {
  const images = [
    process.env.PUBLIC_URL + '/img/JavaScriptcert.jpg',
    process.env.PUBLIC_URL + '/img/networkcert.jpg',
    process.env.PUBLIC_URL + '/img/reactcert.jpg',
    process.env.PUBLIC_URL + '/img/ibm.png',
    process.env.PUBLIC_URL + '/img/ang.png',
    process.env.PUBLIC_URL + '/img/ccna.png',
    // Add more image URLs as needed
  ];
  
  return (
    <Box id="certs" bgColor="black" color="white" p={8}  class="CertsContent">
      <Grid templateColumns="1fr 1fr" gap={8}>
        {/* Section 1: Photo Gallery with Certificates */}
        <Box>
          <ShowPhotos imageUrls={images}  bg="black" />
        </Box>

        {/* Section 2: Text inside an Orange Container */}
        <Container
          
          maxWidth="500px"
          p={6}
          textAlign="center"
          
          paddingTop="0px"
        >
          <Heading fontFamily="Arial" className="CertsHeading" marginTop="50px">
            Let's learn!
          </Heading>
          <Text
         // bgColor="#df7d00"
          bgColor="black"
          color="white"
          paddingTop="40px"
          fontSize="20px"
          borderRadius="9px"
          class="CertText"
          >
            <p  >Welcome to my journey of perpetual growth and exploration as a IT specialist and web developer.
            </p>
            <p>
             I have an insatiable thirst for learning, a passion that drives me to continually expand my knowledge and refine my skills. In this dynamic digital landscape, each certificate and course completed represents a stepping stone in my ongoing pursuit of excellence.
             </p>
            <p>
          As I navigate the world of web development, I enthusiastically embrace challenges, seeking opportunities to delve deeper into the intricacies of the field. 
          </p>
          <p>
          My commitment to staying at the forefront of technology is mirrored in the various achievements along the way.
          </p>
          </Text>
        </Container>
      </Grid>
    </Box>
  );
};

// Export your component
export default MyComponent;
