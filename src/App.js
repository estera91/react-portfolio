import logo from './logo.svg';
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';

import './App.css';

const theme = extendTheme({
  fonts: {
    body: "Arial, Helvetica, sans-serif",
    heading: "Arial, Helvetica, sans-serif",
  },
  width:"100%"
});

function App() {
  return (
    <ChakraProvider theme={theme} maxW="100%" width="100%">
      <main>
        <Header zIndex="1000" />
        <Box p={[4, 6, 8]}>{/* Adjust padding for responsiveness */}</Box>
        <LandingSection />
        <ProjectsSection />
        <ExperienceSection />
      
      </main>
    </ChakraProvider>
  );
}

export default App;
