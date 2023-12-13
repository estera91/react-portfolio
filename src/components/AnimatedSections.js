import React from 'react';
import '../css/AnimatedSections.css'; // Import your CSS file for styling
import { Box, Center, Heading, Text, Image } from '@chakra-ui/react';
import TypingAnimation from './TypingAnimation';




const AnimatedSections = () => {



  const pageStyles = {
    backgroundImage: "%PUBLIC_URL%/backgroung.jpg",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    
   // opacity:"0.8"

  
  };
  const projects = [ 
    { 
      text: "Text o mnie, Text o mnie,Text o mnie,Text o mnie,Text o mnie,Text o mnie Text o mnie, Text o mnie,Text o mnie,Text o mnie,Text o mnie,Text o mni Text o mnie, Text o mnie,Text o mnie,Text o mnie,Text o mnie,Text o mni Text o mnie, Text o mnie,Text o mnie,Text o mnie,Text o mnie,Text o mni Text o mnie, Text o mnie,Text o mnie,Text o mnie,Text o mnie,Text o mni", 
      speed: "100"
    }, 
  ]

  return (
    <div style={pageStyles} className="sekcjajeden" >
      <Heading
        as="h1"
        align="right"
        textAlign="center"
        py="2"
        size="lg"
        max-width="900px"
        backgroundColor="black"
        paddingTop="70px"
        marginTop=""
        marginLeft="3%"
        color="white"
        fontSize="100px" 
        fontFamily="Helvetica"
        opacity="0.8"
        
        // Adjust the values as needed
      >
        Estera Bulkiewicz 
       <p font-size="15px">Web Developer</p> 
      </Heading>


      <Center h="40vh" className="animated-sections-container" overflow="hidden">
        <Box flex="60%" p="20px" bg="#f5f5f5   " animation="slideInLeft 1s ease-in-out" marginLeft='50px' fontSize="25px">
         
          {projects.map((project) => ( 
         <TypingAnimation 
           text={project.text} 
           speed={project.speed} 
      
         /> 
       ))} 
        </Box>
        <Box
          flex="40%"
          p="20px"
          bg="#faca6b"
          animation="slideInRight 1s ease-in-out"
          position="relative"
        >
          <Center>
            <Image
              position="absolute"
              padding="10px 10px 10px 10px"
              borderRadius="50%"
              border="2px dashed #555"
              pointerEvents="none"
              src="https://iprivateer.com/wp-content/uploads/2023/12/estera.png"
              alt="Right Section"
            />
          </Center>
        </Box>
      </Center>

    </div>
    
    
  );
};

export default AnimatedSections;
