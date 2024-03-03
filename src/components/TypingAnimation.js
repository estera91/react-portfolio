// TypingAnimation.js

import React, { useState, useEffect, useRef } from 'react';
import '../css/TypingAnimation.css'; // Import the CSS file for styling
import { Text } from '@chakra-ui/react';

/**
 * TypingAnimation component renders a text animation that types out the given text.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.text - The text to be displayed and animated.
 * @param {number} props.speed - The speed of the typing animation (in milliseconds).
 */
const TypingAnimation = ({ text, speed }) => {
  // State to manage the displayed text during animation
  const [displayedText, setDisplayedText] = useState('');
  // Reference to the animation box div
  const animationBoxRef = useRef(null);

  // Effect hook to animate the typing
  useEffect(() => {
    let currentIndex = 0;

    // Interval to update displayed text at a given speed
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex = currentIndex + 1;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [text, speed]);

  /**
   * Uncomment the following useEffect block if you want to adjust the width of the div to fit the text.
   * Ensure the corresponding CSS styles are applied in TypingAnimation.css.
   */
  // useEffect(() => {
  //   if (animationBoxRef.current) {
  //     const textWidth = animationBoxRef.current.scrollWidth;
  //     animationBoxRef.current.style.width = `${textWidth}px`;
  //   }
  // }, [displayedText]);

  return (
    <div key="typAnim" className="typing-animation-box" ref={animationBoxRef}>
      {/* Use Chakra UI Text component for styling */}
      <Text key="zawartosc" width="100%" fontSize="20px">
        {displayedText}
      </Text>
    </div>
  );
};

export default TypingAnimation;
