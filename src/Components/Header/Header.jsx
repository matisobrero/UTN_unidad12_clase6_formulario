import { Box, Flex, Heading, Image, Spacer, Text, Link } from '@chakra-ui/react'
import React from 'react'
import logo from '../Header/logo.png'


function Header() {
  return (
    <Flex
    p="1em"
    bg="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 100%)"
    color="white"
    alignItems="center"
    justifyContent="space-between"
    
  >
    <Link href="/inicio" _hover={{ textDecoration: 'none', color: 'gray.300' }} transition="color 0.3s ease-in-out">
      <Box mr="1em" ml="50px">
        <Heading fontSize={{ base: "15px", md: "18px", lg: "22px" }}>Inicio</Heading>
      </Box>
    </Link>
    <Link href="/actividades" _hover={{ textDecoration: 'none', color: 'gray.300' }} transition="color 0.3s ease-in-out">
      <Box mr="1em">
        <Heading fontSize={{ base: "15px", md: "18px", lg: "22px" }}>Actividades</Heading>
      </Box>
    </Link>
    <Link href="/contacto" _hover={{ textDecoration: 'none', color: 'gray.300' }} transition="color 0.3s ease-in-out">
      <Box mr="1em">
        <Heading fontSize={{ base: "15px", md: "18px", lg: "22px" }}>Contacto</Heading>
      </Box>
    </Link>
    <Spacer />

    <Flex flexDirection="colum" justifyContent="center">
      
      <Link href="/" _hover={{ textDecoration: 'none' }} transition="color 0.3s ease-in-out">
        <Box _hover={{ transform: 'scale(1.1)' }}>
          <Image src={logo} w={{ base: "40px", md: "50px", lg: "80px" }} mr="50px" alt="Logo" />
        </Box>
      </Link>
    </Flex>
  </Flex>
  )
}

export default Header