import { Box, Image, Flex, Grid, GridItem } from '@chakra-ui/react'
import React,{useState} from 'react'
import Fliter from '../Components/Fliter'
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
        <GridItem colSpan={2} border='1px solid' borderColor='gray.100' borderRadius='3px' p='4'>
          <Fliter products={products}  setProducts={setProducts}/>
        </GridItem>
        <GridItem colSpan={9} border='1px solid' borderColor='gray.100' px='8' py='7' borderRadius='3px'>
          <Products products={products} setProducts={setProducts} />
          {/* <Products products={products} setProducts={setProducts} />
          <Products products={products} setProducts={setProducts} />
          <Products products={products} setProducts={setProducts} />
          <Products products={products} setProducts={setProducts} />
          <Products products={products} setProducts={setProducts} /> */}
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Store