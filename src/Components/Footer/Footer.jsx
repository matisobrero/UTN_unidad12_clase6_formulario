import { Box, Flex, Text} from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Flex
    align="center"
    justify="center"
    pt="4"
    pb="2"
    bg="linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,2) 100%)"
    color="white"
    flexDirection="column"
    alignItems="center"
    maxW="100%"
    minH="12vh"
  >
    <Box mb="2">
      <Text fontSize="sm">&copy; Sobrero Matias Eduardo</Text>
    </Box>
    <Box>
      <Text fontSize="sm">Argentina Programa 4.0 | React Js - Vite</Text>
    </Box>
  </Flex>
    
  )
}

export default Footer