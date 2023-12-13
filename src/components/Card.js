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
  Center
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import '../css/Card.css'; // Import your CSS file for styling

// ... (imports)

const Card = ({ title, description, imageSrc, url, clickImage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleClick = (event) => {
    // Check if the click occurred on the Image element
    const isImageClick = event.target.tagName.toLowerCase() === 'img';

    if (clickImage && isImageClick) {
      onOpen();
    }
  };

  const handleCloseModal = () => {
    onClose();
  };

  const handleContentClick = (event) => {
    // Prevent the event from bubbling up to the modal overlay
    event.stopPropagation();
  };

  return (
    <VStack
      className={`card ${isModalOpen ? 'modal-open' : ''}`}
      color="black"
      backgroundColor="white"
      cursor={clickImage ? "pointer" : "default"}
      borderRadius="xl"
      width="100%"
      onClick={handleClick}
    >
      <Image borderRadius="xl" src={imageSrc} alt={title} />
      <VStack spacing={4} p={4} alignItems="flex-start" w="100%" overflow="hidden">
        <HStack justifyContent="space-between" alignItems="center" w="100%">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>
        <HStack spacing={2} alignItems="center" w="100%">
          {url && (
            <Link href={url} isExternal>
              See more
            </Link>
          )}
          {clickImage && (
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          )}
        </HStack>
      </VStack>

      {/* Popup Modal */}
      {clickImage && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" onOverlayClick={handleCloseModal}>
          <ModalOverlay />
          <ModalContent
            maxW="900px"
            maxH="100%"
           // marginTop="-1px"
            overflowY="auto"
            bg="rgba(0, 0, 0, 0.6)"
            className="modal-content"
          >
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody onClick={handleContentClick}>
              <Center>
                <Image src={clickImage} alt={title} maxW="700px" />
              </Center>
            </ModalBody>
            <ModalFooter>
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

export default Card;
