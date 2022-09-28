import { Box, Text, Image, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

function Cart() {
  return (
    <Box>
      <Box w='400px' h='400px' m='auto' mt='150px' textAlign='center'>
        <Image src='https://constant.myntassets.com/checkout/assets/img/empty-bag.webp' w='40%' m='auto' />
        <Text fontWeight='bold' fontSize='xl' mt='4'>Hey, it feels so light!</Text>
        <Text fontWeight='thin' fontSize='12px' color='gray' mt='1'>There is nothing in your bag. Let's add some items</Text>
        <Button border='1px solid #ff3c6f' borderRadius='3px' mt='8' color='#ff3c6f' bg='white' _hover={{ bg: '#ff3c6f', color: 'white' }}>Start Shopping</Button>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center' mt='8' px='60' mb='10' position='fixed' bottom='0' w='100%' bg='white' h='60px' borderTop='1px solid' borderColor='gray.100'>
        <Flex gap={1}>
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" width="70px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" width="60px" height="37px" />
        </Flex>
        <Spacer />
        <Box>
          <Text fontWeight='600' fontSize='13px'>Need Help&nbsp; ? &nbsp;Contact Us</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Cart