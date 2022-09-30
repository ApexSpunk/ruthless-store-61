import React from 'react'
import { Box, Image, Flex, Text, Button, Spacer } from '@chakra-ui/react'

function InvitePromo() {
    return (
        <Box bg='#dee6fa' >
            <Flex w={{base:'auto',md:'520px'}} m='auto' h='16' alignItems='center' justifyContent='space-between' px='4'>
                <Image src='https://constant.myntassets.com/pwa/assets/img/rupee_illustration.png' w='60px' />
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='left' ml='4'>
                    <Text fontWeight='semibold' fontSize='13'>
                        Invite friends to Myntra’s BFF & get up to ₹150
                    </Text>
                    <Text display={{base:'none',md:"block"}} fontWeight='semibold' fontSize='13'>
                        MynCash for every person who visits
                    </Text>
                </Box>
                <Spacer/>
                <Button border='1px solid' borderColor='gray.300' h='30px' fontWeight='semibold' fontSize='12px' borderRadius='3px' color='#ff2d79' bg='transparent' _hover={{ bg: 'transparent' }}>INVITE NOW 	&#62;</Button>
            </Flex>
        </Box>
    )
}

export default InvitePromo
