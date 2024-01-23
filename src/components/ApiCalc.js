import React, { useState, useEffect } from 'react';
import { Box, Input, Select, Button, Text, FormControl, FormLabel, FormErrorMessage, Heading, Center } from '@chakra-ui/react';
import axios from 'axios';

const CurrencyCalculator = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [amountError, setAmountError] = useState('');
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://open.er-api.com/v6/latest');
        const currencyList = Object.keys(response.data.rates);
        setCurrencies(currencyList);
        setFromCurrency(currencyList[0]);
        setToCurrency(currencyList[1]);
      } catch (error) {
        console.error('Error fetching currencies:', error);
        setApiError('Error fetching currencies. Please try again later.');
        throw new Error('Error fetching currencies');
      }
    };

    fetchCurrencies();
  }, []);

  const validateAmount = (input) => {
    const isValid = /^[+-]?\d+(\.\d+)?$/.test(input);

    if (!isValid) {
      setAmountError('Invalid amount. Please enter a valid number format.');
    } else {
      setAmountError('');
    }

    return isValid;
  };

  const convertCurrency = async () => {
    if (!validateAmount(amount)) {
      return;
    }

    try {
      const response = await axios.get(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const exchangeRate = response.data.rates[toCurrency];
      const result = amount * exchangeRate;
      setConvertedAmount(result);
      setApiError('');
    } catch (error) {
      console.error('Error converting currency:', error);
      setApiError('Error converting currency. Please try again later.');
      throw new Error('Error converting currency');
    }
  };

  return (
    <Center bgColor="black" paddingTop="60px">
      <Box bg="black" p={4} borderRadius="md" align="center" minWidth="400px">
        <Heading marginBottom="50px" color="white">Convert currency through API</Heading>
        <FormControl>
          <FormLabel color="white">From:</FormLabel>
          <Select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} borderRadius="7px" marginBottom="10px" height="40px" color="white">
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl mb={4} isInvalid={amountError}>
          <FormLabel color="white">Amount:</FormLabel>
          <Input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onBlur={() => validateAmount(amount)}
            borderRadius="7px" marginBottom="10px" height="40px" color="white"
          />
          <FormErrorMessage>{amountError}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel color="white">To:</FormLabel>
          <Select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} borderRadius="7px" marginBottom="10px" height="40px" color="white">
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </Select>
        </FormControl>

        <Button colorScheme="teal" mt={4} onClick={convertCurrency} bgColor="orange" paddingTop="20px" paddingBottom="20px" paddingLeft="10px" paddingRight="10px" borderRadius="10px" color="black" fontSize="25px" marginTop="30px" marginBottom="20px">Convert</Button>

        {apiError && (
          <Text fontSize="18px" color="red" mt={3}>{apiError}</Text>
        )}

        {convertedAmount !== null && (
          <Text fontSize="25px" color="green" mt={3}>{`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`}</Text>
        )}
      </Box>
    </Center>
  );
};

export default CurrencyCalculator;
