import React, { useState, useEffect, useRef } from 'react';
import '../css/TypingAnimation.css'; // Import the CSS file for styling
import {Text} from '@chakra-ui/react'

const TypingAnimation = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const animationBoxRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex = currentIndex + 1;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

 // useEffect(() => {
    // Adjust the width of the div to fit the text
//    if (animationBoxRef.current) {
 //     const textWidth = animationBoxRef.current.scrollWidth;
 //     animationBoxRef.current.style.width = `${textWidth}px`;
 //   }
 // }, [displayedText]);

  return (
    <div className="typing-animation-box" ref={animationBoxRef}>
      <Text width="100%" fontSize="20px">
      {displayedText}
      </Text>
      
    </div>
  );
};

export default TypingAnimation;
