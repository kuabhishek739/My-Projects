import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
export default function SignIn() {

  return(
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          w={{ base: '90%', md: '450px' }}
          p={8}>
          <Stack spacing={4}>
          <Box
          display={"flex"}
          justifyContent={"center"}>
          <img style={{width:"200px"}} src="https://app.myhours.com/assets/myhours_app_logo_icon.svg"></img>
          </Box>
          <Box
          fontSize={"30px"}
          fontWeight={"bold"}>Sign in</Box>
            <FormControl id="email">
              <FormLabel fontSize={"12px"}>EMAIL</FormLabel>
              <Input placeholder='Email' type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel fontSize={"12px"}>PASSWORD</FormLabel>
              <Input placeholder='Password' type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              <Text color={'blue.400'} >New to My Hours? Sign up</Text>
            </Stack>
          </Stack>
        </Box>
    </Flex>
  )

}
