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
  Center,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import FullScreenSection from './FullScreenSection';

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionItemWidth = useBreakpointValue({ base: '100%', md: '800px' });

  const handleToggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <FullScreenSection width="100%" backgroundColor="#faca6b" isDarkBackground p={2}  spacing={8}>
      <Heading
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

      <Center>
        <Accordion allowToggle color="black">
          <AccordionItem bg="white" borderRadius="md" width={accordionItemWidth} marginBottom="50px">
            <AccordionButton>
              <Box flex="2" width="100%" textAlign="left" h="100px" w="100%">
                <Center>
                  <Text fontWeight="bold" color="black" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="30px">
                    Job Title 1
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text>Details about Job Title 1</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem bg="white" borderRadius="md" width={accordionItemWidth} marginBottom="50px">
            <AccordionButton>
              <Box flex="1" textAlign="left" h="100px" w="100%">
                <Center>
                  <Text fontWeight="bold" fontSize="20px" w="100%" paddingLeft="20px" paddingTop="30px">
                    Job Title 1
                  </Text>
                </Center>
              </Box>
              <Icon as={openIndex === 0 ? FaAngleUp : FaAngleDown} boxSize={35} />
            </AccordionButton>
            <AccordionPanel bg="#fffde6">
              {/* Content of the sublist for Job Title 1 */}
              <Text>Details about Job Title 1</Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Add more AccordionItems for additional job titles */}
        </Accordion>
      </Center>
    </FullScreenSection>
  );
};

export default ExperienceSection;
