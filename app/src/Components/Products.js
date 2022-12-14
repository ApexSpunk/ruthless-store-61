import { Box, Grid, Text, Image, Flex, Button, useToast, SlideFade, Alert, AlertIcon, AlertTitle, AlertDescription, GridItem, ScaleFade } from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext/CartProvider'
import Action from '../Context/CartContext/Action'
import ProductSkeleton from './ProductSkeleton';
import { useSearchParams } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext/AuthProvider'

let timer;
function Products({ products, setProducts }) {


    const [active, setActive] = useState(-1);
    const [activeProduct, setActiveProduct] = useState({});
    const [activeImage, setActiveImage] = useState(0);
    const [loading, setLoading] = useState(false);

    const { dispatch } = useContext(CartContext);
    const { state } = useContext(AuthContext);
    const toast = useToast();
    const [searchParams, setSearchParams] = useSearchParams();

    const getProducts = async () => {
        setLoading(true);
        const query = searchParams.get('category')
        try {
            const response = await fetch('https://apirest-kkir.onrender.com/products' + (query ? `?category=${query}` : ''));
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getProducts();
    }, [searchParams]);

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
            if (index === length - 1) {
                index = -1
            }
            index++;
            setActiveImage(() => index);
        }, 1000);
    }

    if (!products.length && !loading) {
        return <Alert
            status='warning'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            w='600px'
            m='10% auto'

        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                No Products Found
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                No Products Found Related to your search
            </AlertDescription>
        </Alert>
    }

    return (
        <Box>
            <Box>
                <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} gap='6' m='auto'>
                    {
                        loading ? Array(10).fill().map((_, index) => (
                            <ProductSkeleton />
                        )) : products.map((product) => (
                            <GridItem colSpan='1' key={product.id} _hover={{ boxShadow: 'lg', cursor: 'pointer' }} borderRadius='3px' bg='white' onMouseLeave={() => { setActive(-1); clearInterval(timer); setActiveImage(0) }} onMouseEnter={() => handleFocus(product)}>
                                <Box>
                                    {
                                        product.id == active ?
                                            <Link to={`/product/${product.id}?category`}>
                                                <Box>
                                                    <Image src={activeProduct.images[activeImage]} w='100%' />
                                                    <Box w='full' bg='white' mt='-32px' position='relative' p='3' >
                                                        <Flex width='50%' mb='2' m='auto' gap={2} alignItems='center' justifyContent='center'>{
                                                            activeProduct.images.map((el, index) => <Box h='4px' key={index} w='4px' borderRadius='full' bg={index == activeImage ? 'red' : 'gray'}></Box>)
                                                        }</Flex>
                                                        <Link>
                                                            <Button mt={2} fontSize='14px' h='30px' border='1px solid #ff3c6f' w='full' borderRadius='3px' color='#ff3c6f' bg='white' _hover={{ bg: '#ff3c6f', color: 'white' }} onClick={() => {
                                                                if (state.authState.isAuth) {
                                                                    dispatch({ type: Action.ADD_TO_CART, payload: { product: product, qty: 1 } })
                                                                    toast({
                                                                        title: `${product.name}`,
                                                                        description: "Added to your cart",
                                                                        status: "success",
                                                                        duration: 4000,
                                                                        isClosable: true,
                                                                    })
                                                                } else {
                                                                    toast({
                                                                        title: "Please Login",
                                                                        description: "You need to login to add items to cart",
                                                                        status: "info",
                                                                        duration: 4000,
                                                                        isClosable: true,
                                                                    })
                                                                }
                                                            }
                                                            }>
                                                                <FontAwesomeIcon icon={faBagShopping} />&nbsp; Add To Bag
                                                            </Button>
                                                        </Link>
                                                    </Box>
                                                    <Box p={3} pt='0' >
                                                        <Text fontWeight='thin' fontSize='12px' color='gray' mt='0'>Sizes: XS, S, M, L, XL, XXL, 3Xl</Text>
                                                        <Flex gap={1} alignItems='center'>
                                                            <Text fontWeight='bold' fontSize='15px' mt='1'>Rs. {product.price}</Text>
                                                            <Text fontWeight='thin' as={'s'} fontSize='12px' color='gray' mt='6px'>Rs. {product.mrp}</Text>
                                                            <Text fontWeight='thin' fontSize='12px' color='orange.400' mt='6px'>({((product.price * 100) / product.mrp).toFixed(0)}% OFF)</Text>
                                                        </Flex>
                                                    </Box>
                                                </Box>
                                            </Link>
                                            : <Box>
                                                <Image src={product.images[0]} />
                                                <Box>
                                                </Box>
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

                            </GridItem>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Products
