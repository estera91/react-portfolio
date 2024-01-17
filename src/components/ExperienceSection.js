import React, { useState } from 'react';
import {
  VStack,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
  Box,
  Grid,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import FullScreenSection from './FullScreenSection';

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
        marginBottom="50px"
        paddingLeft="30px"
        paddingRight="30px"
        fontSize="80px"
        fontFamily="Helvetica"
        backgroundColor="Black"
      >
        Experience
      </Heading>

      <Center width="100%" className="Experience">
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
              marginBottom="50px"
            >
              <Box flex="2" width="100%" textAlign="left"h="120px"  w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="30px">
                  10/2019—Present  Freelance 
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text textAlign="left" paddingLeft="30px">
                <p>
                  Responsibilities : 
                  <ul>
                    <li>
                    Creating  websites based on Wordpress, Wix, Bitrix
                    </li>
                    <li>Implementing security for websites with technology Cloudflare</li>
                    <li>Managing server Apache2, PHPMyAdmin</li>
                    <li>Writing code in projects with : HTML5, CSS, JavaScript, PHP, JQuery, REST, REACT 
                                  API, MySQL, Bash, XML</li>
                    <li>Writing code for Unit tests</li>
                    <li>Knowledge about frameworks: YII, Symfony</li>
                    <li>Setting up  security on customers computers (Windows, MAC, Linux)</li>
                    <li>Resolving computers problems (Windows, Linux, MAC)</li>
                    <li>Creating local networks, setting up routers, VPN</li>
                    <li>Managing CPanel</li>
                    <li>Working with clients
                    </li>
                  </ul>
                </p>

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
              <Box flex="2" width="100%" textAlign="left" h="120px"  w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="30px">
                  05/2015—07/2019 PHP Programmer at Cube Group S. A., Warsaw
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text textAlign="left" paddingLeft="30px">
                <p>
                  Responsibilities : 
                  <ul>
                    <li>
                     Creating web applications with 
using framework Yii,Yii2 using PHP(OOP,MVC), JavaScript, JQuery, HTML5, 
CSS , Angular
                    </li>
                    <li>Writing projects in  Symfony2, Yii2</li>
                    <li>Writing and managing 
Application Programming Interface (API, REST API)</li>
                    <li>Writing code in projects with : HTML5, CSS, JavaScript, PHP, JQuery, REST, REACT 
                                  API, MySQL, Bash, XML</li>
                    <li>Creation and 
maintenance XML, JSON data and integrations</li>
                    <li>Ceating documentations </li>
                    <li>Creating relational databases in MySql</li>
                    <li>Management and configuration 
of APACHE, PHP My Admin</li>
                    <li>Working with 
GIT, VIM , Workbench</li>
                    <li>Working and providing with e-commerce projects</li>
                    <li>Programming with Agile metodology
                    </li>
                  </ul>
                </p>

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
              <Box flex="2" width="100%" textAlign="left" h="120px" w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="30px">
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
                <p>
                  Responsibilities : 
                  <ul>
                    <li>
                    Creating web applications based on framework (MVC) 
line Yii, Yii2 using languages PHP(OOP), JavaScript, JQuery, HTML5, CSS3
                    </li>
                    <li>Creating dedicated modules and extensions (using composer)</li>
                    <li>Preparing templates for newsletters and Landing pages</li>
                    <li>Creating 
relational databases in MySql</li>
                    <li>Managing Database MySQL, PHPMyAdmin</li>
                    <li>Programming with version control using SVN, GIT (editor NetBeans)</li>
                    <li>Creating relational databases in MySql</li>
                    <li>Management and configuration 
of APACHE, PHP My Admin</li>
                    <li>Working with 
GIT, VIM , Workbench</li>
                    <li> Contact with the customer</li>
                    <li>Programming with Agile metodology
                    </li>
                  </ul>
                </p>

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
                  <Text fontWeight="bold" color="black"h="120px" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="30px">
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
                <p>
                  Responsibilities : 
                  <ul>
                    <li>
                    Creating documentation for millitary applications and 
modules in C language

                    </li>
                    <li>Looking for errors in application written in C language </li>
                  </ul>
                </p>
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
              <Box flex="2" width="100%" textAlign="left"h="120px"  w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="30px">
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
                <p>
                  Responsibilities : 
                  <ul>
                    <li>
                    Writing applications in language Clipper and In C#
                    </li>
                    <li>Looking for errors in application written in C language </li>
                    <li>Technical support for applications</li>
                    <li>Creation of technical 
documentation for the libraries, programs, functions.</li>
                    <li>Writing the HTML 
interface libraries in C ++</li>
                  </ul>
                </p>
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
              <Box flex="2" width="100%" textAlign="left" h="120px" w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="30px">
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
                <p>
                  Responsibilities : 
                  <ul>
                    <li>
                    Writing applications in language Clipper and In C#
                    </li>
                    <li>Looking for errors in application written in C language </li>
                    <li>Technical support for applications</li>
                    <li>Creation of technical 
documentation for the libraries, programs, functions.</li>
                    <li>Writing the HTML 
interface libraries in C ++</li>
                  </ul>
                </p>
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
              <Box flex="2" width="100%" textAlign="left"h="120px"  w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px"  w="100%" paddingLeft="20px" paddingTop="30px">
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
                <p>
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
                </p>
              </Text>
            </AccordionPanel>
          </AccordionItem>

          





























         
          {/* Add more AccordionItems for additional job titles */}
        </Accordion>
      </Center>
    </FullScreenSection>
  );
};

export default ExperienceSection;
