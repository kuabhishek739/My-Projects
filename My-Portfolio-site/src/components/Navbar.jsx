import React from 'react';
import {
    Box,
    Flex,
    Spacer,
    IconButton,
    useDisclosure,
    Image,
    VStack,
    HStack,
    Text,
    Collapse,
    useColorMode,
    Button,
} from '@chakra-ui/react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import myImg from '../assets/Image1.png';

const NavLink = ({ to, children, onClick }) => (
    <Text
        as={to ? Link : 'button'}
        to={to}
        p={2}
        fontWeight={"bold"}
        color="96EFFF"
        _hover={{
            textDecoration: 'none',
            borderBottom: '2px',
            borderColor: 'white',
        }}
        onClick={onClick}
        cursor="pointer"
    >
        {children}
    </Text>
);

const handleResumeDownload = () => {
    const googleDriveFileUrl = 'https://drive.google.com/file/d/1suN9K_D_y0yaUe20Rpgu4Ph_OuLstZZJ/view?usp=drive_link';
    window.open(googleDriveFileUrl, '_blank');
};
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex bg="#7B66FF" p={4} align="center" position="sticky" top={0} zIndex="sticky">
            <Image src={myImg} w={{ base: "10%", lg: "4%" }} h={"4%"} borderRadius={"full"} mr={4}></Image>
            <Text fontSize="xl" fontWeight="bold" mr={4} _hover={{ transform: "scale(1.1)" }}>
                ABHISHEK
            </Text>
            <Box display={{ base: 'block', md: 'none' }}>
                <IconButton
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    onClick={onToggle}
                    variant="ghost"
                    size="md"
                    aria-label="Toggle Navigation"
                />
            </Box>
            <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
                <Collapse in={isOpen} animateOpacity>
                    <VStack spacing={4} align="stretch" mt={{ base: 4, md: 0 }} fontWeight={'bold'}>
                        <AnchorLink href="#header">
                            <Button>HOME</Button>
                        </AnchorLink>
                        <AnchorLink href="#about">
                            <Button>ABOUT</Button>
                        </AnchorLink>
                        <AnchorLink href="#skills">
                            <Button>SKILLS</Button>
                        </AnchorLink>
                        <AnchorLink href="#projects">
                            <Button>PROJECTS</Button>
                        </AnchorLink>
                        <AnchorLink href="#contact">
                            <Button>CONTACT</Button>
                        </AnchorLink>
                        <Button onClick={handleResumeDownload}>RESUME</Button>
                    </VStack>
                </Collapse>
            </Box>
            <Spacer />
            <Box display={{ base: 'none', md: 'block' }}>
                <HStack spacing={4} align="stretch" fontWeight={'bold'}>
                    <AnchorLink href="#header">
                        <Button>HOME</Button>
                    </AnchorLink>
                    <AnchorLink href="#about">
                        <Button>ABOUT</Button>
                    </AnchorLink>
                    <AnchorLink href="#skills">
                        <Button>SKILLS</Button>
                    </AnchorLink>
                    <AnchorLink href="#projects">
                        <Button>PROJECTS</Button>
                    </AnchorLink>
                    <AnchorLink href="#contact">
                        <Button>CONTACT</Button>
                    </AnchorLink>
                    <Button onClick={handleResumeDownload}>RESUME</Button>
                </HStack>
            </Box>
            <IconButton
                aria-label="Toggle Dark/Light mode"
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                isRound="true"
                onClick={toggleColorMode}
                variant="ghost"
                size="md"
            />
        </Flex>
    );
};

export default Navbar;
