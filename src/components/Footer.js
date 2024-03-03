import React from "react";
import {Box, Flex} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="black" borderTop="dashed 3px orange">
      <footer bg="black">
        <Flex
          margin="0 auto"
          px={12}
          bg="black"
          color="white"
          justifyContent="center"
          alignItems="center"
          maxwidth="1024px"
          height={16}
          paddingTop="70px"
          paddingBottom="40px"
        
        >
          <p>Estera Bulkiewicz - REACT code • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
