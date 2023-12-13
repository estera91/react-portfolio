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
  return (
    <FullScreenSection
      backgroundColor="#b8e5ea"
      isDarkBackground
      p={4}
    //  alignItems="flex-start"
  //    spacing={8}
    >
      <Center width="100%">
      <Heading
        as="h1"
      //  align="center"
        textAlign="center"
      //  py="2"
      //  size="lg"
        width="100%" // Set the width to 100% for full width
        paddingTop="50px"
        paddingBottom="40px"
        marginTop="40px"
        marginBottom="30px"
        color="white"
        fontSize="80px"
        fontFamily="Helvetica"
        backgroundColor="Black"
     
      >
        My projects:
      </Heading>
      </Center>
      <Box
        width="100%" // Set the width to 100% for full width
        display="grid"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        gridGap={15}
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
