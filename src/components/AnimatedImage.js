import React from 'react';
import { Center } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedImage = ({ imagePath, imageRight }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fallInProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-100%)',
  });

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
