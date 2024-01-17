/**
 * AnimatedSections Component
 *
 * This component represents a section of the webpage with animated content and styling.
 * It includes a heading with the name and role of the web developer, along with a description box
 * containing a TypingAnimation component for showcasing a project description.
 *
 * @component
 * @returns {JSX.Element} - Returns a React element representing the animated sections.
 */

import React from 'react';
import '../css/AnimatedSections.css'; // Import your CSS file for styling
import { Box, Center, Heading, Image } from '@chakra-ui/react';
import TypingAnimation from './TypingAnimation';

/**
 * @function AnimatedSections
 *
 * @returns {JSX.Element} - Returns a React element representing the animated sections.
 */
const AnimatedSections = () => {

  // Styles for the background image and overall section
  const pageStyles = {
    backgroundImage: "%PUBLIC_URL%/img/orange.jpg", // Adjust the path to your background image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh',
  };

  // Project details for TypingAnimation
  const projects = [ 
    { 
      text: ' Hello, my name is Estera Bulkiewicz. With years of experience as an IT specialist, I have mastered web development, security, and client support. I can create sophisticated websites using various platforms, such as WordPress, Wix, Bitrix, React, and Yii. I am fluent in the most popular languages used in web development, such as HTML5, CSS, JavaScript, PHP, REACT, and JQuery. I also have a deep understanding of REST API and the management of servers, including Apache2 and PhpMyAdmin. Welcome to my portfolio ! ',
      speed: "50"
    }, 
  ];
  const imgSrc = process.env.PUBLIC_URL + '/img/jay2.jpg';
  // Render the animated sections
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
      >
        Estera Bulkiewicz 
        <p font-size="15px">Web Developer - IT Specialist</p> 
      </Heading>

      {/* Animated Sections Container */}
      <Center className="animated-sections-container" overflow="hidden">
        {/* Description Box */}
        <Box flex="60%" p="20px" bg="black" opacity="0.8" color="white" className="textDescBox"  animation="slideInLeft 1s ease-in-out" marginLeft='50px' fontSize="25px">
          {projects.map((project) => ( 
            <TypingAnimation 
              text={project.text} 
              speed={project.speed} 
            /> 
          ))}
        </Box>

        {/* Right Section with Image */}
        <Box
          flex="40%"
          p="20px"
          animation="slideInRight 1s ease-in-out"
          position="relative"
        >
          <Center>
            <Image
              position="absolute"
              padding="10px 10px 10px 10px"
              borderRadius="50%"
              border="2px dashed #df7d00"
              pointerEvents="none"
              src={imgSrc}
              alt="Right Section"
            />
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default AnimatedSections;
