import { Box, Text, Image, Button, Flex, Spacer, Container, Grid, GridItem, Input, useToast, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Alert, AlertIcon, AlertTitle, AlertDescription, AlertDialogCloseButton } from '@chakra-ui/react'
import React, { useState, useContext, useRef } from 'react'
import { CartContext } from '../Context/CartContext/CartProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faDotCircle, faGift, faTags, faTruck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


function Cart() {

  const { state: { cart, total, qty }, dispatch, state } = useContext(CartContext);
  const [order, setOrder] = useState('PLACE ORDER');
  const [product, setProduct] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: mIsopen, onOpen: mOnOpen, onClose: mOnClose } = useDisclosure();
  const cancelRef = useRef()
  const Navigate = useNavigate();

  const toast = useToast()

  const handleOrder = () => {
    setOrder('ORDERING...');
    setTimeout(() => {
      mOnOpen();
      toast({
        title: 'Order Placed',
        description: 'Your order has been placed successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setOrder('PLACE ORDER');
    }, 2000);
  }


  return (
    <Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Remove Item
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to remove {product.name} from the cart?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' ml={3} onClick={() => {
                dispatch({ type: 'REMOVE_FROM_CART', payload: product });
                onClose()
                toast({
                  title: `${product.name} `,
                  position: 'bottom-left',
                  description: "Removed from cart.",
                  status: "warning",
                  duration: 4000,
                  isClosable: true,
                })
              }} >
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      {
        cart.length > 0 ? <Box>
          <Container maxW='container.lg' mt={8}>
            <Modal isOpen={mIsopen} onClose={mOnClose} isCentered>
              <ModalOverlay />
              <ModalContent bg={'transparent'} boxShadow={'none'}>
                <ModalCloseButton color={'white'} fontSize={'2xl'} onClick={() => {
                  dispatch({ type: 'CLEAR_CART' });
                  Navigate('/');
                }} />
                <ModalBody>
                  <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='250px'
                    w={'100%'}
                    mt={12}
                    borderRadius='lg'
                  >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                      Order Placed Successfully !
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                      Your order has been placed successfully. Once your order is shipped, you will receive a confirmation email.
                    </AlertDescription>
                  </Alert>
                </ModalBody>
              </ModalContent>
            </Modal>
            <Grid templateColumns="repeat(5, 1fr)" gap='6'>
              <GridItem colSpan={{ base: 5, md: 3 }}>
                <Box display='flex' bg='white' p='6' borderRadius='3px' border='1px solid' borderColor='gray.200' justifyContent='space-between'>
                  <Text mt={'6px'} fontSize='14px'>Deliver To: <Text as='span' fontWeight='bold'>831015</Text></Text>
                  <Button border='1px solid' borderColor='#ff3c6f' _hover={{ bg: '#ff3c6f', color: 'white' }} borderRadius='4px' color='#ff3c6f' bg='transparent' size='sm' fontSize='13px'>CHANGE ADDRESS</Button>
                </Box>
                <Box mt={2} bg='white' p='6' borderRadius='3px' border='1px solid' borderColor='gray.200' >
                  <Text fontSize='14px'><FontAwesomeIcon icon={faTags} /> <Text as='span' fontWeight='bold'>&nbsp; Avaliable Offers</Text></Text>
                  <Text color={'gray.500'} mt='4' fontSize='12px'><FontAwesomeIcon icon={faDotCircle} /> <Text as='span' fontWeight='bold'>&nbsp; 10% Instant Discount On ICICI Bank Credit Cards On Min Spend Of 3,500 TCA</Text></Text>
                  <Text color={'gray.500'} mt='4' fontSize='12px'><FontAwesomeIcon icon={faDotCircle} /> <Text as='span' fontWeight='bold'>&nbsp; 10% Cashback upto Rs 150 on Ola Money Postpaid or wallet transaction on a min spend of Rs 1000 . TCA</Text></Text>
                </Box>
                <Box mt={2} bg='white' p='6' borderRadius='3px' border='1px solid' borderColor='gray.200' >
                  <Text color={'gray.600'} fontSize='13px'><FontAwesomeIcon icon={faTruck} /> &nbsp; Yay! <Text as='span' fontWeight='bold'>No Convenience Fee </Text>On This Order</Text>
                </Box>
                {
                  cart.map((item) => (
                    <Box mt={2} bg='white' p='6' borderRadius='3px' border='1px solid' borderColor='gray.200' >
                      <Box key={item.id} borderRadius='3px' bg='white' display='grid' gridTemplateColumns='24% 75%' gridGap='1%'>
                        <Box colSpan='1'>
                          <Image src={item.images[0]} w='100%' />
                        </Box>
                        <Box p='4' colSpan='2'>
                          <Flex justifyContent={'space-between'}>
                            <Text fontSize='16px' fontWeight='bold'>{item.name}</Text>
                            <Box mt='-15px'>
                              <FontAwesomeIcon position='relative' fontSize={22} color='gray' icon={faXmark} cursor='pointer' onClick={() => { onOpen(); setProduct(item) }} />
                            </Box>
                          </Flex>
                          <Text fontSize='13px' mt={1} fontWeight='thin'>{item.tagline}</Text>
                          <Text fontSize='11px' mt={1} fontWeight='thin'>Sold By: Omnitech Retail</Text>
                          <Flex gap={1} alignItems='center'>
                            <Text fontWeight='bold' fontSize='16px' mt='1'>Rs. {item.price}</Text>
                            <Text fontWeight='thin' as={'s'} fontSize='13px' color='gray' mt='6px'>Rs. {item.mrp}</Text>
                            <Text fontWeight='thin' fontSize='13px' color='orange.400' mt='6px'>({((item.price * 100) / item.mrp).toFixed(0)}% OFF)</Text>
                          </Flex>
                          <Text fontSize='11px' mt={1} fontWeight='thin'><FontAwesomeIcon icon={faCheck} fontSize='13px' color='teal' /> Delivered By <strong>6 Oct 2022</strong></Text>
                        </Box>
                      </Box>
                    </Box>
                  ))
                }

              </GridItem>
              <GridItem colSpan={{ base: 5, md: 2 }}>
                <Box bg='white' p='6' borderRadius='3px' border='1px solid' borderColor='gray.200' j>
                  <Box display='flex' justifyContent='space-between'>
                    <Text fontSize='14px' mt={1}><FontAwesomeIcon icon={faTags} /> <Text as='span' fontWeight='bold'>&nbsp; Apply Coupons</Text></Text>
                    <Button border='1px solid' borderColor='#ff3c6f' _hover={{ bg: '#ff3c6f', color: 'white' }} borderRadius='4px' color='#ff3c6f' bg='transparent' size='sm' >APPLY</Button>
                  </Box>
                  <Input mt={4} bg='white' p='4' borderRadius='3px' border='1px solid' borderColor='gray.200' placeholder='Enter Coupon Code' />
                </Box>
                <Box mt={4} bg='white' borderRadius='3px'  >
                  <Text ml='1' fontSize='14px'><FontAwesomeIcon icon={faGift} /> <Text as='span' fontWeight='bold'>&nbsp; Gifting And Personalisation</Text></Text>
                  <Box bg='red.50' mt={4} display='grid' gridTemplateColumns='25% 74%' gridGap='2%' px='4' h='125px' boxSizing='border-box'>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                      <Image src='https://constant.myntassets.com/checkout/assets/img/gift-big.webp' h='125px' />
                    </Box>
                    <Box>
                      <Text mt='4' fontSize='14px'><Text as='span' fontWeight='extrabold'>Buying For Loved One? </Text></Text>
                      <Text mt='1' fontSize='11px'><Text as='span' fontWeight='thin'>Gift wrap and personalised message on card, Only for Rs. 25 </Text></Text>
                      <Text mt='3' fontSize='14px' color='#ff3c6f'><Text as='span' fontWeight='bold'>ADD GIFT WRAP</Text></Text>
                    </Box>
                  </Box>
                </Box>
                {
                  console.log(state)
                }
                <Box mt={4} bg='white' p='6' borderRadius='3px' border='1px solid' borderColor='gray.200' >
                  <Text fontSize='14px' fontWeight='bold'>Price Details ({qty} Items)</Text>
                  <Flex justifyContent='space-between' mt={4}>
                    <Text fontSize='14px' fontWeight='thin'>Total MRP</Text>
                    <Text fontSize='14px' fontWeight='thin'>Rs. {cart.reduce((acc, item) => acc + item.mrp, 0)}</Text>
                  </Flex>
                  <Flex justifyContent='space-between' mt={3}>
                    <Text fontSize='14px' fontWeight='thin'>Discount on MRP</Text>
                    <Text fontSize='14px' color='teal' fontWeight='thin'>- Rs. {cart.reduce((acc, item) => acc + item.mrp, 0) - (total)}</Text>
                  </Flex>
                  <Flex justifyContent='space-between' mt={3}>
                    <Text fontSize='14px' fontWeight='thin'>Coupon Discount</Text>
                    <Text fontSize='14px' color='#ff3c6f' fontWeight='thin'>Apply Now</Text>
                  </Flex>
                  <Flex justifyContent='space-between' mt={3}>
                    <Text fontSize='14px' fontWeight='thin'>Convenience Fee</Text>
                    <Text fontSize='14px' color='teal' fontWeight='thin'><Text as={'s'} color='#ff3c6f'>Rs. 99</Text> &nbsp;Free</Text>
                  </Flex>
                  <Box borderBottom={'1px solid'} borderColor='gray.200' mt={4} />
                  <Flex justifyContent='space-between' mt={4}>
                    <Text fontSize='14px' fontWeight='bold'>Total MRP</Text>
                    <Text fontSize='14px' fontWeight='bold'>Rs. {total}</Text>
                  </Flex>
                  <Button mt={4} w='100%' bg='#ff3c6f' color='white' _hover={{ bg: '#ff3c6f' }} borderRadius='4px' onClick={handleOrder}>
                    {order}
                  </Button>


                </Box>
              </GridItem>
            </Grid>
          </Container>
        </Box> :
          <Box w='400px' h='400px' m='auto' mt='150px' textAlign='center'>
            <Box>
              <Image src='https://constant.myntassets.com/checkout/assets/img/empty-bag.webp' w='40%' m='auto' />
              <Text fontWeight='bold' fontSize='xl' mt='4'>Hey, it feels so light!</Text>
              <Text fontWeight='thin' fontSize='12px' color='gray' mt='1'>There is nothing in your bag. Let's add some items</Text>
              <Button border='1px solid #ff3c6f' borderRadius='3px' mt='8' color='#ff3c6f' bg='white' _hover={{ bg: '#ff3c6f', color: 'white' }}>Start Shopping</Button>
            </Box>
          </Box>
      }
      <Box display={{ base: 'grid', md: 'flex' }} justifyContent='center' alignItems='center' textAlign='center' mt='8' px={{ base: 10, md: 20, lg: 50, xl: 60 }} mb='10' position={cart.length > 0 ? null : 'sticky'} bottom='0' w='100%' bg='white' h='60px' borderTop='1px solid' borderColor='gray.100'>
        <Grid gap={1} templateColumns={{ base: 'repeat(5, 1fr)', lg: 'repeat(10, 1fr)' }} w={{ base: '100%', lg: '80%' }} >
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" width="70px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" width="60px" height="37px" />
          <Image src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" width="60px" height="37px" />
          <Image display={{ base: 'none', lg: 'block' }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" width="60px" height="37px" />
          <Image display={{ base: 'none', lg: 'block' }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" width="60px" height="37px" />
          <Image display={{ base: 'none', lg: 'block' }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" width="60px" height="37px" />
          <Image display={{ base: 'none', lg: 'block' }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" width="60px" height="37px" />
          <Image display={{ base: 'none', lg: 'block' }} src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" width="60px" height="37px" />
        </Grid>
        <Spacer />
        <Box>
          <Text fontWeight='600' mt={{ base: 4, md: 0 }} fontSize='13px'>Need Help&nbsp; ? &nbsp;Contact Us</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Cart