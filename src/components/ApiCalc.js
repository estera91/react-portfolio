import React, { useState, useEffect } from 'react';
import { Box, Input, Select, Button, Text, FormControl, FormLabel, FormErrorMessage, Flex, Center } from '@chakra-ui/react';
import axios from 'axios';

const CurrencyCalculator = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [amountError, setAmountError] = useState('');

  useEffect(() => {
    // Fetch the list of currencies
    axios.get('https://open.er-api.com/v6/latest')
      .then(response => {
        const currencyList = Object.keys(response.data.rates);
        setCurrencies(currencyList);
        setFromCurrency(currencyList[0]);
        setToCurrency(currencyList[1]);
      })
      .catch(error => console.error('Error fetching currencies:', error));
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

  const convertCurrency = () => {
    if (!validateAmount(amount)) {
      return;
    }

    axios.get(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then(response => {
        const exchangeRate = response.data.rates[toCurrency];
        const result = amount * exchangeRate;
        setConvertedAmount(result);
      })
      .catch(error => console.error('Error converting currency:', error));
  };

  return (
    <Center bgColor="black" paddingTop="60px">

   
    <Box bg="black" p={4} borderRadius="md" align="center">
      <Text color="white" fontSize="45px" mb={4} align="center">Currency Calculator </Text>
      {/* Convert From */}
      <FormControl>
      <FormLabel color="white">From:</FormLabel>
      <Select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}
        borderRadius="7px" marginBottom="10px" height="40px" color="white"
      >
        {currencies.map(currency => (
           <option key={currency} value={currency} >{currency}</option>
        ))}
      </Select>
      </FormControl>
      {/* Amount */}
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

      {/* Convert To */}
      <FormControl>
      <FormLabel color="white">To:</FormLabel>
      <Select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}
        borderRadius="7px" marginBottom="10px" height="40px" color="white"
      >
        {currencies.map(currency => (
          <option key={currency} value={currency} >{currency}</option>
        ))}
      </Select>
      </FormControl>

      {/* Convert Button */}
      <Button colorScheme="teal" mt={4} onClick={convertCurrency} bgColor="orange"
       paddingTop="20px" paddingBottom="20px" paddingLeft="10px" paddingRight="10px"
       borderRadius="10px" color="black" fontSize="20px" marginTop="30px" marginBottm="20px"
      >Convert</Button>

      {/* Result */}
      {convertedAmount !== null && (
        <Text color="green" mt={4}>{`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`}</Text>
      )}
    </Box>
    </Center>
  );
};

export default CurrencyCalculator;
