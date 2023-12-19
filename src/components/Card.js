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

const Card = ({ title, description, imageSrc, url, clickImage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLargeScreen] = useMediaQuery("(min-width: 40em)");

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleClick = (event) => {
    const isImageClick = event.target.tagName.toLowerCase() === "img";

    if (clickImage && isImageClick) {
      onOpen();
    }
  };

  const handleCloseModal = () => {
    onClose();
  };

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <VStack
      className={`card ${isModalOpen ? "modal-open" : ""}`}
      color="black"
      backgroundColor="white"
      cursor={clickImage ? "pointer" : "default"}
      width="100%"
      onClick={handleClick}
      marginBottom="30px"
      padding="20px 20px 20px 20px"
      bg="orange"
      borderRadius="9px"
      
    >
      <Image borderRadius="xl" src={imageSrc} alt={title}  />
      <VStack spacing={4} p={4} alignItems="flex-start" w="100%" overflow="hidden" >
        <HStack justifyContent="space-between" alignItems="center" w="100%">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>
        <Text color="black" fontSize="25px">
          {description}
        </Text>
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
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton  color="white" />
            <ModalBody onClick={handleContentClick}>
            
              <Center>
                <Image src={clickImage} alt={title} maxW="100%" />
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
