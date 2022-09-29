import { Box, Checkbox, Text } from '@chakra-ui/react';
import React from 'react'
const axios = require("axios");


function Fliter() {



  return (
    <Box>
      <Text fontSize='15px' fontWeight='bold'>Categories</Text>
      <Box mt='4'>
        <Checkbox colorScheme='#ff36cf' defaultIsChecked>
          <Text ml='2' fontSize='14px' fontWeight='semibold'>All</Text>
        </Checkbox>
      </Box>
    </Box>
  )
}

export default Fliter
