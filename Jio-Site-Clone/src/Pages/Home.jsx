import React from 'react'
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
    Button,

}
    from '@chakra-ui/react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import item1 from '../assets/JioAirFiber-Homepage-Desktop1.webp'
import item2 from '../assets/Homepage-masthead.webp'
import item3 from '../assets/2999-diwali-offer-desk.webp'
const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        lazyloading: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true, // Enable fading effec
    };
    return (
        <>
            <Box margin={'auto'}>
                <Slider {...settings}>
                    <Box
                        height={'400px'}
                        bg={`url(${item1})`}
                        backgroundSize='cover'
                        backgroundPosition='center'
                        paddingTop={5}>
                        <Box
                            ml={{ base: "0", md: "55" }}
                            maxW={{ base: "100%", md: "42%" }}>
                            <Text
                                color={'white'}
                                fontSize={'6xl'}
                                fontWeight={'bold'}>
                                Introducing
                            </Text>
                            <Text
                                color={'white'}
                                fontSize={'6xl'}
                                fontWeight={'bold'}>
                                JioFiber
                            </Text>
                            <Text
                                color={'white'}
                                fontSize={'xl'}
                                fontWeight={'bold'}>Experience the future of home entertainment with 15+ OTT
                                apps and 550+ digital TV channels.</Text>
                            <br />
                            <Flex>
                                <Button
                                    bg={'#0f3cc9'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={5}>Know Now</Button>
                                <Button
                                    bg={'transparent'}
                                    border={'1px solid white'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={5}>Book Now</Button>
                            </Flex>
                        </Box>
                    </Box>

                    <Box
                        height={'400px'}
                        bg={`url(${item2})`}
                        backgroundSize='cover'
                        backgroundPosition='center'>
                        <Box
                            ml={{ base: "0", md: "55" }}
                            maxW={{ base: "100%", md: "42%" }}>
                            <Text
                                color={'white'}
                                fontSize={'6xl'}
                                fontWeight={'bold'}
                                lineHeight={'1.2'}>
                                It's time to
                                embrace digital
                                life
                            </Text>
                            <Text
                                color={'white'}
                                fontSize={'6xl'}
                                fontWeight={'bold'}>
                                JioFiber
                            </Text>
                            <Text
                                color={'white'}
                                fontSize={'6l'}
                                fontWeight={'bold'}>An affordable range of 4G phones, JioBharat Series is packed
                                with incredible features.</Text>
                            <br />
                            <Flex>
                                <Button
                                    bg={'#0f3cc9'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={5}>Explore Now</Button>
                                <Button
                                    bg={'transparent'}
                                    border={'1px solid white'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={5}>Book Now</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        height={'400px'}
                        bg={`url(${item3})`}
                        backgroundSize='cover'
                        backgroundPosition='center'>
                        <Box
                            ml={{ base: "0", md: "55" }}
                            maxW={{ base: "100%", md: "42%" }}>
                            <Text
                                color={'white'}
                                fontSize={'6xl'}
                                fontWeight={'bold'}
                                lineHeight={'1.2'}
                                mt={8}
                                maxW={{ base: "100%", md: "90%" }}>
                                Welcome 2024 with a special
                                recharge offer
                            </Text>
                            <br />
                            <Text
                                color={'white'}
                                fontSize={'6l'}
                                fontWeight={'bold'}>Enjoy 23 days' extra validity with Jio's annual recharge plan.</Text>
                            <br />
                            <Flex>
                                <Button
                                    bg={'#0f3cc9'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={5}>Recharge Now</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Slider>
            </Box>
        </>
    )
}

export default Home