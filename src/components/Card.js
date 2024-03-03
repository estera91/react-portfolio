// Import necessary React and Chakra UI components and additional libraries
import React, { useState, useEffect } from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Image,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
  useMediaQuery
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import "../css/Card.css"; // Import your CSS file for styling

// Functional component for rendering individual cards
const Card = ({ title, description, imageSrc, url, clickImage }) => {
  // Use Chakra UI's useDisclosure hook to manage modal state
  const { isOpen, onOpen, onClose } = useDisclosure();
  // State to track modal open status
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Media query hook to check if the screen width is above a certain value
  const [isLargeScreen] = useMediaQuery("(minWidth: 40em)");

  // Effect to synchronize isOpen state with isModalOpen state
  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  // Event handler for clicking on the card; opens the modal if configured to do so
  const handleClick = (event) => {
    const isImageClick = event.target.tagName.toLowerCase() === "img";

    if (clickImage && isImageClick) {
      onOpen();
    }
  };

  // Event handler for closing the modal
  const handleCloseModal = () => {
    onClose();
  };

  // Event handler to prevent click events from propagating within the modal content
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  // JSX structure for rendering the card
  return (
    <VStack
      className={`card ${isModalOpen ? "modal-open" : ""}`}
      color="black"
      backgroundColor="white"
      cursor={clickImage ? "pointer" : "default"}
      width="100%"
      onClick={handleClick}
      marginbottom="30px"
      padding="20px 20px 20px 20px"
      bg="orange"
      borderRadius="9px"
    >
      {/* Card Image */}
      <Image borderRadius="xl" src={imageSrc} alt={title} />

      {/* Card Content */}
      <VStack spacing={4} p={4} alignItems="flex-start" w="100%" overflow="hidden">
        {/* Title Section */}
        <HStack justifyContent="space-between" alignItems="center" w="100%">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>

        {/* Description Section */}
        <Text color="black" fontSize="25px">
          {description}
        </Text>

        {/* Action Section (See more link and arrow icon) */}
        <HStack spacing={2} alignItems="center" w="100%">
          {url && (
            <Link href={url} isExternal bg="black" color="white" fontSize="25px" paddingLeft="10px" paddingRight="10px" borderRadius="9px">
              See more
            </Link>
          )}
          {clickImage && <FontAwesomeIcon icon={faArrowRight} size="1x" />}
        </HStack>
      </VStack>

      {/* Popup Modal */}
      {clickImage && (
        <Modal isOpen={isOpen} onClose={onClose} width={isLargeScreen ? "80%" : "100%"}>
          <ModalOverlay />
          <ModalContent
            maxW={isLargeScreen ? "900px" : "100%"}
            maxH="100%"
            overflowY="auto"
            bg="rgba(0, 0, 0, 0.6)"
            className="modal-content"
            paddingTop="30px"
            marginTop="0"
          >
            {/* Modal Header */}
            <ModalHeader>{title}</ModalHeader>

            {/* Modal Close Button */}
            <ModalCloseButton color="white" />

            {/* Modal Body */}
            <ModalBody onClick={handleContentClick}>
              <Center>
                {/* Image inside the modal */}
                <Image src={clickImage} alt={title} maxW="100%" />
              </Center>
            </ModalBody>

            {/* Modal Footer */}
            <ModalFooter>
              {/* See more link in the modal footer */}
              <Link href={url} isExternal color="white">
                See more
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </VStack>
  );
};

// Export the Card component as the default export
export default Card;
