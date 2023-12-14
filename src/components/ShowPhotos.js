import React from 'react';
import { Box, Image, Flex, SimpleGrid, useMediaQuery } from '@chakra-ui/react';

const ImageGallery = ({ imageUrls }) => {
  const [isLargeScreen] = useMediaQuery("(min-width: 50em)");

  return (
    <Box p={4}>
      {isLargeScreen ? (
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {imageUrls.map((imageUrl, index) => (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="center"
              style={{
                width: '100%', // Full width for small screens
                '@media screen and (min-width: 40em)': {
                  width: '50%', // Adjusted width for medium screens (tablets)
                },
                '@media screen and (min-width: 60em)': {
                  width: '33.33%', // Adjusted width for large screens
                },
                marginTop: '20px', // Margin top for each image
              }}
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
    </Box>
  );
};

export default ImageGallery;
