/**
 * AnimatedImage Component
 *
 * This component creates an animated image using react-spring and react-intersection-observer.
 * The image becomes visible and translates into view when it enters the viewport.
 *
 * @component
 * @param {string} imagePath - The path to the image to be displayed.
 * @param {boolean} imageRight - Flag indicating whether the image is positioned on the right side.
 * @returns {JSX.Element} - Returns a React element representing the animated image.
 */
import React from 'react';
import { Center } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

/**
 * @function AnimatedImage
 *
 * @param {Object} props - The component props.
 * @param {string} props.imagePath - The path to the image to be displayed.
 * @param {boolean} props.imageRight - Flag indicating whether the image is positioned on the right side.
 * @returns {JSX.Element} - Returns a React element representing the animated image.
 */
const AnimatedImage = ({ imagePath, imageRight }) => {
  // Hook to determine if the component is in the viewport
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Animation properties using react-spring
  const fallInProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-100%)',
  });

  // Render the animated image
  return (
    <animated.div style={fallInProps} ref={ref}>
      <Center>
        <img
          src={imagePath}
          alt="animatedImage"
          style={{ width: '500px', marginTop: '-100px' }}
          data-right={imageRight}
        />
      </Center>
    </animated.div>
  );
};

export default AnimatedImage;
