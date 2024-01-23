// BigHeaderWithRandomWords.js

import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, useChain } from 'react-spring';
import { Center } from "@chakra-ui/react";
import '../css/skills.css';

// AnimatedWord component to animate individual words
const AnimatedWord = ({ text, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  const wordRef = useRef();

  // Animation properties for each word
  const wordAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  });

  // Trigger the animation when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <animated.div ref={wordRef} style={wordAnimation} className="animated-word">
      {text}
    </animated.div>
  );
};

// RandomWordsContainer component to manage a collection of AnimatedWord components
const RandomWordsContainer = ({ words }) => {
  const wordRefs = useRef([]);

  // Function to handle the reference for each AnimatedWord
  const handleRef = (el, index) => {
    wordRefs.current[index] = el;
  };

  // Use react-spring's useChain to coordinate animations
  useChain(wordRefs.current, [0], 1000);

  return (
    <div className="random-words-container">
      {words.map((word, index) => (
        <AnimatedWord key={index} text={word} index={index} ref={(el) => handleRef(el, index)} />
      ))}
    </div>
  );
};

// BigHeaderWithRandomWords component to display a big header with animated random words
const BigHeaderWithRandomWords = ({ headerText, words }) => {
  return (
    <div className="big-header-container">
      {/* Centered header */}
      <Center id="skills">
        <h1 className="big-header">{headerText}</h1>
      </Center>
      {/* Description */}
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
      {/* RandomWordsContainer to animate the random words */}
      <RandomWordsContainer words={words} />
    </div>
  );
};

export default BigHeaderWithRandomWords;
