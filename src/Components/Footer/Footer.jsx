import { Box, Flex, Text} from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Flex pt="10" bg="linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,2) 100%)" color="white" flexDirection="column" alignItems="center" maxW="100%" minH="15vh">
      <Box>
        <Text>&copy; Sobrero Matias Eduardo</Text>
      </Box>
      <Box>
        <Text>Argentina Programa 4.0 | React Js - Vite</Text>
      </Box>
    </Flex>
    
  )
}

export default Footer