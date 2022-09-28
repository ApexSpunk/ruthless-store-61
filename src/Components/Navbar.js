import { Box, Flex, Grid, Image, Input, InputGroup, InputLeftElement, Spacer, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon } from '@chakra-ui/icons'
import { AuthContext } from '../Context/AuthContext/AuthProvider'

function Navbar() {

  const { state: { authState } } = useContext(AuthContext)
  return (
    <Box position='sticky' top='0' zIndex='1' bg='white' boxShadow='md'>
      <Flex height={20} alignItems="center" justifyContent="center" px='16'>
        <Box mr='30px'>
          <Image src="./logo.png" alt="logo" w="60px" h="60px" />
        </Box>
        <Flex gap={10} align="center" fontWeight="semibold" fontSize='14px'>
          <Link to="/store"><Text >MEN</Text></Link>
          <Link to="/store"><Text>WOMEN</Text></Link>
          <Link to="/store"><Text>KIDS</Text></Link>
          <Link to="/store"><Text>HOME & LIVING</Text></Link>
          <Link to="/store"><Text>BEAUTY</Text></Link>
          <Link to="/store"><Text>STUDIO</Text><Text position='absolute' fontSize='10px' color='red' m='-33px 0 0 45px' >NEW</Text></Link>
        </Flex>
        <Spacer />
        <Box w="35%">
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
          <Link to={authState.isAuth ? null: "/login"}>
            <Box align="center">
              <Image src="./user.png" alt="user" w="20px" h="20px" />
              <Text mt='1' fontSize="12px">{authState.isAuth ? authState.user : 'Login'}</Text>
            </Box>
          </Link>
          <Link>
            <Box align="center">
              <Image src="./heart.png" alt="heart" w="20px" h="20px" />
              <Text mt='1' fontSize="12px">Wishlist</Text>
            </Box>
          </Link>
          <Link to="/cart">
            <Box align="center">
              <Image src="./bag.png" alt="cart" w="20px" h="20px" />
              <Text mt='1' fontSize="12px">Bag</Text>
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
