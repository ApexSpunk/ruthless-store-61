import { Box, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, useToast, Tbody, Tr, Td, Container, Text, Image, Grid, Button, InputGroup, InputRightElement, Input, FormHelperText, Table, SkeletonText, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import InvitePromo from '../Components/InvitePromo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCar, faClover, faEnvelope, faFileInvoice, faMemory, faSearch, faShieldHeart, faStar, faTextWidth, faTractor, faTruck } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { CartContext } from '../Context/CartContext/CartProvider'
import Action from '../Context/CartContext/Action'
import Footer from '../Components/Footer'
import ProductSkeleton from '../Components/ProductSkeleton'

let timer;
function Product() {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams()
    const [similarProducts, setSimilarProducts] = useState([])
    const [active, setActive] = useState(-1);
    const [activeProduct, setActiveProduct] = useState({});
    const [activeImage, setActiveImage] = useState(0);

    const { dispatch } = useContext(CartContext);
    const toast = useToast();

    const getProduct = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://protected-stream-70362.herokuapp.com/products/${id}`);
            const data = await response.json();
            setProduct({ ...data, rating: ((4 + Math.random()).toFixed(1)), reviews: (((60 * Math.random()) * (1 + Math.random())).toFixed(1)) })
            const similar = await fetch(`https://protected-stream-70362.herokuapp.com/products?category=${data.category}&_limit=12`);
            const similarData = await similar.json();
            console.log(similarData, data.category)
            setSimilarProducts(similarData);
            // setLoading(false)
            setSearchParams({ name: data.name })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProduct();
    }, [id]);

    function handleFocus(product) {
        setActiveImage(0);
        clearInterval(timer);
        setActive(product.id);
        setActiveProduct(product);
        handleImage(product.images.length);
    }

    const handleImage = (length) => {
        console.log('first', length)
        let index = activeImage
        timer = setInterval(() => {
            if (index === length - 1) {
                index = -1
            }
            index++;
            setActiveImage(() => index);
        }, 1000);
    }


    return (
        <Box>
            <InvitePromo />
            <Box mx='30px'>
                <Box mt={6}>
                    <Breadcrumb fontSize='14px'>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Mens</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Tshirts</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink fontWeight='bold' href='#'>{product.name}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
            </Box>
            {
                loading ?
                    <Box>
                        <Grid templateColumns={{ base: 'repeat(1,1fr)', md: '58% 41%' }} gap='1%' m='auto' mt='6' mx='30px'>
                            <Box>
                                <Box display='grid' justifyContent='flex-start' gridTemplateColumns='repeat(2, 1fr)' gap='2'>
                                    {
                                        Array(6).fill().map((_, index) => (
                                            <Skeleton key={index} w='100%' h='500px' />
                                        ))
                                    }
                                </Box>
                            </Box>
                            <Box px='4'>

                                <Skeleton mt='2' h={5} spacing='4' w='200px' />
                                <Skeleton mt='4' h={3} spacing='4' w='full' />
                                <SkeletonText mt='8' noOfLines={4} spacing='4' />
                                <Skeleton mt='8' h={3} spacing='4' w='full' />
                                <Flex gap={6} >
                                    <SkeletonCircle mt='8' size='16' />
                                    <SkeletonCircle mt='8' size='16' />
                                    <SkeletonCircle mt='8' size='16' />
                                    <SkeletonCircle mt='8' size='16' />
                                </Flex>
                                <Flex mt='8' gap={6} >
                                    <Skeleton mt='2' h={16} spacing='4' w='250px' />
                                    <Skeleton mt='2' h={16} spacing='4' w='250px' />
                                </Flex>
                                <Skeleton mt='8' h={5} spacing='4' w='200px' />
                                <Skeleton mt='4' h={3} spacing='4' w='full' />
                                <SkeletonText mt='8' noOfLines={4} spacing='4' />
                                <Skeleton mt='8' h={3} spacing='4' w='full' />
                            </Box>
                        </Grid>
                    </Box>
                    :
                    <Box>
                        <Grid templateColumns={{ base: 'repeat(1,1fr)', md: '58% 41%' }} gap='1%' m='auto' mt='6' mx='30px'>
                            <Box>
                                <Box display='grid' justifyContent='flex-start' gridTemplateColumns='repeat(2, 1fr)' gap='2'>
                                    {
                                        product.images.map((el, index) => <Image key={index} src={el} w='100%' />)
                                    }
                                </Box>
                            </Box>
                            <Box px='4'>
                                <Box>
                                    <Text fontSize='22px' fontWeight='bold'>{product.name}</Text>
                                    <Text fontSize='17px' color='gray.500'>{product.tagline}</Text>
                                    <Box mt='3' border='1px solid' borderColor='gray.200' w='170px' p='1' borderRadius='sm' textAlign='center'>
                                        <Text fontSize='14px' fontWeight='bold'>
                                            {product.rating}&nbsp;<FontAwesomeIcon color='teal' icon={faStar} />
                                            <Text as='span' fontWeight='thin' color='gray.400'>&nbsp; | &nbsp;</Text>
                                            <Text as='span' color='gray.500' fontSixe='12px' fontWeight='thin'>
                                                {product.reviews}k Rating
                                            </Text>
                                        </Text>
                                    </Box>
                                    <Box mt='4' borderBottom='1px solid' borderColor='gray.200'></Box>
                                    <Flex gap={1} alignItems='center' mt='2'>
                                        <Text fontWeight='bold' fontSize='22px' mt='2'>₹{product.price}</Text>
                                        <Text fontWeight='thin' fontSize='18px' color='gray' mt='6px' display='flex'>
                                            <Text fontWeight='thin' fontSize='20px' >&nbsp; MRP&nbsp;</Text>
                                            <Text as={'s'} mt='2px'>₹{product.mrp}</Text>
                                        </Text>
                                        <Text fontWeight='bold' fontSize='18px' color='orange.400' mt='6px'>&nbsp; ({((product.price * 100) / product.mrp).toFixed(0)}% OFF)</Text>
                                    </Flex>
                                    <Text mt='1' fontSize='14px' fontWeight='bold' color='teal.500'>Inclusive of all taxes</Text>
                                    <Text mt='4' fontSize='16px' fontWeight='bold' color='black'>MORE COLOR</Text>
                                    <Image src={product.images[0]} w='60px' mt='1' />
                                    <Flex mt='1' gap={6} alignItems='center'>
                                        <Text mt='4' fontSize='16px' fontWeight='bold' color='black'>SELECT SIZE</Text>
                                        <Text mt='4' fontSize='15px' fontWeight='bold' color='#ff3c6f' ml='2'>SIZE CHART &#x3E;</Text>
                                    </Flex>
                                    <Flex mt='2'>
                                        {
                                            ['S', 'M', 'L', 'XL', 'XXL', '3XL'].map((el, index) => <Box key={index} w='50px' h='50px' lineHeight='47px' fontWeight='bold' border='1px solid' cursor='pointer' borderColor='gray.200' _hover={{ borderColor: '#ff3c6f' }} borderRadius='full' textAlign='center' mt='2' mr='2'>{el}</Box>)
                                        }
                                    </Flex>
                                    <Flex gap={4} mt='2'>
                                        <Button mt='4' w='100%' h='50px' bg="#ff3c6f" color={'white'} fontWeight='bold' fontSize='16px' borderRadius='5px' _hover={{ bg: 'red.500' }} onClick={() => {
                                            dispatch({ type: Action.ADD_TO_CART, payload: { product: product, qty: 1 } })
                                            toast({
                                                title: `${product.name}`,
                                                description: "Added to your cart",
                                                status: "success",
                                                duration: 4000,
                                                isClosable: true,
                                            })
                                        }}>
                                            <FontAwesomeIcon icon={faBagShopping} />&nbsp; ADD TO BAG
                                        </Button>
                                        <Button mt='4' w='100%' h='50px' bg="ff3c6f" border='1px solid' borderColor='gray.300' fontWeight='bold' fontSize='16px' borderRadius='5px' _hover={{ borderColor: 'gray' }}>
                                            <FontAwesomeIcon icon={faHeart} />&nbsp; WISHLIST
                                        </Button>
                                    </Flex>
                                    <Box mt='4' borderBottom='1px solid' borderColor='gray.200'></Box>
                                    <Flex gap={2} mt='2' alignItems='center'>
                                        <Text fontWeight='bold' fontSize='18px' mt='1'>Rs. {product.price}</Text>
                                        <Text fontWeight='thin' as={'s'} fontSize='15px' color='gray' mt='6px'>Rs. {product.mrp}</Text>
                                        <Text fontWeight='thin' fontSize='15px' color='orange.400' mt='6px'>({((product.price * 100) / product.mrp).toFixed(0)}% OFF)</Text>
                                    </Flex>
                                    <Text mt='1' fontSize='14px' color='#ff3c6f' fontWeight='bold'><Text as='span' fontWeight='400' color='black'>Seller:</Text> Omnitech Retail</Text>
                                    <Box mt='4' borderBottom='1px solid' borderColor='gray.200'></Box>
                                    <Text mt='6' fontSize='16px' fontWeight='bold' color='black'>DELIVERY OPTIONS &nbsp; <FontAwesomeIcon icon={faTruck} /></Text>
                                    <Box>
                                        <InputGroup mt='4' w='60%'>
                                            <InputRightElement pointerEvents="none" children={<Text color='#ff3c6f' cursor='pointer' ml='-50px' fontWeight='bold' fontSize='14px'>Check</Text>} />
                                            <Input fontSize='14px' type="number" fontWeight='bold' _placeholder={{ fontWeight: 'normal' }} placeholder="Enter Pincode" />
                                        </InputGroup>
                                        <Text mt='1' fontSize='12px' color='gray.500'>Please enter PIN code to check delivery time & Pay on Delivery Availability</Text>
                                    </Box>
                                    <Box mt='6'>
                                        <Text mt='2' color='blackAlpha.700' fontSize='15px' fontWeight='normal' >100% Original Products</Text>
                                        <Text mt='2' color='blackAlpha.700' fontSize='15px' fontWeight='normal' >Pay on delivery might be available</Text>
                                        <Text mt='2' color='blackAlpha.700' fontSize='15px' fontWeight='normal' >Easy 30 days returns and exchanges</Text>
                                        <Text mt='2' color='blackAlpha.700' fontSize='15px' fontWeight='normal' >Try & Buy might be available</Text>
                                    </Box>
                                    <Box mt='6' borderBottom='1px solid' borderColor='gray.200'></Box>
                                    <Text mt='6' fontSize='16px' fontWeight='bold' color='black'>PRODUCT DETAILS  &nbsp; <FontAwesomeIcon icon={faFileInvoice} /></Text>
                                    <Text mt='4' fontSize='14px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>
                                        Keep this hip this season with the HRX Men's Athleisure T-shirt. This versatile T-shirt can be styled any way you like for the ultimate gym-to-street look.
                                    </Text>
                                    <Text mt='6' fontSize='15px' fontWeight='bold'>
                                        Features
                                    </Text>
                                    <Text mt='1' fontSize='14px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>
                                        <Text>Athleisure T-shirt can be paired with tracks, khakis or jeans</Text>
                                        <Text>Style: Round Neck</Text>
                                        <Text>Sleeve: Short Sleeves</Text>
                                        <Text>Colour: Yellow</Text>
                                        <Text>Print: Typography</Text>
                                        <Text>Fit: Regular</Text>
                                    </Text>
                                    <Text mt='6' fontSize='15px' fontWeight='bold'>
                                        Size & Fit
                                    </Text>
                                    <Text mt='1' fontSize='14px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>
                                        <Text>The model height 6' is wearing a size M</Text>
                                    </Text>
                                    <Text mt='6' fontSize='15px' fontWeight='bold'>
                                        Material & Care
                                    </Text>
                                    <Text mt='1' fontSize='14px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>
                                        <Text>100% Cotton</Text>
                                        <Text>Machine-wash</Text>
                                    </Text>
                                    <Text mt='6' fontSize='15px' fontWeight='bold'>
                                        Specifications
                                    </Text>
                                    <Box display='grid' mt='-15px' gridTemplateColumns='repeat(2, 1fr)' gap='6'>
                                        <Table mt='4'>
                                            <Tbody>
                                                <Tr>
                                                    <Td px='0' py='2' >
                                                        <Box>
                                                            <Text fontSize='12px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Fit</Text>
                                                            <Text fontSize='15px' mt='-5px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Regular Fit</Text>
                                                        </Box>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td px='0' py='2'>
                                                        <Box>
                                                            <Text fontSize='12px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Main Trend</Text>
                                                            <Text fontSize='15px' mt='-5px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Typography or Slogan Print</Text>
                                                        </Box>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td px='0' py='2'>
                                                        <Box>
                                                            <Text fontSize='12px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Neck</Text>
                                                            <Text fontSize='15px' mt='-5px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Round Neck</Text>
                                                        </Box>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td px='0' py='2'>
                                                        <Box>
                                                            <Text fontSize='12px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Pattern</Text>
                                                            <Text fontSize='15px' mt='-5px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Printed</Text>
                                                        </Box>
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                        <Table mt='4' >
                                            <Tbody>
                                                <Tr>
                                                    <Td px='0' py='2'>
                                                        <Box>
                                                            <Text fontSize='12px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Length</Text>
                                                            <Text fontSize='15px' mt='-5px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Regular</Text>
                                                        </Box>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td px='0' py='2'>
                                                        <Box>
                                                            <Text fontSize='12px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Neck Type</Text>
                                                            <Text fontSize='15px' mt='-5px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Round Neck</Text>
                                                        </Box>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td px='0' py='2'>
                                                        <Box>
                                                            <Text fontSize='12px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Occasion</Text>
                                                            <Text fontSize='15px' mt='-5px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Casual</Text>
                                                        </Box>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td px='0' py='2'>
                                                        <Box>
                                                            <Text fontSize='12px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Pattern Covered</Text>
                                                            <Text fontSize='15px' mt='-5px' fontWeight='normal' color='blackAlpha.700' lineHeight='25px'>Chest</Text>
                                                        </Box>
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </Box>
                                    <Text mt='4' fontSize='14px' color='#ff3c6f' fontWeight='bold'>
                                        See more
                                    </Text>
                                </Box>
                            </Box>
                        </Grid>
                        <Box m='auto' mt='6' mx='30px'>
                            <Text fontWeight='bold'>SIMILAR PRODUCTS</Text>
                            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(6, 1fr)' }} mt='6' gap='6'>
                                {
                                    loading ? Array(10).fill().map((_, index) => (
                                        <ProductSkeleton />
                                    )) : similarProducts.map((product) => (
                                        <Box key={product.id} _hover={{ boxShadow: 'lg', cursor: 'pointer' }} borderRadius='3px' bg='white' onMouseLeave={() => { setActive(-1); clearInterval(timer); setActiveImage(0) }} onMouseEnter={() => handleFocus(product)}>
                                            <Box>
                                                {
                                                    product.id == active ?
                                                        <Link to={`/product/${product.id}`}>
                                                            <Box>
                                                                <Image src={activeProduct.images[activeImage]} w='100%' />
                                                                <Box w='full' bg='white' mt='-32px' position='relative' p='3' >
                                                                    <Flex width='50%' mb='2' m='auto' gap={2} alignItems='center' justifyContent='center'>{
                                                                        activeProduct.images.map((el, index) => <Box h='4px' key={index} w='4px' borderRadius='full' bg={index == activeImage ? 'red' : 'gray'}></Box>)
                                                                    }</Flex>
                                                                    <Link to=''>
                                                                        <Button mt={2} fontSize='14px' h='30px' border='1px solid #ff3c6f' w='full' borderRadius='3px' color='#ff3c6f' bg='white' _hover={{ bg: '#ff3c6f', color: 'white' }} onClick={() => {
                                                                            dispatch({ type: Action.ADD_TO_CART, payload: { product: activeProduct, qty: 1 } })
                                                                            toast({
                                                                                title: `${activeProduct.name}`,
                                                                                description: "Added to your cart",
                                                                                status: "success",
                                                                                duration: 4000,
                                                                                isClosable: true,
                                                                            })
                                                                        }}>
                                                                            <FontAwesomeIcon icon={faBagShopping} />&nbsp; Add to Bag
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

                                        </Box>
                                    ))
                                }
                            </Grid>
                        </Box>


                    </Box>
            }
            <Footer />
        </Box>
    )
}

export default Product
