// ImageGallery.js

import React from 'react';
import {
  Box,
  Image,
  Flex,
  SimpleGrid,
  useMediaQuery,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import '../css/ShowPhotos.css';  // Import CSS file for styling

// ImageGallery functional component
const ImageGallery = ({ imageUrls }) => {
  // Use Chakra UI hooks for modal functionality
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Function to open modal with selected image
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    onOpen();
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
    onClose();
  };

  // Function to handle modal content click and stop propagation
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  // Media query hook to determine screen size
  const [isLargeScreen, isTabletScreen, isPhoneScreen] = useMediaQuery([
    "(min-width: 50em)",
    "(min-width: 30em) and (max-width: 50em)",
    "(max-width: 30em)",
  ]);

  return (
    <Box p={4} paddingTop="50px" paddingBottom="50px">
      {/* Responsive image grid */}
      {isLargeScreen ? (
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {imageUrls.map((imageUrl, index) => (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="center"
              style={{
                width: '100%',
                '@media screen and (min-width: 40em)': {
                  width: isTabletScreen ? '50%' : '33.33%',
                },
                '@media screen and (min-width: 60em)': {
                  width: isLargeScreen ? '33.33%' : isTabletScreen ? '50%' : '100%',
                },
                marginTop: isLargeScreen ? '20px' : '10px',
              }}
              onClick={() => openModal(imageUrl)}
            >
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                maxW="100%"
                objectFit="cover"
                borderRadius="md"
              />
            </Flex>
          ))}
        </SimpleGrid>
      ) : (
        // For smaller screens, display images in a single column
        imageUrls.map((imageUrl, index) => (
          <Flex
            key={index}
            alignItems="center"
            justifyContent="center"
            style={{ width: '100%', marginTop: '50px' }}
            onClick={() => openModal(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={`Image ${index + 1}`}
              maxW="100%"
              objectFit="cover"
              borderRadius="md"
              style={{ marginTop: '50px' }}
            />
          </Flex>
        ))
      )}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} className="modalGallery" bg="black">
        <ModalOverlay />
        {/* Modal content */}
        <ModalContent className='gallery-item'>
          <ModalHeader textAlign="center">Image Preview</ModalHeader>
          <ModalCloseButton top="-25px" color="white" paddingTop="40px" />
          <ModalBody onClick={handleContentClick}>
            {/* Display selected image in modal */}
            <Flex alignItems="center" justifyContent="center">
              <Image
                src={selectedImage}
                alt="Image Preview"
                maxH="70vh"
                objectFit="contain"
                borderRadius="md"
              />
            </Flex>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </Box>
  );
};

// Export the ImageGallery component as the default export
export default ImageGallery;
