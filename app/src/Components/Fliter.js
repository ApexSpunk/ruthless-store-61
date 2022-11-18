import { Box, Checkbox, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
const axios = require("axios");


function Fliter({ products, setProducts }) {

  const [url, setUrl] = useState("https://protected-stream-70362.herokuapp.com/products")
  const [filterLevel, setFilterLevel] = useState(1);
  const [tempProducts, setTempProducts] = useState([]);


  const fetchData = async (url) => {
    const response = await axios.get(url);
    setProducts(response.data);
    setTempProducts(response.data);
  };

  const applyFilter = (e, type) => {
    if (e.target.checked && e.target.name !== "all") {
      if (filterLevel === 1) {
        setUrl(url + `?${type}=${e.target.name}`)
        setFilterLevel(filterLevel + 1)
      } else {
        setUrl(`${url}&${type}=${e.target.name}`)
        setFilterLevel(filterLevel + 1)
      }
    }
    if (!e.target.checked) {
      if (url.includes(`&${type}=${e.target.name}`)) {
        setUrl(url.replace(`&${type}=${e.target.name}`, ""))
        setFilterLevel(filterLevel - 1)
        if (filterLevel === 2) {
          setUrl("https://protected-stream-70362.herokuapp.com/products")
        }
      }
      if (url.includes(`?${type}=${e.target.name}`)) {
        setUrl(url.replace(`?${type}=${e.target.name}`, "?"))
        setFilterLevel(filterLevel - 1)
        if (filterLevel === 2) {
          setUrl("https://protected-stream-70362.herokuapp.com/products")
        }
      }
    }
  }

  useEffect(() => {
    console.log('first')
    fetchData(url);
  }, [url]);

  const filterByPrice = (e) => {
    let temp = [...tempProducts];
    if (e.target.name === '200-500') {
      temp = temp.filter((product) => product.price >= 200 && product.price <= 500);
    }
    if (e.target.name === '499-999') {
      temp = temp.filter((product) => product.price >= 500 && product.price <= 999);
    }
    if (e.target.name === '999-1999') {
      temp = temp.filter((product) => product.price >= 1000 && product.price <= 2000);
    }
    if (e.target.name === 'above-1999') {
      temp = temp.filter((product) => product.price >= 2000);
    }
    setProducts(temp);
  }

  const filterByDiscount = (e) => {
    let temp = [...tempProducts];
    if (e.target.value === '1') {
      temp = temp.filter((product) => product.price*100 / product.mrp > 10);
    }
    if (e.target.value === '2') {
      temp = temp.filter((product) => product.price*100 / product.mrp > 20);
    }
    if (e.target.value === '3') {
      temp = temp.filter((product) => product.price*100 / product.mrp > 30)
    }
    if (e.target.value === '4') {
      temp = temp.filter((product) => product.price*100 / product.mrp > 40)
    }
    if (e.target.value === '5') {
      temp = temp.filter((product) => product.price*100 / product.mrp > 50)
    }
    setProducts(temp);
  }



  return (
    <Box position='sticky' top='0' h='100vh' overflowY='scroll' overflowX='hidden'>
      <Box>
        <Text fontSize='15px' fontWeight='bold'>CATEGORIES</Text>
        <Box mt='4'>
          <Box>
            <Checkbox name='all' colorScheme='red' justifyItems={'flex-end'} onChange={(e) => applyFilter(e, 'category')}>
              <Text ml='2' fontSize='14px' fontWeight='thin'>All</Text>
            </Checkbox>
          </Box>
          <Box>
            <Checkbox name='mens' colorScheme='red' justifyItems={'flex-end'} onChange={(e) => applyFilter(e, 'category')}>
              <Text ml='2' fontSize='14px' fontWeight='thin'>Mens</Text>
            </Checkbox>
          </Box>
          <Box>
            <Checkbox name='womens' colorScheme='red' justifyItems={'flex-end'} onChange={(e) => applyFilter(e, 'category')}>
              <Text ml='2' fontSize='14px' fontWeight='thin'>Womens</Text>
            </Checkbox>
          </Box>
          <Box>
            <Checkbox name='kids' colorScheme='red' justifyItems={'flex-end'} onChange={(e) => applyFilter(e, 'category')}>
              <Text ml='2' fontSize='14px' fontWeight='thin'>Kids</Text>
            </Checkbox>
          </Box>
          <Box>
            <Checkbox name='beauty' colorScheme='red' justifyItems={'flex-end'} onChange={(e) => applyFilter(e, 'category')}>
              <Text ml='2' fontSize='14px' fontWeight='thin'>Beauty</Text>
            </Checkbox>
          </Box>
        </Box>
      </Box>
      <Box borderBottom='1px solid' borderColor='gray.200' mt='4' />
      <Box mt='4'>
        <Text fontSize='15px' fontWeight='bold'>PRICE</Text>
        <Box mt='4'>
          <RadioGroup>
            <Box>
              <Radio value='1' colorScheme='red' justifyItems={'flex-end'} name='200-500' onChange={(e) => filterByPrice(e)}>
                <Text ml='2' fontSize='14px' fontWeight='thin'>Rs. 199 to Rs. 500</Text>
              </Radio>
            </Box>
            <Box>
              <Radio value='2' colorScheme='red' justifyItems={'flex-end'} name='499-999' onChange={(e) => filterByPrice(e)}>
                <Text ml='2' fontSize='14px' fontWeight='thin'>Rs. 499 to Rs. 999</Text >
              </Radio>
            </Box>
            <Box>
              <Radio value='3' colorScheme='red' justifyItems={'flex-end'} name='999-1999' onChange={(e) => filterByPrice(e)}>
                <Text ml='2' fontSize='14px' fontWeight='thin'>Rs. 999 to Rs. 1999</Text>
              </Radio>
            </Box>
            <Box>
              <Radio value='4' colorScheme='red' justifyItems={'flex-end'} name='above-1999' onChange={(e) => filterByPrice(e)}>
                <Text ml='2' fontSize='14px' fontWeight='thin'>Rs. 1999+</Text>
              </Radio>
            </Box>
          </RadioGroup>
        </Box>
      </Box>
      <Box borderBottom='1px solid' borderColor='gray.200' mt='4' />
      <Box mt='4'>
        <Text fontSize='15px' fontWeight='bold'>COLORS</Text>
        <Box mt='4'>
          <Box>
            <Checkbox colorScheme='red' name='yellow' justifyItems={'flex-end'} onChange={(e) => applyFilter(e, 'color')}>
              <Box display={'flex'}>
                <Box w='17px' h='17px' bg='yellow.500' borderRadius='50%' />
                <Text ml='2' fontSize='14px' fontWeight='thin'>yellow</Text>
              </Box>
            </Checkbox>
          </Box>
          <Box>
            <Checkbox colorScheme='red' name='gray' justifyItems={'flex-end'} onChange={(e) => applyFilter(e, 'color')}>
              <Box display={'flex'}>
                <Box w='17px' h='17px' bg='gray.500' borderRadius='50%' />
                <Text ml='2' fontSize='14px' fontWeight='thin'>Gray</Text>
              </Box>
            </Checkbox>
          </Box>
          <Box>
            <Checkbox colorScheme='red' name='white' justifyItems={'flex-end'} onChange={(e) => applyFilter(e, 'color')}>
              <Box display={'flex'}>
                <Box w='16px' h='16px' bg='white' border='1px' borderRadius='50%' />
                <Text ml='2' fontSize='14px' fontWeight='thin'>White</Text>
              </Box>
            </Checkbox>
          </Box>
          <Box>
            <Checkbox colorScheme='red' justifyItems={'flex-end'} name='red' onChange={(e) => applyFilter(e, 'color')}>
              <Box display={'flex'}>
                <Box w='17px' h='17px' bg='red.500' borderRadius='50%' />
                <Text ml='2' fontSize='14px' fontWeight='thin'>red</Text>
              </Box>
            </Checkbox>
          </Box>
          <Box>
            <Checkbox colorScheme='red' justifyItems={'flex-end'} name='black' onChange={(e) => applyFilter(e, 'color')}>
              <Box display={'flex'}>
                <Box w='17px' h='17px' bg='black' borderRadius='50%' />
                <Text ml='2' fontSize='14px' fontWeight='thin'>Black</Text>
              </Box>
            </Checkbox>
          </Box>
          <Box>
            <Checkbox colorScheme='red' justifyItems={'flex-end'} name='blue' onChange={(e) => applyFilter(e, 'color')}>
              <Box display={'flex'}>
                <Box w='17px' h='17px' bg='blue.500' borderRadius='50%' />
                <Text ml='2' fontSize='14px' fontWeight='thin'>Blue</Text>
              </Box>
            </Checkbox>
          </Box>
          <Box>
            <Checkbox colorScheme='red' justifyItems={'flex-end'} name='green' onChange={(e) => applyFilter(e, 'color')}>
              <Box display={'flex'}>
                <Box w='17px' h='17px' bg='green.500' borderRadius='50%' />
                <Text ml='2' fontSize='14px' fontWeight='thin'>green</Text>
              </Box>
            </Checkbox>
          </Box>
        </Box>
        <Box borderBottom='1px solid' borderColor='gray.200' mt='4' />
        <Box mt='4'>
          <Text fontSize='15px' fontWeight='bold'>PRICE</Text>
          <Box mt='4'>
            <Box>
              <RadioGroup>
                <Stack direction='column'>
                  <Radio value='1' onChange={(e) => filterByDiscount(e)} colorScheme='red' justifyItems={'flex-end'}>
                    <Text ml='2' fontSize='14px' fontWeight='thin'>10% and above</Text>
                  </Radio>
                  <Radio value='2' onChange={(e) => filterByDiscount(e)} colorScheme='red' justifyItems={'flex-end'}>
                    <Text ml='2' fontSize='14px' fontWeight='thin'>20% and above</Text>
                  </Radio>
                  <Radio value='3' onChange={(e) => filterByDiscount(e)} colorScheme='red' justifyItems={'flex-end'}>
                    <Text ml='2' fontSize='14px' fontWeight='thin'>30% and above</Text>
                  </Radio>
                  <Radio value='4' onChange={(e) => filterByDiscount(e)} colorScheme='red' justifyItems={'flex-end'}>
                    <Text ml='2' fontSize='14px' fontWeight='thin'>40% and above</Text>
                  </Radio>
                  <Radio value='5' onChange={(e) => filterByDiscount(e)} colorScheme='red' justifyItems={'flex-end'}>
                    <Text ml='2' fontSize='14px' fontWeight='thin'>50% and above</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Fliter
