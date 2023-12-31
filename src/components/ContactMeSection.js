import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  ChakraProvider,
  Box,
  Text,
  Input,
  Textarea,
  Button,
  Grid,
  FormControl,
  FormErrorMessage,
  Container,
  Image
} from '@chakra-ui/react';
import ReCAPTCHA from 'react-google-recaptcha';
import AnimatedImage from './AnimatedImage';
const pictureRight2='<a href="https://www.freepik.com/free-vector/black-neural-network-illustration_3841810.htm#query=computer%20contact%20black%20white%20black%20background%20vector&position=34&from_view=search&track=ais&uuid=304fa186-ec32-4c11-8c17-624bcefc05b3">Image by rawpixel.com</a> on Freepik'
const src1=process.env.PUBLIC_URL + '/img/netw.png'

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
  recaptcha: Yup.string().required('Please verify that you are not a robot'),
});

const ContactForm = () => {
  const { register, handleSubmit, formState, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // Perform the email sending logic here
    try {
      // Simulate sending email (replace this with your actual logic)
      console.log('Sending email:', data);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setError('general', {
        type: 'manual',
        message: 'Error sending email. Please try again later.',
      });
    }
  };

  return (
    <Box bgColor="black" color="white" p={8} paddingTop="100px" id="contactme" className="contact"
    height="80vh"
    bgImage={src1}
    >
      <Grid templateColumns="1fr 1fr" gap={8}>
        <Container>
          <Text color="white" align="center" fontSize="30px">
          Do you have any questions? Are you interested in establishing cooperation? Contact me!
          </Text>
        </Container>
        <Container maxWidth="600px">
        <form onSubmit={handleSubmit(onSubmit)} marginBottom="50px" maxWidth="300px"  >
          <FormControl isInvalid={formState.errors.name} >
            <Input placeholder="Name" {...register('name')} height="40px" bgColor="black" opacity="0.8" borderRadius="7px"marginBottom="10px" />
            <FormErrorMessage>{formState.errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isInvalid={formState.errors.email}>
            <Input type="email" placeholder="Email" {...register('email')} height="40px" bgColor="black" opacity="0.8" borderRadius="7px"marginBottom="10px" />
            <FormErrorMessage>{formState.errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isInvalid={formState.errors.subject}>
            <Input placeholder="Subject" {...register('subject')} height="40px" bgColor="black" opacity="0.8" borderRadius="7px"marginBottom="10px" />
            <FormErrorMessage>{formState.errors.subject?.message}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isInvalid={formState.errors.message}>
            <Textarea placeholder="Message" {...register('message')} height="100px" bgColor="black" opacity="0.8" borderRadius="7px"marginBottom="10px" />
            <FormErrorMessage>{formState.errors.message?.message}</FormErrorMessage>
          </FormControl>

          {/* Uncomment below if you want to include reCAPTCHA
          <FormControl mt={4} isInvalid={formState.errors.recaptcha}>
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your reCAPTCHA site key
              onChange={(value) => {
                setError('recaptcha', null);
              }}
            />
            <FormErrorMessage>{formState.errors.recaptcha?.message}</FormErrorMessage>
          </FormControl>
          */}

          <Button
            mt={4}
            colorScheme="orange"
            color="white"
            fontWeight="bold"
            fontSize="xl"
            type="submit"
            bg="orange"
            padding="20px 20px 20px 20px"
            isLoading={formState.isSubmitting}
            marginTop="30px"
          >
            Submit
          </Button>

          <FormErrorMessage mt={2} isInvalid={formState.errors.general}>
            {formState.errors.general?.message}
          </FormErrorMessage>
        </form>
        </Container>
        </Grid>

      </Box>
     
  );
};

export default ContactForm;
