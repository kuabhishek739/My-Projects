import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Spacer,
    VStack
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

export default function Navigation() {
    const { isOpen, onToggle } = useDisclosure();
    const linkColor = useColorModeValue('#3b8fc2', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');


    return (
        <Box position="sticky" top={0} zIndex="sticky">
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'80px'}
                border={"1px solid black"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                display={{ base: 'none', md: 'flex' }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'end' }}
                    display={{ base: 'none', md: 'flex' }}
                    gap={5}>
                    <Link to="/">
                        <img
                            src={"https://assets-global.website-files.com/64148069036e35d5954d1323/64148069036e352ca84d1761_myhours-logo.svg"}
                            alt="Logo"
                            width="158px"
                            height="auto"
                        />
                    </Link>
                    <Spacer />
                    <Stack direction={'row'} spacing={4}>
                        <Link to="/">
                            <Box
                                as="a"
                                p={2}
                                fontSize={{ base: 'xl', md: '1rem' }}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                Home
                            </Box>
                        </Link>
                        <Link to="/howitworks">
                            <Box
                                as="a"
                                p={2}
                                fontSize={{ base: 'xl', md: '1rem' }}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                How it works
                            </Box>
                        </Link>
                        <Link to="/pricing">
                            <Box
                                as="a"
                                p={2}
                                fontSize={{ base: 'xl', md: '1rem' }}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                Pricing
                            </Box>
                        </Link>
                        <Popover trigger={'hover'} placement={'bottom-start'}>
                            <PopoverTrigger>
                                <Box
                                    as="a"
                                    p={1}
                                    fontSize={{ base: 'xl', md: '1rem' }}
                                    fontWeight={500}
                                    cursor="pointer"
                                    mt={-1}
                                    color={linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor,
                                    }}>
                                    Resources
                                </Box>
                            </PopoverTrigger>

                            <PopoverContent
                                w={'auto'}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}>
                                <Stack>
                                    {NAV_ITEMS.map((navItem) => (
                                        navItem.label === 'Resources' &&
                                        navItem.children && (
                                            <Stack key={navItem.label}>
                                                {navItem.children.map((childNavItem) => (
                                                    <Box
                                                        as="a"
                                                        role={'group'}
                                                        display={'block'}
                                                        p={2}
                                                        rounded={'md'}
                                                        _hover={{ bg: useColorModeValue('#aec8fd', 'gray.900') }}>
                                                        <Stack direction={'row'} align={'center'}>
                                                            <Box>
                                                                <Text
                                                                    transition={'all .3s ease'}
                                                                    _groupHover={{ color: 'gray.900' }}
                                                                    fontWeight={600}>
                                                                    {childNavItem.label}
                                                                </Text>
                                                                <Text fontSize={'sm'}>{childNavItem.subLabel}</Text>
                                                            </Box>
                                                        </Stack>
                                                    </Box>
                                                ))}
                                            </Stack>
                                        )
                                    ))}
                                </Stack>
                            </PopoverContent>
                        </Popover>
                        <Link to="/signin">
                            <Box
                                as="a"
                                p={2}
                                fontSize={{ base: 'xl', md: '1rem' }}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                Sign in
                            </Box>
                        </Link>
                    </Stack>
                    <Link to="/signup">
                        <Button
                            as={'a'}
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={{ base: 'xl', md: '1rem' }}
                            fontWeight={600}
                            color={'white'}
                            bg={"#3b8fc2"}
                            _hover={{
                                bg: '#397294',
                            }}>
                            Get My Hours Free
                        </Button>
                    </Link>
                </Flex>
            </Flex>

            <Box
                display={{ base: 'flex', md: 'none' }}
                justifyContent={'space-between'}
                pl={"10px"}
                mt={10}
                pb={5}
                boxShadow={'lg'}
                h={"auto"}
                bg={useColorModeValue('white', 'gray.900')}
                position="sticky" zIndex="sticky" top={0}
            >
                <Link to="/">
                    <img
                        src={"https://assets-global.website-files.com/64148069036e35d5954d1323/64148069036e352ca84d1761_myhours-logo.svg"}
                        alt="Logo"
                        width="158px"
                        height="auto"
                    />
                </Link>
                <IconButton
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
            </Box>
            <Collapse in={isOpen} animateOpacity>
                <VStack
                    align={'flex-start'}
                    pl={4}
                    gap={4}
                    pb={4}
                    bg={useColorModeValue('white', 'gray.900')}
                >
                    <Link to="/">
                        <Box
                            as="a"
                            p={2}
                            fontSize={{ base: 'xl', md: '1rem' }}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: 'none',
                                color: linkHoverColor,
                            }}>
                            Home
                        </Box>
                    </Link>
                    <Link to="/howitworks">
                        <Box
                            as="a"
                            p={2}
                            fontSize={{ base: 'xl', md: '1rem' }}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: 'none',
                                color: linkHoverColor,
                            }}>
                            How it works
                        </Box>
                    </Link>
                    <Link to="/pricing">
                        <Box
                            as="a"
                            p={2}
                            fontSize={{ base: 'xl', md: '1rem' }}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: 'none',
                                color: linkHoverColor,
                            }}>
                            Pricing
                        </Box>
                    </Link>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box
                                as="a"
                                p={1}
                                fontSize={{ base: 'xl', md: '1rem' }}
                                fontWeight={500}
                                cursor="pointer"
                                mt={-1}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                Resources
                            </Box>
                        </PopoverTrigger>

                        <PopoverContent
                            w={'auto'}
                            boxShadow={'xl'}
                            bg={popoverContentBgColor}
                            p={4}
                            rounded={'xl'}>
                            <Stack>
                                {NAV_ITEMS.map((navItem) => (
                                    navItem.label === 'Resources' &&
                                    navItem.children && (
                                        <Stack key={navItem.label}>
                                            {navItem.children.map((childNavItem) => (
                                                <Box
                                                    as="a"
                                                    role={'group'}
                                                    display={'block'}
                                                    p={2}
                                                    rounded={'md'}
                                                    _hover={{ bg: useColorModeValue('#aec8fd', 'gray.900') }}>
                                                    <Stack direction={'row'} align={'center'}>
                                                        <Box>
                                                            <Text
                                                                transition={'all .3s ease'}
                                                                _groupHover={{ color: 'gray.900' }}
                                                                fontWeight={600}>
                                                                {childNavItem.label}
                                                            </Text>
                                                            <Text fontSize={'sm'}>{childNavItem.subLabel}</Text>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            ))}
                                        </Stack>
                                    )
                                ))}
                            </Stack>
                        </PopoverContent>
                    </Popover>
                    <Link to="/signin">
                        <Box
                            as="a"
                            p={2}
                            fontSize={{ base: 'xl', md: '1rem' }}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: 'none',
                                color: linkHoverColor,
                            }}>
                            Sign in
                        </Box>
                    </Link>
                    <Link to="/signup">
                        <Button
                            as={'a'}
                            display={{ base: 'inline-flex', md: 'none' }}
                            fontSize={{ base: 'xl', md: '1rem' }}
                            fontWeight={600}
                            w={'90vw'}
                            color={'white'}
                            bg={"#3b8fc2"}
                            _hover={{
                                bg: '#397294',
                            }}>
                            Get My Hours Free
                        </Button>
                    </Link>
                </VStack>
            </Collapse>
        </Box>
    );
}

const NAV_ITEMS = [{
    label: 'Resources',
    children: [
        {
            label: 'Use cases',
            href: '#',
        },
        {
            label: 'Help center',
            href: '#',
        },
        {
            label: 'Security & privacy',
            href: '#',
        },
        {
            label: 'Customer reviews',
            href: '#',
        },
        {
            label: 'About My Hours',
            href: '#',
        }
    ],
}
]