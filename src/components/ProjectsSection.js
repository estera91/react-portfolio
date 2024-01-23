// Import necessary React components and custom components
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Center } from "@chakra-ui/react";
import Card from "./Card";

// Array of project objects with details
const projects = [
  {
    title: "Matlag Insurance",
    description:
      "Web Page project built be me with Wordpress for an insurance company. Made in WordPress",
    getImageSrc: () => require("../photos/matlag.png"),
    url: "https://matlaginsurance.com/",
    clickImage: require("../photos/matlagscreen.png"),
  },
  {
    title: "iCorsario",
    description: "Web project build by me providing various web services. Made in WordPress",
    getImageSrc: () => require("../photos/corsario2.png"),
    url: "https://icorsario.com/",
    clickImage: require("../photos/icorsarioscreen.png"),
  },
  {
    title: "Candela Ramos",
    description: "Web site build by me for selling tango classess based on WIX.",
    getImageSrc: () => require("../photos/candela.png"),
    url: "https://candelaramos.art/",
    clickImage: require("../photos/candelaweb.jpg"),
  },
   { title: "Apaczka",
    description: "Web site project in which i was in part of team responsable for building backend",
    getImageSrc: () => require("../photos/apaczka.png"),
    url: "https://apaczka.pl/",
    clickImage: require("../photos/apaczkaweb.png"),
  }
];

// ProjectsSection functional component
const ProjectsSection = () => {
  // Check if the screen size is larger than 800px
  const isLargeScreen = window.innerWidth > 800;

  return (
    // FullScreenSection component with customized styles
    <FullScreenSection
      backgroundColor="black"
      isDarkBackground
      p={4}
      marginTop="70px"
    >
      {/* Centered heading for the projects section */}
      <Center width="100%" id="projects">
        <Heading
          as="h1"
          textAlign="center"
          width="100%"
          paddingTop={isLargeScreen ? "50px" : "20px"}
          paddingBottom="40px"
          marginTop="40px"
          marginBottom="90px"
          color="white"
          fontSize="80px"
          fontFamily="Helvetica"
          opacity="1"
        >
          WEB projects
        </Heading>
      </Center>
      {/* Box for displaying project cards in a grid or block based on screen size */}
      <Box
        width="100%"
        display={isLargeScreen ? "grid" : "block"}
        gridTemplateColumns={isLargeScreen ? "repeat(2, minmax(0, 1fr))" : "auto"}
        gridGap={isLargeScreen ? 15 : 0}
      >
        {/* Map through the projects array and render a Card component for each project */}
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
            clickImage={project.clickImage}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

// Export the ProjectsSection component as the default export
export default ProjectsSection;
