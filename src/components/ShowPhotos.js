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
import '../css/ShowPhotos.css'

const ImageGallery = ({ imageUrls }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    onOpen();
  };

  const closeModal = () => {
    setSelectedImage(null);
    onClose();
  };
  const handleCloseModal = () => {
    onClose();
  };
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  const [isLargeScreen, isTabletScreen, isPhoneScreen] = useMediaQuery([
    "(min-width: 50em)",
    "(min-width: 30em) and (max-width: 50em)",
    "(max-width: 30em)",
  ]);


  return (
    <Box p={4} paddingTop="50px" paddingBottom="50px">
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
      <Modal isOpen={isOpen} onClose={closeModal}  className="modalGallery" bg="black">
        <ModalOverlay />
        <ModalContent 
       
        className='gallery-item'>
          <ModalHeader textAlign="center">Image Preview</ModalHeader>
          <ModalCloseButton  top="-25px"   color="white" paddingTop="40px"/>
          <ModalBody onClick={handleContentClick}>
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

export default ImageGallery;
