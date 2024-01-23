// useSubmit.js

import { useState } from "react";

// Utility function to simulate a delay
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Custom hook for form submission with simulated API call.
 * @returns {Object} An object containing state and function for form submission.
 */
const useSubmit = () => {
  // State to track loading status
  const [isLoading, setLoading] = useState(false);
  // State to store the response from the simulated API call
  const [response, setResponse] = useState(null);

  /**
   * Function to simulate form submission with an API call.
   * @param {string} url - The API endpoint URL.
   * @param {Object} data - The form data to be submitted.
   */
  const submit = async (url, data) => {
    // Generate a random number to simulate success or failure (50% chance of each)
    const random = Math.random();
    
    // Set loading state to true while simulating the API call
    setLoading(true);

    try {
      // Simulate a delay of 2000 milliseconds (2 seconds)
      await wait(2000);

      // Check the random number to determine success or failure
      if (random < 0.5) {
        // Simulate an error in case of failure
        throw new Error("Something went wrong");
      }

      // Set a success response
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      // Set an error response in case of failure
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
    } finally {
      // Set loading state back to false after the API call simulation
      setLoading(false);
    }
  };

  // Return an object with isLoading, response, and submit function
  return { isLoading, response, submit };
}

export default useSubmit;
