import { AtSignIcon, EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Box, Text, Image, InputGroup, InputLeftElement, Input, Button, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext/AuthProvider'
import Action from '../Context/AuthContext/Action'

function SignUp() {

  const { status, dispatch } = useContext(AuthContext);
  const [user, setUser] = useState({ name: "", email: "", password: "" })
  const [error, setError] = useState("")
  const toast = useToast()


  const handleSignUp = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast({
          title: `Congrats ${data.name}!`,
          position: "bottom-left",
          description: "Your Account Has Been Created",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
        dispatch({ type: Action.SIGNUP, payload: { user: data.name, email: data.email } })
      }).catch((err) => {
        toast({
          title: "Error",
          description: "Something went wrong.",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
        setError(err)
      }
      )
  };



  return (
    <Box
      w='100%'
      h='90vh'
      bgGradient={[
        'linear(to-t, orange.50, pink.50)',
      ]}
      display='flex'
      justifyContent='center'
      alignItems='center'

    >
      <Box w='400px' h='80vh' margin='auto'>
        <Image src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/21/21b90b50-9fc5-40bd-912a-fd2be831bcd41663699494558-offer-banner-300-600x240-code-_-MYNTRA400.png" alt="shipping" w="100%" />
        <Box bg='white' p={8}>
          <Text fontSize='20px' fontWeight='600'>Login <Text as='span' fontWeight='normal' fontSize='16px'>or</Text> Signup</Text>
          <Box mt='6' mb='4' gap={4} display='flex' flexDirection='column'>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<AtSignIcon color='gray.300' />}
              />
              <Input type='text' borderRadius='sm' fontSize='14px' placeholder='Your Name' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon color='gray.300' />}
              />
              <Input type='email' borderRadius='sm' fontSize='14px' placeholder='Email Address' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<LockIcon color='gray.300' />}
              />
              <Input type='password' borderRadius='sm' fontSize='14px' placeholder='Password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </InputGroup>
          </Box>
          <Text my={6} fontSize='14px'>By continuing, I agree to the <Text as='span' color='#ff3c6f' fontWeight='bold'>Terms Of Use</Text> & <Text as='span' color='#ff3c6f' fontWeight='bold'>Privacy Policy</Text></Text>
          <Button w='100%' bg='#ff3c6f' borderRadius='5px' color='white' _hover={{ backgroundColor: '#ff3c6f' }} onClick={handleSignUp}>Sign Up</Button>
          <Text mt={8} fontSize='14px'>Don't Have An Account? <Text as='span' color='#ff3c6f' fontWeight='bold'>Create Account</Text></Text>
        </Box>
      </Box>
    </Box>
  )
}

export default SignUp