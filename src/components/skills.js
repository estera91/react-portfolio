import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, useChain } from 'react-spring';
import { Box, Heading, Center } from "@chakra-ui/react";import '../css/skills.css';

const AnimatedWord = ({ text, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  const wordRef = useRef();

  const wordAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  });

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <animated.div ref={wordRef} style={wordAnimation} className="animated-word">
      {text}
    </animated.div>
  );
};

const RandomWordsContainer = ({ words }) => {
  const wordRefs = useRef([]);

  const handleRef = (el, index) => {
    wordRefs.current[index] = el;
  };

  useChain(wordRefs.current, [0], 1000);

  return (
    <div className="random-words-container">
      {words.map((word, index) => (
        <AnimatedWord key={index} text={word} index={index} ref={(el) => handleRef(el, index)} />
      ))}
    </div>
  );
};

const BigHeaderWithRandomWords = ({ headerText, words }) => {
  return (
    <div className="big-header-container">
      <Center id="skills">
      <h1 className="big-header">{headerText}</h1>
     
      </Center>
      <Center>
      <p className="skillsDesc">
      I can set up and resolve IT problems across different operating systems, such as Windows, MAC, and Linux, as they relate to web hosting and application dependencies and configuration. This includes the network configuration, routers, VPNs, and CPanel management. I have a proven record of delivering successful projects over many years, so you can trust me with your IT needs.
      </p>
      </Center>
      <Center>
      <p className="skillsDescR">
      I love what I do and this passion drives me to deliver solutions with finesse.
      </p>
      </Center>
      <RandomWordsContainer words={words} />
    </div>
  );
};

export default BigHeaderWithRandomWords;
