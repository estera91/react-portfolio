import React from "react"; 
import { Avatar, Center, Heading, VStack, Image } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import Slider from './Slider';
import AnimatedSections from "./AnimatedSections";
import Certs from './certs';
import AnimatedImage from './AnimatedImage.js';
import ShowPhotos from './ShowPhotos.js'
import '../css/LandingSection.css'; // Import your CSS file for styling
 
const greeting = "Hello, my name is Estera!"; 
const bio1 = "I am a Web Developerr"; 
const bio2 = "specialized in Fullstack, React and PHP"; 
const fontFamily = "Arial"; 
const pictureRights = 'Image by <a href="https://www.freepik.com/free-photo/te-headphones-near-laptop_1986426.htm#page=2&query=background%20computer%20work%20pastels%20color&position=49&from_view=search&track=ais&uuid=7d1dc1ff-51a5-455a-8827-d50930e204f0">Freepik</a>'
const pictureRight2='<a href="https://www.freepik.com/free-vector/education-learning-concept-love-reading-people-reading-students-studying-preparing-examination-library-book-lovers-readers-modern-literature-flat-cartoon-vector-illustration_25273862.htm#query=vector%20png%20studying&position=41&from_view=search&track=ais&uuid=3879a38a-5b02-421c-855d-0dbd7a05eab0">Image by jcomp</a> on Freepik'

const images = [
  process.env.PUBLIC_URL + '/JavaScriptcert.jpg',
  process.env.PUBLIC_URL + '/networkcert.jpg',
  process.env.PUBLIC_URL + '/reactcert.jpg',
  // Add more image URLs as needed
];
const LandingSection = () => (

 

  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="black"
    fontFamily="Arial"
    maxW="100%"
    right="0px"
    left="0px"
  >
    <VStack spacing={16} w="100%">
      <VStack spacing={4} alignItems="center" w="100%">
        <AnimatedSections  data-background={pictureRights} />
      {/*  <AnimatedImage imagePath={require("../photos/na_feb_36.png")} imageRight={pictureRight2} />*/}
       <Certs height="50vh" />*
      {/*<ShowPhotos imageUrls={images}  bg="black"/>*/}
      </VStack>
      <VStack spacing={6} w="100%">
        {/* Additional content for the second VStack */}
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
