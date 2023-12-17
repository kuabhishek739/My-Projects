import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    List,
    ListItem,
    ListIcon,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
export default function SignUp() {

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'space-around'}
            bg={useColorModeValue('gray.50', 'gray.800')}
            pt={35}
            flexDir={{ base: "column-reverse", md: "row" }}>

            <Box
                maxW={"450px"}
                display={{ base: "none", md: "block" }}>
                <h1 style={{ fontSize: "30px" }}>Automate your <span style={{ color: "#3b8fc2", fontWeight: "bold" }}>Timesheets</span></h1>
                <p>"Ease of use and simplicity finally got our time tracking in order. We can now see if we are on time and on budget at any moment."</p>
                <Flex
                    maxW={40}
                    mt={10}
                    mb={10}>
                    <img style={{ width: "50px", display: "block", marginRight: "10px" }} src='https://allhoursproductb0b1.blob.core.windows.net/static-files/f45ff764-794c-4652-972e-1287f90c7b81/testimonial-quote-image'></img>
                    <p style={{ display: "block" }} >Arieh F. <br />CFO</p>
                </Flex>
                <img src='https://allhoursproductb0b1.blob.core.windows.net/static-files/f45ff764-794c-4652-972e-1287f90c7b81/trusted-companies.png'></img>
            </Box>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                w={{ base: '90%', md: '600px' }}
                p={8}
            >
                <Stack spacing={4}>
                    <Box>
                        <img style={{ width: "150px" }} src="https://app.myhours.com/assets/myhours_app_logo_icon.svg"></img>
                    </Box>
                    <Box
                        fontSize={"20px"}
                        fontWeight={"bold"}>Free trial of My Hours
                        <Box
                        mt={2}>
                            <List fontSize={"11px"} display="flex" flexDirection="row">
                                <ListItem style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    14 day trial of PRO plan
                                </ListItem>
                                <ListItem style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    Downgrade to free anytime
                                </ListItem>
                                <ListItem style={{ display: 'flex', alignItems: 'center' }}>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    No credit card
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <FormControl id="fullName">
                        <FormLabel fontSize={"13px"}>FULL NAME</FormLabel>
                        <p style={{ color: "#707981" }}>Enter First Name and Last Name</p>
                        <Input type="text" />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel fontSize={"12px"}>EMAIL</FormLabel>
                        <p style={{ color: "#707981" }}>You will use this email to login</p>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel fontSize={"12px"}>PASSWORD</FormLabel>
                        <p style={{ color: "#707981" }}>Set Password</p>
                        <Input type="password" />
                    </FormControl>
                    <Stack spacing={10}>

                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Next
                        </Button>
                        <Text>By signing up you agree to the <Link color={'blue.400'}>Terms of Service</Link></Text>
                    </Stack>
                </Stack>
            </Box>
        </Flex>
    )

}
