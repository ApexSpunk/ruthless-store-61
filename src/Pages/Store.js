import { Box, Image, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Fliter from '../Components/Fliter'
import InvitePromo from '../Components/InvitePromo'
import Products from '../Components/Products'

function Store() {




  return (
    <Box>
      <InvitePromo />
      <Grid templateColumns="repeat(5, 1fr)" m='auto' mx='4' mt='8'>
        <GridItem colSpan={1} border='1px solid' borderColor='gray.100' borderRadius='3px' p='4'>
          <Fliter />
        </GridItem>
        <GridItem colSpan={4} border='1px solid' borderColor='gray.100' px='8' py='7' borderRadius='3px'>
          <Products />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Store