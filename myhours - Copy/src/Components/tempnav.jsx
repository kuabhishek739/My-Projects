import {
    Box,
    Flex,
    Text,
    Image,
    HStack,
    Link,
    Avatar,
    Spacer,
    useDisclosure,
    IconButton,
}
    from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from '../assets/favicon.ico'
import { HamburgerIcon, CloseIcon, SearchIcon, } from '@chakra-ui/icons';
import AvatarImage from '../assets/Avatar.svg';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const navlinks = {
        fontWeight: "bold",
        fontSize: "1rem",
        color: "white",
        _hover: {
            color: "#becefb",
            cursor: "pointer"
        }
    }
    return (
        <Flex
            justify={"space-between"}
            p={5}
            bg={"#0f3cc9"}
            position={"sticky"} top={0} zIndex={"sticky"}>

            <Box display={{ base: 'block', md: 'none' }}>
                <IconButton
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    variant="ghost"
                    size="md"
                    aria-label="Toggle Navigation"
                />
            </Box>
            <Image _hover={{ cursor: "pointer" }} src={Logo} />
            <Box
                display={{ base: 'none', md: 'block' }}>
                <HStack>
                    <Link>
                        <Text {...navlinks}>Mobile</Text>
                    </Link>
                    <Link>
                        <Text {...navlinks}>True 5G</Text>
                    </Link>
                    <Link>
                        <Text {...navlinks}>JioFiber</Text>
                    </Link>
                    <Link>
                        <Text {...navlinks}>AirFiber</Text>
                    </Link>
                    <Link>
                        <Text {...navlinks}>Business</Text>
                    </Link>
                    <Link>
                        <Text {...navlinks}>Devices</Text>
                    </Link>
                    <Link>
                        <Text {...navlinks}>App</Text>
                    </Link>
                    <Link>
                        <Text {...navlinks}>Support</Text>
                    </Link>
                </HStack>
            </Box>

            <Flex>
                <Box
                    borderRadius={"50%"}
                    width={"2rem"}
                    height={"2rem"}
                    p={2}
                    bg={"white"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    _hover={{ cursor: "pointer" }}>
                    <SearchIcon />
                </Box>
                <Spacer />
                <Avatar _hover={{ cursor: "pointer" }} w={"2rem"} h={"2rem"} src={AvatarImage} />

            </Flex>
        </Flex >
    )
}

export default Navbar