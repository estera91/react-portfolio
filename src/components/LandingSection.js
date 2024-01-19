import React from "react"; 
import { Avatar, Center, Heading, VStack, Image } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 

import AnimatedSections from "./AnimatedSections";
import Certs from './certs';

import '../css/LandingSection.css'; // Import your CSS file for styling
import Skills from './skills.js';


const pictureRights = 'Image by <a href="https://www.freepik.com/free-photo/te-headphones-near-laptop_1986426.htm#page=2&query=background%20computer%20work%20pastels%20color&position=49&from_view=search&track=ais&uuid=7d1dc1ff-51a5-455a-8827-d50930e204f0">Freepik</a>'

const wordsArray = ['PHP', 'Chat GPT', 'Microsoft Designer' , 'HTML5', 'CSS3','Bash','MySQL','REACT','REST API','YII','Yii2','Symfony5','JavaScript','JQuery','CURL','XML','Linux','Windows','MAC','Apache2','Agile','PhPMyAdmmin','Gimp','WorkBench','VisualStudio','Vim','Networking','DNS']; // Replace with your array of words
const backgroundImage = process.env.PUBLIC_URL +'background.jpg';


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
      <Skills  headerText="Skills" backgroundImage={backgroundImage} words={wordsArray} />;

     
       <Certs  height="50vh" />*
      {/*<ShowPhotos imageUrls={images}  bg="black"/>*/}
      </VStack>
      <VStack spacing={6} w="100%">
        {/* Additional content for the second VStack */}
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
