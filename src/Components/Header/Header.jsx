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
    flexWrap="wrap"
  >
    <Link href="/inicio" _hover={{ textDecoration: 'none', color: 'gray.300' }} transition="color 0.3s ease-in-out">
      <Box mr="1em" ml="50px">
        <Heading size="md">Inicio</Heading>
      </Box>
    </Link>
    <Link href="/actividades" _hover={{ textDecoration: 'none', color: 'gray.300' }} transition="color 0.3s ease-in-out">
      <Box mr="1em">
        <Heading size="md">Actividades</Heading>
      </Box>
    </Link>
    <Link href="/contacto" _hover={{ textDecoration: 'none', color: 'gray.300' }} transition="color 0.3s ease-in-out">
      <Box mr="1em">
        <Heading size="md">Contacto</Heading>
      </Box>
    </Link>
    <Spacer />
    <Flex alignItems="center">
      {/* Contenedor para centrar el logo */}
      <Link href="/" _hover={{ textDecoration: 'none' }} transition="color 0.3s ease-in-out">
        <Box _hover={{ transform: 'scale(1.1)' }}>
          <Image src={logo} w={90} mr="50px" alt="Logo" />
          <Text mt="-15px" color="black" fontWeight="bold" textShadow="0 0 2px white">
            PC Solutions
          </Text>
        </Box>
      </Link>
    </Flex>
  </Flex>
  )
}

export default Header