// Import necessary React, Chakra UI components, and additional libraries
import React from 'react';
import { useForm } from 'react-hook-form'; // Import reset
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import emailjs from 'emailjs-com'; // Import emailjs
import {
  Box,
  Text,
  Input,
  Textarea,
  Button,
  Grid,
  FormControl,
  FormErrorMessage,
  Container
} from '@chakra-ui/react';
import AnimatedImage from './AnimatedImage';
// Attribution for the image source
const pictureRight2 = '<a href="https://www.freepik.com/free-vector/black-neural-network-illustration_3841810.htm#query=computer%20contact%20black%20white%20black%20background%20vector&position=34&from_view=search&track=ais&uuid=304fa186-ec32-4c11-8c17-624bcefc05b3">Image by rawpixel.com</a> on Freepik';
const src1 = process.env.PUBLIC_URL + '/img/netw.png';

// Validation schema for the contact form
const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

// Get your emailjs credentials from your dashboard and store them in constants
const SERVICE_ID = 'service_24zgc7g';
const TEMPLATE_ID = 'template_udlpatb';
const USER_ID = '-vk6q1hcuScf1rXFb';

// Functional component for the contact form
const ContactForm = () => {
  // Use react-hook-form to manage form state and validation
  const { register, handleSubmit, formState, setError, reset } = useForm({
    resolver: yupResolver(schema),
  });

  // Function to handle form submission
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      // Use emailjs.sendForm to send the email with the form data and the email parameters
      const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID);
      console.log('Email sent:', response);
      alert('Email sent successfully! I will contact You soon.');
      // Call reset to clear the form fields
      reset(); // Pass an empty object to reset

    } catch (error) {
      console.error('Error sending email:', error);
      setError('general', {
        type: 'manual',
        message: 'Error sending email. Please try again later.',
      });
    }
  };

  // JSX structure for rendering the contact form
  return (
    <Box bgColor="black" color="white" p={8} paddingTop="100px" id="contactme" className="contact" height="80vh" bgImage={src1}>
      <Grid templateColumns="1fr 1fr" gap={8}>
        {/* Left Column */}
        <Container>
          <Text color="white" align="center" fontSize="30px">
            Do you have any questions? Are you interested in establishing cooperation? Contact me!
          </Text>
        </Container>

        {/* Right Column - Contact Form */}
        <Container maxwidth="600px">
          <form  onSubmit={handleSubmit(onSubmit)} marginbottom="50px" maxwidth="300px">
            {/* Name Input */}
            <FormControl isInvalid={formState.errors.name}>
              <Input placeholder="Name" {...register('name')} height="40px" bgColor="black" opacity="0.8" borderRadius="7px" marginbottom="10px" />
              <FormErrorMessage>{formState.errors.name?.message}</FormErrorMessage>
            </FormControl>

            {/* Email Input */}
            <FormControl mt={4} isInvalid={formState.errors.email}>
              <Input type="email" placeholder="Email" {...register('email')} height="40px" bgColor="black" opacity="0.8" borderRadius="7px" marginbottom="10px" />
              <FormErrorMessage>{formState.errors.email?.message}</FormErrorMessage>
            </FormControl>

            {/* Subject Input */}
            <FormControl mt={4} isInvalid={formState.errors.subject}>
              <Input placeholder="Subject" {...register('subject')} height="40px" bgColor="black" opacity="0.8" borderRadius="7px" marginbottom="10px" />
              <FormErrorMessage>{formState.errors.subject?.message}</FormErrorMessage>
            </FormControl>

            {/* Message Input */}
            <FormControl mt={4} isInvalid={formState.errors.message}>
              <Textarea placeholder="Message" {...register('message')} height="100px" bgColor="black" opacity="0.8" borderRadius="7px" marginbottom="10px" />
              <FormErrorMessage>{formState.errors.message?.message}</FormErrorMessage>
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" colorScheme="orange" marginTop="10px" size="lg" width="100%" marginbottom="10px">
              Send
            </Button>
          </form>
        </Container>
      </Grid>
    </Box>
  );
};

export default ContactForm;
