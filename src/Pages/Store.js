import { Box, Image, Flex, Grid, GridItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import Fliter from '../Components/Fliter'
import Footer from '../Components/Footer'
import InvitePromo from '../Components/InvitePromo'
import Products from '../Components/Products'


function Store() {

  const [products, setProducts] = useState([]);



  return (
    <Box>
      <InvitePromo />
      <Box>

      </Box>
      <Grid templateColumns="repeat(11, 1fr)" m='auto' mx='4' mt='8'>
        <GridItem display={{ base: 'none', lg: 'block' }} colSpan={2} border='1px solid' borderColor='gray.100' p='4'>
          <Fliter products={products} setProducts={setProducts} />
        </GridItem>
        <GridItem colSpan={{ base: 11, lg: 9 }} border='1px solid' borderColor='gray.100' px={{ base: 1, sm: 8 }} py='7' >
          <Products products={products} setProducts={setProducts} />
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  )
}

export default Store