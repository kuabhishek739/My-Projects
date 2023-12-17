import {
    Box,
    Flex,
    Text,
    Image,
    Link,
    Avatar,
    Spacer,
    useDisclosure,
    IconButton,
    useBreakpointValue,
    Slide,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,

}
    from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/favicon.ico'
import { HamburgerIcon, CloseIcon, SearchIcon, AddIcon } from '@chakra-ui/icons';
import AvatarImage from '../assets/Avatar.svg';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()
    const isMobile = useBreakpointValue({ base: true, md: false });
    const navlinks = {
        fontWeight: "bold",
        fontSize: "1rem",
        color: "white",
        _hover: {
            color: "#becefb",
            cursor: "pointer",

        }
    }
    const AccordionItemText = {
        fontWeight: "bold",
        fontSize: "1rem",
        color: "#1a202c",
        ml: "20px",
    }
    const accordionBorderWidth = isMobile ? '100%' : '80%';
    return (
        <Flex
            align={"center"}
            p={5}
            bg={"#0f3cc9"}
            position={"sticky"} top={0} zIndex={"10"}>

            <Box display={{ base: 'block', md: 'none' }}>
                <IconButton
                    icon={isOpen ? <CloseIcon boxSize={5} color={"white"} /> : <HamburgerIcon boxSize={5} color={"white"} />}
                    onClick={onToggle}
                    variant="ghost"
                    fontSize={"1.5rem"}
                    aria-label="Toggle Navigation"
                />
            </Box>
            {!isMobile && <Spacer />}
            <Image maxH={{ base: "2rem", md: "2.5rem" }} _hover={{ cursor: "pointer" }} src={Logo} ml={{ base: "0", md: "50" }} pl={{ base: "0", md: "50" }} mr={{ base: "auto" }} />
            <Box
                display={{ base: 'none', md: 'flex' }}
                gap={"3rem"}
                alignItems={"center"}
                w={"80vw"}
                mr={{ md: "10" }}>
                <Spacer />
                <Link _hover={{ textDecoration: 'none' }}>
                    <Text {...navlinks}>Mobile</Text>
                </Link>
                <Link _hover={{ textDecoration: 'none' }}>
                    <Text {...navlinks}>True 5G</Text>
                </Link>
                <Link _hover={{ textDecoration: 'none' }}>
                    <Text {...navlinks}>JioFiber</Text>
                </Link>
                <Box position="relative">
                    <Text
                        bg={"#e30513"}
                        color={"white"}
                        borderRadius={"1.5rem"}
                        fontWeight={"bold"}
                        height={"100%"}
                        align={"center"}
                        w={"80%"}
                        fontSize={"0.8rem"}
                        position="absolute"
                        top="-1.5rem"
                        left="50%"
                        transform="translateX(-50%)"
                        _hover={{ cursor: 'pointer' }}
                    >
                        New
                    </Text>
                    <Link _hover={{ textDecoration: 'none' }}>
                        <Text {...navlinks}>AirFiber</Text>
                    </Link>
                </Box>
                <Link _hover={{ textDecoration: 'none' }}>
                    <Text {...navlinks}>Business</Text>
                </Link>
                <Link _hover={{ textDecoration: 'none' }}>
                    <Text {...navlinks}>Devices</Text>
                </Link>
                <Link _hover={{ textDecoration: 'none' }}>
                    <Text {...navlinks}>App</Text>
                </Link>
                <Link _hover={{ textDecoration: 'none' }}>
                    <Text {...navlinks}>Support</Text>
                </Link>
                <Spacer />
            </Box>
            {!isMobile && <Spacer />}
            <Box>
                {isMobile ? (
                    <Flex
                        w={"47vw"}
                        bg={"#0a2885"}
                        alignItems={"center"}
                        p={2}
                        borderRadius={"1.5rem"}
                        mr={5}
                        ml={3}>
                        <SearchIcon color={"white"} boxSize={5} ml={2} />
                        <Text color={"white"} fontWeight={"bold"} ml={2}>Search</Text>
                    </Flex>
                ) :
                    (<Box
                        borderRadius={"50%"}
                        width={"2rem"}
                        height={"2rem"}
                        p={2}
                        bg={"white"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        _hover={{ cursor: "pointer" }}>
                        <SearchIcon color={"black"}/>
                    </Box>)
                }
            </Box>
            <Avatar _hover={{ cursor: "pointer" }} w={"2rem"} h={"2rem"} src={AvatarImage} mr={{ base: "1rem", md: "2rem" }} ml={{ base: "0.5rem", md: "1rem" }} />
            <Slide direction='left' in={isOpen} top={"105%"}
                style={{
                    zIndex: 1,
                    marginTop: 80,
                    left: 0,
                    backgroundColor: 'white',
                    height: '400px',
                    overflowY: 'auto',
                }}>
                <Box
                    bg={"white"}
                    mt={10}
                >
                    <Accordion allowToggle>
                        <AccordionItem border={"none"}>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' p={2}>
                                    <Text fontWeight={"bold"} fontSize={"1.1rem"} color={"black"}>Mobile</Text>
                                </Box>
                                <AddIcon color={"#0a2885"} />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}
                                    gap={"2rem"}
                                >
                                    <Text {...AccordionItemText}>Discover</Text>
                                    <Text {...AccordionItemText}>Prepaid</Text>
                                    <Text {...AccordionItemText}>Postpaid</Text>
                                    <Text {...AccordionItemText}>International Services</Text>
                                    <Text {...AccordionItemText}>Get Jio SIM</Text>
                                    <Text {...AccordionItemText}>Recharge</Text>
                                    <Text {...AccordionItemText}>Pay Bills</Text>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' p={2}>
                                    <Text fontWeight={"bold"} fontSize={"1.1rem"} color={"black"}>True 5G</Text>
                                </Box>
                            </AccordionButton>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderTop={"none"}>
                                <Box as="span" flex='1' textAlign='left' p={2}>
                                    <Text fontWeight={"bold"} fontSize={"1.1rem"} color={"black"}>JioFiber</Text>
                                </Box>
                                <AddIcon color={"#0a2885"} />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}
                                    gap={"2rem"}
                                >
                                    <Text {...AccordionItemText}>Discover</Text>
                                    <Text {...AccordionItemText}>Prepaid</Text>
                                    <Text {...AccordionItemText}>Postpaid</Text>
                                    <Text {...AccordionItemText}>Get JioFiber</Text>
                                    <Text {...AccordionItemText}>Recharge</Text>
                                    <Text {...AccordionItemText}>Pay Bills</Text>
                                    <Text {...AccordionItemText}>Services</Text>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderTop={"none"}>
                                <Box as="span" flex='1' textAlign='left' p={2}>
                                    <Text fontWeight={"bold"} fontSize={"1.1rem"} color={"black"}>AirFiber</Text>
                                </Box>
                                <Text
                                    bg={"#e30513"}
                                    color={"white"}
                                    borderRadius={"1.5rem"}
                                    fontWeight={"bold"}
                                    height={"22px"}
                                    align={"center"}
                                    w={"50px"}
                                    fontSize={"0.8rem"}
                                    left="50%"
                                    _hover={{ cursor: 'pointer' }}
                                >
                                    New
                                </Text>
                            </AccordionButton>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderTop={"none"}>
                                <Box as="span" flex='1' textAlign='left' p={2}>
                                    <Text fontWeight={"bold"} fontSize={"1.1rem"} color={"black"}>Business</Text>
                                </Box>
                            </AccordionButton>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderTop={"none"}>
                                <Box as="span" flex='1' textAlign='left' p={2}>
                                    <Text fontWeight={"bold"} fontSize={"1.1rem"} color={"black"}>Devices</Text>
                                </Box>
                            </AccordionButton>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderTop={"none"}>
                                <Box as="span" flex='1' textAlign='left' p={2}>
                                    <Text fontWeight={"bold"} fontSize={"1.1rem"} color={"black"}>Apps</Text>
                                </Box>
                            </AccordionButton>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderTop={"none"}>
                                <Box as="span" flex='1' textAlign='left' p={2}>
                                    <Text fontWeight={"bold"} fontSize={"1.1rem"} color={"black"}>Support</Text>
                                </Box>
                                <AddIcon color={"#0a2885"} />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}
                                    gap={"2rem"}
                                >
                                    <Text {...AccordionItemText}>Discover</Text>
                                    <Text {...AccordionItemText}>Locate Us</Text>
                                    <Text {...AccordionItemText}>Track Order</Text>
                                    <Text {...AccordionItemText}>Contact Centre</Text>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Slide>
        </Flex >
    )
}

export default Navbar