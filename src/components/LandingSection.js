// Import React and necessary Chakra UI components
import React from "react"; 
import {  VStack} from "@chakra-ui/react"; 

// Import custom components
import FullScreenSection from "./FullScreenSection"; 
import AnimatedSections from "./AnimatedSections";
import Certs from './certs';
import Skills from './skills.js';

// Import CSS for styling
import '../css/LandingSection.css';

// Define picture credits for the background image
const pictureRights = 'Image by <a href="https://www.freepik.com/free-photo/te-headphones-near-laptop_1986426.htm#page=2&query=background%20computer%20work%20pastels%20color&position=49&from_view=search&track=ais&uuid=7d1dc1ff-51a5-455a-8827-d50930e204f0">Freepik</a>';

// Array of words for the AnimatedSections component
const wordsArray = ['PHP', 'Chat GPT', 'Microsoft Designer' , 'HTML5', 'CSS3','Bash','MySQL','REACT','REST API','YII','Yii2','Symfony5','JavaScript','JQuery','CURL','XML','Linux','Windows','MAC','Apache2','Agile','PhPMyAdmmin','Gimp','WorkBench','VisualStudio','Vim','Networking','DNS'];

// URL for the background image
const backgroundImage = process.env.PUBLIC_URL +'background.jpg';



// LandingSection functional component
const LandingSection = () => (
  // FullScreenSection component with customized styles
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
    {/* Vertical stack of components with specified spacing and width */}
    <VStack spacing={16} w="100%">
      {/* Vertical stack for the first section with additional styling */}
      <VStack spacing={4} alignItems="center" w="100%">
        {/* AnimatedSections component with data background and picture credits */}
        <AnimatedSections data-background={pictureRights} />
        {/* Skills component displaying skills using wordsArray and a background image */}
        <Skills headerText="Skills" backgroundImage={backgroundImage} words={wordsArray} />;
        {/* Certs component displaying certifications with a set height */}
        <Certs height="50vh" />;
        {/* Additional components can be added here */}
      </VStack>
      {/* Vertical stack for the second section with additional styling */}
      <VStack spacing={6} w="100%">
        {/* Additional content for the second VStack */}
      </VStack>
    </VStack>
  </FullScreenSection>
);

// Export the LandingSection component as the default export
export default LandingSection;
