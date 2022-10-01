import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
    return (
        <Box w='100%' h='100px' bg='gray.50' p='20px'>
            <Container maxW='container.lg' mt='10' >
                <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                    <GridItem colSpan={{ base: '4', md: '1' }}>
                        <Text fontSize='14px' fontWeight='bold'>About Us</Text>
                    </GridItem>
                    <GridItem colSpan={{ base: '4', md: '1' }}>
                        <Text fontSize='14px' fontWeight='bold'>About Us</Text>
                    </GridItem>
                    <GridItem colSpan={{ base: '4', md: '1' }}>
                        <Text fontSize='14px' fontWeight='bold'>About Us</Text>
                    </GridItem>
                    <GridItem colSpan={{ base: '4', md: '1' }}>
                        <Text fontSize='14px' fontWeight='bold'>About Us</Text>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer
