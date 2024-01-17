import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Center } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Matlag Insurance",
    description:
      "Web Page project build with Wordpress for Insurance company",
    getImageSrc: () => require("../photos/matlag.png"),
    url: "https://matlaginsurance.com/",
    clickImage: require("../photos/matlagscreen.png"),
  },
  {
    title: "iCorsario",
    description: "Project of Web site provided Web services.",
    getImageSrc: () => require("../photos/corsario2.png"),
    url: "https://icorsario.com/",
    clickImage: require("../photos/icorsarioscreen.png"),
  },
];

const ProjectsSection = () => {
  const isLargeScreen = window.innerWidth > 800;

  return (
    <FullScreenSection
      backgroundColor="black"
      isDarkBackground
      p={4}
      marginTop="70px"
    >
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
        //  backgroundColor="#df7d00"
          opacity="1"
        >
          WEB projects
        </Heading>
      </Center>
      <Box
        width="100%"
        display={isLargeScreen ? "grid" : "block"}
        gridTemplateColumns={isLargeScreen ? "repeat(2, minmax(0, 1fr))" : "auto"}
        gridGap={isLargeScreen ? 15 : 0}
      >
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

export default ProjectsSection;
