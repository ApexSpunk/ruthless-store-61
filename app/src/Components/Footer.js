import { Box, Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
    return (
        <Box w='100%' bg='gray.50' pt='20px' mt='8'>
            <Container maxW='container.lg' mt='10' >
                <Grid templateColumns='repeat(11, 1fr)' gap={6}>
                    <GridItem colSpan={{ base: '11', md: '2' }}>
                        <Text fontSize='13px' fontWeight='bold'>ONLINE SHOPPING</Text>
                        <Text fontSize='14px' mt='4'>Men</Text>
                        <Text fontSize='14px' mt='1'>Women</Text>
                        <Text fontSize='14px' mt='1'>Kids</Text>
                        <Text fontSize='14px' mt='1'>Home & Living</Text>
                        <Text fontSize='14px' mt='1'>Beauty</Text>
                        <Text fontSize='14px' mt='1'>Gift Cards</Text>
                    </GridItem>
                    <GridItem colSpan={{ base: '11', md: '2' }}>
                        <Text fontSize='13px' fontWeight='bold'>CUSTOMER POLICIES</Text>
                        <Text fontSize='14px' mt='4'>Contact Us</Text>
                        <Text fontSize='14px' mt='1'>FAQ</Text>
                        <Text fontSize='14px' mt='1'>T&C</Text>
                        <Text fontSize='14px' mt='1'>Terms Of Use</Text>
                        <Text fontSize='14px' mt='1'>Track Orders</Text>
                        <Text fontSize='14px' mt='1'>Shipping</Text>
                    </GridItem>
                    <GridItem colSpan={{ base: '11', md: '4' }}>
                        <Text fontSize='13px' fontWeight='bold'>EXPERIENCE MYNTRA APP ON MOBILE</Text>
                        <Flex gap={4} mt='6'>
                            <Image src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png' w='130px' />
                            <Image src='https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png' w='130px' />
                        </Flex>
                        <Text fontSize='13px' mt={6} fontWeight='bold'>KEEP IN TOUCH</Text>
                        <Flex gap={2} mt='2'>
                            <Image src='../social.png' w='170px' />
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={{ base: '11', md: '3' }} display={{ base: 'none', md: 'block' }}>
                        <Image src='../prod.png' w='100%' />
                    </GridItem>
                </Grid>
            </Container>
            <Flex mt='10' justifyContent='center' alignItems='center' flexDirection='column' bg={'gray.100'} p='6'>
                <Text fontSize='13px' color='gray.600' fontWeight='bold'>© 2021 Myntra Designs Pvt. Ltd. All Rights Reserved.</Text>
            </Flex>
        </Box>
    )
}

export default Footer
