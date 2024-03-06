import React, { useState } from 'react';
import {
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
  Box,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import FullScreenSection from './FullScreenSection';
import '../css/FullScreenSection.css'

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionItemWidth = useBreakpointValue({ base: '100%', md: '100%' });

  const handleToggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <FullScreenSection width="100%" backgroundColor="black" isDarkBackground p={2} spacing={8}>
      <Heading
        id="experience"
        as="h1"
        align="center"
        textAlign="center"
        py="2"
        size="lg"
        width="100%"
        paddingTop="50px"
        paddingBottom="40px"
        marginTop="40px"
        marginbottom="50px"
        paddingLeft="30px"
        paddingRight="30px"
        fontSize="80px"
        fontFamily="Helvetica"
        backgroundColor="Black"
      >
        Experience
      </Heading>

      <Center width="100%" class="Experience" text-align="left" align="left">
        <Accordion bg="#" allowToggle color="black" align="center" width="100%" paddingLeft="10%" paddingRight="10%">
          <AccordionItem
            bg="#df7d00"
            borderRadius="9px"
            width="100%" // Set to 100% for devices with screen lower than 820px
            maxW="100%" // Set maximum width to 100% for all screens
            marginBottom="50px"
            border="0px"
          >
            <AccordionButton
              width="100%" // Set to 100% for devices with screen lower than 820px
              maxW="100%" // Set maximum width to 100% for all screens
              marginbottom="50px"
            >
              <Box flex="2" width="100%" textAlign="left" minHeight="120px"  w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="20px" paddingBottom="20px">
                  10/2019—Present  Freelance 
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text textAlign="left" paddingLeft="30px">
                
                  Responsibilities : 
                  
                  <ul  text-align="left" align="left" >
                    <li>
                    Designed, developed, and updated websites using PHP, HTML, CSS, and JavaScript, following web 
development standards and best practices.
                    </li>
                    <li>Built and managed Content Management Systems (CMS) using WordPress, Wix, and Bitrix, customizing 
themes and plugins to meet client needs</li>
                    <li>Integrated MySQL databases and performed queries and operations, ensuring data integrity and security.</li>
                    <li>Tested and optimized web performance and security, using tools such as Google PageSpeed Insights, 
GTmetrix, and SSL Labs.</li>
                    <li> Documented and maintained web development projects, using tools such as Git, GitHub, and Markdown</li>
                    <li> Implemented web payment services, using APIs such as Stripe, PayPal, and Braintree</li>
                    <li> Coded in PHP, React, jQuery, JavaScript, HTML5, CSS, and Bash, using frameworks such as Yii2 and 
Symfony</li>
                    <li> Performed unit tests for REST API in PHP, using Symfony and PHPUnit.</li>
                    <li> Used AI tools such as Chat GPT and Microsoft designer, to enhance user interaction and web design</li>
                    <li> Implemented security for websites, using techniques such as encryption, authentication, and 
authorization.</li>
                    <li> Configured and managed Cloudflare, Apache2, and cPanel, to improve web hosting and domain 
management.
                    </li>
                  </ul>
                  </Text>

              
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            bg="#f9b700"
            borderRadius="9px"
            width="100%" // Set to 100% for devices with screen lower than 820px
            maxW="100%" // Set maximum width to 100% for all screens
            marginBottom="50px"
            border="0px"
          >
            <AccordionButton
              width="100%" // Set to 100% for devices with screen lower than 820px
              maxW="100%" // Set maximum width to 100% for all screens
              marginBottom="50px"
            >
              <Box flex="2" width="100%" textAlign="left" minHeight="120px"  w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="20px" paddingBottom="20px">
                  05/2015—07/2019 PHP Programmer at Cube Group S. A., Warsaw
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text textAlign="left" paddingLeft="30px">
                
                  Responsibilities : 
                  
                  <ul>
                    <li>
                    Developed and maintained web applications using various frameworks such as Yii, Yii2, React, WordPress, 
Angular, and Symfony2

                    </li>
                    <li> Utilized PHP (OOP, MVC), JavaScript, jQuery, HTML5, and CSS to create dynamic and responsive web 
pages</li>
                    <li> Wrote and managed Application Programming Interface (API) using RESTful principles and best practices
</li>
                    <li> Created and maintained XML and JSON data for data exchange and storage</li>
                    <li> Created documentation for web applications using tools such as Sphinx and Markdown</li>
                    <li> Designed and implemented relational databases in MySQL, following the principles of database 
normalization and optimization </li>
                    <li>Managed and configured APACHE web server using Linux Ubuntu, performing tasks such as installation, 
security, and backup</li>
                    <li> Used GIT, NetBeans, and Workbench as the preferred tools for version control, development, and 
database management</li>
                    <li> Worked with e-commerce projects, integrating payment gateways, shopping carts, and inventory systems</li>
                    <li> Programmed with Agile methodology, participating in daily stand-ups, sprints, and retrospectives</li>
                  </ul>
                
                  </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            bg="#df7d00"
            borderRadius="9px"
            width="100%" // Set to 100% for devices with screen lower than 820px
            maxW="100%" // Set maximum width to 100% for all screens
            marginBottom="50px"
            border="0px"
          >
            <AccordionButton
              width="100%" // Set to 100% for devices with screen lower than 820px
              maxW="100%" // Set maximum width to 100% for all screens
              marginBottom="50px"
            >
              <Box flex="2" width="100%" textAlign="left" minHeight="120px" w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="20px" paddingBottom="20px">
                  02/2013—05/2015
                  Junior programmer at Ce5 Sp Z o.o., Otwock
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text textAlign="left" paddingLeft="30px">
                  Responsibilities : 
                  
                  <ul>
                    <li>
                    Developed and maintained web applications using MVC frameworks such as Yii and Yii2
                    </li>
                    <li> Utilized PHP (OOP), JavaScript, jQuery, HTML5, and CSS3 to create dynamic and responsive web pages</li>
                    <li> Created dedicated modules and extensions using composer, a dependency manager for PHP</li>
                    <li>Prepared and sent newsletters to clients using email marketing tools and best practices</li>
                    <li> Designed and implemented relational databases in MySQL, following the principles of database 
normalization</li>
                    <li> Created professional documentation for applications using tools such as Sphinx and Doxygen</li>
                    <li> Managed database operations using MySQL and PHPMyAdmin, performing tasks such as backup, restore, 
and optimization</li>
                    <li> Programmed with version control using SVN and GIT, using NetBeans as the preferred IDE</li>
                    <li> Worked on Linux (Ubuntu) environment, using command-line tools and shell scripts</li>
                    <li>  Communicated with customers to gather requirements, provide feedback, and deliver solutions</li>
                    <li> Programmed with Agile methodology, participating in daily stand-ups, sprints, and retrospectives
                    </li>
                  </ul>
                  </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            bg="#f9b700"
            borderRadius="9px"
            width="100%" // Set to 100% for devices with screen lower than 820px
            maxW="100%" // Set maximum width to 100% for all screens
            marginBottom="50px"
            border="0px"
          >
            <AccordionButton
              width="100%" // Set to 100% for devices with screen lower than 820px
              maxW="100%" // Set maximum width to 100% for all screens
              marginBottom="50px"
            >
              <Box flex="2" width="100%" textAlign="left"  w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" minHeight="120px" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="20px" paddingBottom="20px">
                  02/2013—04/2013
                  Junior programmer at WB Electronics, Warsaw
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text textAlign="left" paddingLeft="30px">
            
                  Responsibilities : 
                  
                  <ul>
                    <li>
                    Creating documentation for millitary applications and 
modules in C language

                    </li>
                    <li>Looking for errors in application written in C language </li>
                  </ul>
              
                  </Text> 
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            bg="#df7d00"
            borderRadius="9px"
            width="100%" // Set to 100% for devices with screen lower than 820px
            maxW="100%" // Set maximum width to 100% for all screens
            marginBottom="50px"
            border="0px"
          >
            <AccordionButton
              width="100%" // Set to 100% for devices with screen lower than 820px
              maxW="100%" // Set maximum width to 100% for all screens
              marginBottom="50px"
            >
              <Box flex="2" width="100%" textAlign="left" minHeight="120px"  w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="20px" paddingBottom="20px">
                  04/2010—04/2012
                  Programmer at Sunbajt Sp. z o.o., Warsaw
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text textAlign="left" paddingLeft="30px">
                
                  Responsibilities : 
                
                  <ul>
                    <li>
                    Developed and deployed advanced web applications using PHP (structural) and JavaScript, without relying 
on any frameworks

                    </li>
                    <li> Designed and implemented relational databases in MySQL, following the principles of database 
normalization and optimization
 </li>
                    <li> Provided customer support and troubleshooting for web applications, ensuring customer satisfaction and 
retention
</li>
                    <li>Communicated with customers to gather requirements, provide feedback, and deliver solutions</li>
                
                  </ul>
                  </Text> 
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            bg="#f9b700"
            borderRadius="9px"
            width="100%" // Set to 100% for devices with screen lower than 820px
            maxW="100%" // Set maximum width to 100% for all screens
            marginBottom="50px"
            border="0px"
          >
            <AccordionButton
              width="100%" // Set to 100% for devices with screen lower than 820px
              maxW="100%" // Set maximum width to 100% for all screens
              marginBottom="50px"
            >
              <Box flex="2" width="100%" textAlign="left" minHeight="120px" w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="20px" paddingBottom="20px" >
                  04/2010—04/2012
                  Programmer at Luxbit Sp. z o.o., Warsaw
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text textAlign="left" paddingLeft="30px">
                
                  Responsibilities : 
                 
                  <ul>
                    <li>
                    Developed and maintained applications using Clipper, a programming language for DOS, in Visual 
Flagship, an IDE and compiler for Clipper
                    </li>
                    <li> Provided technical support for the accounting program, resolving issues and ensuring customer 
satisfaction
 </li>
                    <li> Created technical documentation for the libraries, programs, and functions, using tools such as Doxygen 
and Markdown</li>
                    <li>Wrote HTML interface libraries in C++, enabling web-based access and interaction with the applications</li>
                    <li> Synchronized between physical devices, such as automatic card barrier, and computer application, using 
protocols such as TCP/IP and RS-232
</li>
                  </ul>
                  </Text> 
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            bg="green"
            borderRadius="9px"
            width="100%" // Set to 100% for devices with screen lower than 820px
            maxW="100%" // Set maximum width to 100% for all screens
            marginBottom="50px"
            border="0px"
          >
            <AccordionButton
              width="100%" // Set to 100% for devices with screen lower than 820px
              maxW="100%" // Set maximum width to 100% for all screens
              marginBottom="50px"
            >
              <Box flex="2" width="100%" textAlign="left" minHeight="120px"  w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px"  w="100%" paddingLeft="20px" paddingTop="20px" paddingBottom="20px">
                  Education :
                  09/2007—06/2011 IT Specialist, Technical nuclear school No. 2 in Otwock in Poland
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text textAlign="left" paddingLeft="30px">
              
                  Responsibilities : 
                
                  <ul>
                    <li>
                    Learning about programation in C++, Html, writing macros for Excel, bash
                    </li>
                    <li>Learning creation and management of databases in MySQL</li>
                    <li>Learning about basics of creating and managing networks </li>
                    <li>Learning how to use graphics programs, preparing banners, graphical interfaces for WEB</li>
                    <li>Science of electronic subsystems in computing devices, binary systems </li>
                    
                  </ul>
                  </Text> 
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </FullScreenSection>
  );
};

export default ExperienceSection;
