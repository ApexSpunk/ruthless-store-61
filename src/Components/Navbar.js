import { Box, Flex, Grid, Image, Input, InputGroup, InputLeftElement, Spacer, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon } from '@chakra-ui/icons'
import { AuthContext } from '../Context/AuthContext/AuthProvider'
import { CartContext } from '../Context/CartContext/CartProvider'

function Navbar() {

  const { state: { authState } } = useContext(AuthContext)
  const { state: { cart, total, qty } } = useContext(CartContext)
  return (
    <Box position='sticky' top='0' zIndex='1' bg='white' boxShadow='md'>
      <Flex height={20} alignItems="center" justifyContent="center" px='16'>
        <Box mr='30px'>
          <Image src="./logo.png" alt="logo" w="60px" h="60px" />
        </Box>
        <Flex display={{ base: 'none', md: 'flex' }} gap={{ base: 5, xl: 10 }} align="center" fontWeight="semibold" fontSize='14px'>
          <Link to="/store"><Text >MEN</Text></Link>
          <Link to="/store"><Text>WOMEN</Text></Link>
          <Link to="/store"><Text>KIDS</Text></Link>
          <Link to="/store"><Text>HOME & LIVING</Text></Link>
          <Box display={{ base: 'none', xl: 'block' }}><Link to="/store"><Text>BEAUTY</Text></Link></Box>
          <Link to="/store"><Text>STUDIO</Text><Text position='absolute' fontSize='10px' color='red' m='-33px 0 0 45px' >NEW</Text></Link>
        </Flex>
        <Spacer />
        <Box w={{ base: "15%", '2xl': '35%', 'xl': '32%', lg: '30%', md: '25%' }} display={{ base: 'none', lg: 'block' }}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input type='text' placeholder='Search for products brands and more' bg='gray.100' border='none' _focus={{ backgroundColor: 'white' }} fontSize='14px' />
          </InputGroup>
        </Box>
        <Spacer />
        <Flex gap={6} align="center" fontWeight="semibold" fontSize='14px'>
          <Link to={authState.isAuth ? null : "/login"}>
            <Box align="center">
              <Image src="./user.png" alt="user" w="20px" h="20px" />
              <Text mt='1' fontSize="12px">{authState.isAuth ? authState.user : 'Login'}</Text>
            </Box>
          </Link>
          <Box display={{ base: 'none', md: 'block' }}>
            <Link>
              <Box align="center">
                <Image src="./heart.png" alt="heart" w="20px" h="20px" />
                <Text mt='1' fontSize="12px">Wishlist</Text>
              </Box>
            </Link>
          </Box>
          <Link to="/cart">
            <Box align="center">
              <Image src="./bag.png" alt="cart" w="20px" h="20px" />
              <Text mt='1' fontSize="12px">Bag</Text>
              <Text position='absolute' bg='#ff3c6f' borderRadius='full' lineHeight='20px' w='20px' h='20px' fontSize='12px' color='white' mt='-54px' ml='18px' >{qty}</Text>
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
