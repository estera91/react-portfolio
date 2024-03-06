// Import necessary dependencies from React and external libraries
import React, { useEffect, useRef } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {  faGithub, faLinkedin,  
} from "@fortawesome/free-brands-svg-icons"; 
import { Box, HStack, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react"; // Import Menu components and IconButton
import { HamburgerIcon } from '@chakra-ui/icons'; // Import hamburger icon

// Array of social media links with corresponding icons
const socials = [ 
 /*{ 
   icon: faEnvelope, 
   url: "mailto: estelaszwar@protonmail.com", 
 },*/ 
 { 
   icon: faGithub, 
   url: "https://github.com/estera91/react-portfolio", 
 }, 
 { 
   icon: faLinkedin, 
   url: "https://www.linkedin.com/in/estera-bulkiewicz-83789a122/?originalSubdomain=pl", 
 }, 
 /* Add more social media links as needed */
]; 

/** 
* Header component demonstrating the use of useRef and useEffect hooks.
* The useRef hook is used to create a reference to a DOM element (header) to manipulate its styles and run a transition animation.
* The useEffect hook is used to set up and clean up a scroll event listener for animation and smooth section navigation.
*/
const Header = () => { 
 const headerRef = useRef(null); 
 
 // useEffect to handle scroll events for header animation
 useEffect(() => { 
   let prevScrollPos = window.scrollY; 
 
   const handleScroll = () => { 
     const currentScrollPos = window.scrollY; 
     const headerElement = headerRef.current; 
     if (!headerElement) { 
       return; 
     } 
     if (prevScrollPos > currentScrollPos) { 
       headerElement.style.transform = "translateY(0)"; 
     } else { 
       headerElement.style.transform = "translateY(-200px)"; 
     } 
     prevScrollPos = currentScrollPos; 
   } 
   // Add scroll event listener
   window.addEventListener('scroll', handleScroll) 

   // Clean up by removing the scroll event listener
   return () => { 
     window.removeEventListener('scroll', handleScroll) 
   } 
 }, []); 

 // Function to handle smooth navigation to different sections on link click
 const handleClick = (anchor) => () => { 
   const id = `${anchor}-section`; 
   const element = document.getElementById(id); 
   if (element) { 
     element.scrollIntoView({ 
       behavior: "smooth", 
       block: "start", 
     }); 
   } 
 };

 return ( 
   // Fixed position Box element for the header
   <Box 
   position="fixed"
   bgColor="black"
   top={0}
   left={0}
   right={0}
   translateY={0}
   transitionProperty="transform"
   transitionDuration=".3s"
   transitionTimingFunction="ease-in-out"
   backgroundColor="black"
   inputref={headerRef}
   zIndex="1000"
   > 
     {/* Header content within a Box with styling */}
     <Box color="white" maxwidth="1280px" margin="0 auto" bgColor="black"> 
       {/* HStack for horizontal alignment and spacing of elements */}
       <HStack 
         px={16} 
         py={4} 
         justifyContent="space-between" 
         alignItems="center" 
       > 
         {/* Social media links */}
         <nav> 
           <HStack spacing={8}> 
             {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
               > 
                 <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
               </a> 
             ))} 
           </HStack> 
         </nav> 

         {/* Navigation links for different sections */}
         <nav> 
           {/* HStack for large screens */}
           <HStack spacing={8} className="headerMenu" display={["none", null, "flex"]}> 
             <a href="#skills" onClick={handleClick("skills")}> 
               Skills 
             </a>
             <a href="#certs" onClick={handleClick("certs")}> 
               Certificats
             </a>
             <a href="#projects" onClick={handleClick("projects")}> 
               Projects 
             </a> 
             <a href="#experience" onClick={handleClick("experience")}> 
               Experience 
             </a> 
             <a href="#contactme" onClick={handleClick("contactme")}> 
               Contact Me 
             </a> 
           </HStack> 
           {/* Menu for small screens */}
           <Menu>
             <MenuButton as={IconButton} icon={<HamburgerIcon />} display={["block", null, "none"]} /> 
             <MenuList bgColor="grey">
               <MenuItem bgColor="grey" onClick={handleClick("#skills")}><a href="#skills" w="100%">Skills</a></MenuItem>
               <MenuItem bgColor="grey" onClick={handleClick("#certs")}><a href="#certs">Certificats</a></MenuItem>
               <MenuItem bgColor="grey" onClick={handleClick("#projects")}><a href="#projects">Projects</a></MenuItem>
               <MenuItem bgColor="grey" onClick={handleClick("#experience")}><a href="#experience">Experience</a></MenuItem>
               <MenuItem bgColor="grey" onClick={handleClick("#contactme")}><a href="#contactme">Contact Me</a></MenuItem>
             </MenuList>
           </Menu>
         </nav> 
       </HStack> 
     </Box> 
   </Box> 
 ); 
};

export default Header;
