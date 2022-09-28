import { Box, Grid, Text, Image, Flex, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'

let timer;
function Products() {

    const [products, setProducts] = useState([]);
    const [active, setActive] = useState(-1);
    const [activeProduct, setActiveProduct] = useState({});
    const [activeImage, setActiveImage] = useState(0);

    const getProducts = async () => {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    function handleFocus(product) {
        setActiveImage(0);
        clearInterval(timer);
        setActive(product.id);
        setActiveProduct(product);
        handleImage(product.images.length);
    }

    const handleImage = (length) => {
        let index = activeImage
        timer = setInterval(() => {
            console.log(activeProduct['images'][index]);
            if (index === length - 1) {
                index = -1
            }
            index++;
            setActiveImage(() => index);
        }, 1000);
    }

    return (
        <Box>
            <Box>
                <Grid templateColumns="repeat(5, 1fr)" gap='6' m='auto'>
                    {products.map((product) => (
                        <Box key={product.id} _hover={{ boxShadow: 'lg', cursor: 'pointer' }} borderRadius='3px' bg='white' onMouseLeave={() => { setActive(-1); clearInterval(timer); setActiveImage(0) }} onMouseEnter={() => handleFocus(product)}>
                            <Box>
                                {
                                    product.id == active ?
                                        <Box>
                                            <Image src={activeProduct.images[activeImage]} w='100%' />
                                            <Box w='full' bg='white' mt='-32px' position='relative' p='3' >
                                                <Flex width='50%' mb='2' m='auto' gap={2} alignItems='center' justifyContent='center'>{
                                                    activeProduct.images.map((el, index) => <Box h='4px' w='4px' borderRadius='full' bg={index == activeImage ? 'red' : 'gray'}></Box>)
                                                }</Flex>
                                                <Button mt={2} fontSize='14px' h='30px' border='1px solid #ff3c6f' w='full' borderRadius='3px' color='#ff3c6f' bg='white' _hover={{ bg: '#ff3c6f', color: 'white' }}>Add to Cart</Button>
                                            </Box>
                                            <Box p={3} pt='0' >
                                                <Text fontWeight='thin' fontSize='12px' color='gray' mt='0'>Sizes: XS, S, M, L, XL, XXL, 3Xl</Text>
                                                <Flex gap={1} alignItems='center'>
                                                    <Text fontWeight='bold' fontSize='15px' mt='1'>Rs. {product.price}</Text>
                                                    <Text fontWeight='thin' as={'s'} fontSize='12px' color='gray' mt='6px'>Rs. {product.mrp}</Text>
                                                    <Text fontWeight='thin' fontSize='12px' color='orange.400' mt='6px'>({((product.price * 100) / product.mrp).toFixed(0)}% OFF)</Text>
                                                </Flex>
                                            </Box>
                                        </Box> : <Box><Image src={product.images[0]} />
                                            <Box p={3}>
                                                <Text fontWeight='extrabold' fontSize='15px'>{product.name}</Text>
                                                <Text fontWeight='thin' fontSize='12px' color='gray' mt='0'>{product.tagline.substring(0, 22)}...</Text>
                                                <Flex gap={1} alignItems='center'>
                                                    <Text fontWeight='bold' fontSize='15px' mt='1'>Rs. {product.price}</Text>
                                                    <Text fontWeight='thin' as={'s'} fontSize='12px' color='gray' mt='6px'>Rs. {product.mrp}</Text>
                                                    <Text fontWeight='thin' fontSize='12px' color='orange.400' mt='6px'>({((product.price * 100) / product.mrp).toFixed(0)}% OFF)</Text>
                                                </Flex>
                                            </Box>
                                        </Box>
                                }
                            </Box>

                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default Products
