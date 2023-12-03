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
    Textarea,
    useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { MdCheckCircle } from 'react-icons/md'
const Contact = () => {

    return (
        <section id='contact'>
            <Box
                minH={'100vh'}
                align={'center'}
                justify={'space-around'}
                bg={useColorModeValue('gray.50', '#717171')}
                pt={50}
                pb={100}>
                <Box>
                    <Text
                        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                        fontWeight={"bold"}
                    >Contact Me</Text>
                    <Box h={1} w={"5%"} margin={"auto"} bg={"#7b66ff"} borderRadius={"full"} mb={5}></Box>
                    <br />
                </Box>

                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    w={{ base: '90%', md: '600px' }}
                    p={8}
                >

                    <Stack spacing={4}>
                        <Box
                            fontSize={"20px"}
                            fontWeight={"bold"}>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                        </Box>
                        <FormControl id="fullName">
                            <FormLabel fontSize={"13px"}>NAME</FormLabel>
                            <Input placeholder='Full Name' type="text" />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel fontSize={"12px"}>EMAIL</FormLabel>
                            <Input placeholder='Email' type="email" />
                        </FormControl>
                        <FormControl id="message">
                            <FormLabel fontSize={"12px"}>MESSAGE</FormLabel>
                            <Textarea placeholder='Type your message' h={200} resize="vertical" />
                        </FormControl>
                        <Button mt={8} bg={"#7B66FF"}>Submit</Button>
                    </Stack>
                </Box>
            </Box>
        </section>
    )

}

export default Contact;