// Certs.js
import React from 'react';
import { VStack, Image } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import '../css/Certs.css';

const Certs = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  const slideInLeftProps = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateX(0%)' : 'translateX(-100%)',
  });

  const slideInRightProps = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateX(0%)' : 'translateX(100%)',
  });

  const rotateInProps = useSpring({
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? 'rotate(0deg)' : 'rotate(360deg)',
  });

  return (
    <VStack h="200vh" spacing={4}>
      <animated.div style={slideInLeftProps} ref={ref1} className="cert-box">
        <Image src={process.env.PUBLIC_URL + '/JavaScriptcert.jpg'} alt="Section 1" />
      </animated.div>
      <animated.div style={slideInRightProps} ref={ref2} className="cert-box">
        <Image src={process.env.PUBLIC_URL + '/networkcert.jpg'} alt="Section 2" />
      </animated.div>
      <animated.div style={rotateInProps} ref={ref3} className="cert-box">
        <Image src={process.env.PUBLIC_URL + '/reactcert.jpg'} alt="Section 3" />
      </animated.div>
    </VStack>
  );
};

export default Certs;
