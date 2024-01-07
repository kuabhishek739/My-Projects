import React from 'react'
import {
    Box,
    Flex,
    Text,
    Image,
    Button,

}
    from '@chakra-ui/react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'
import JioFiberBanner from '../assets/JioAirFiber-Homepage-Desktop1.webp'
import JioBharatBanner from '../assets/Homepage-masthead.webp'
import JioOTTBanner from '../assets/jio-otts-desktop.webp'
import True5GBanner from '../assets/true-5g-desktop.webp'
import AirFibreBanner from '../assets/airfiber-desktop.webp'
import true5GIcon from '../assets/true5g.svg'
import airFiberIcon from '../assets/airfiber-icon.svg'
import recharge from '../assets/recharge.svg'
import paybills from '../assets/paybills.svg'
import getjioairfiber from '../assets/getjioairfiber.svg'
import getjiosim from '../assets/getjiosim.svg'
import getjiofiber from '../assets/getjiofiber.svg'
import porttojio from '../assets/porttojio.svg'
import JioVideo from '../assets/JioCinema_DekhtaJaIndia_06062023.mp4'
import JioCinema from '../assets/Jio-cinema-bold.svg'
import AjioVideo from '../assets/house-of-ethnics-by-ajio.mp4'
import ajiologo from '../assets/ajio-logo.svg'
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
            <Box margin={'auto'}
                bg={"white"}>
                <Slider className="custom-slider" {...settings}>

                    <Box
                        height={'400px'}
                        bg={`url(${JioOTTBanner})`}
                        backgroundSize={{ base: 'cover', md: 'cover' }}
                        backgroundPosition='top center'
                        backgroundRepeat='no-repeat'
                        paddingTop={5}>
                        <Box
                            ml={{ base: "0", md: "55" }}
                            maxW={{ base: "100%", md: "42%" }}>
                            <Text
                                color={'white'}
                                fontSize={{ base: '4xl', md: '6xl' }}
                                fontWeight={'bold'}
                                lineHeight={'1.2'}
                                mt={8}
                                maxW={{ base: "100%", md: "90%" }}>
                                OTT loaded mobile packs
                            </Text>
                            <br />
                            <Text
                                color={'white'}
                                fontSize={'6l'}
                                fontWeight={'bold'}>Enjoy up to 14 OTT apps with a single mobile recharge pack.</Text>
                            <br />
                            <Flex>
                                <Button
                                    bg={'#0f3cc9'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={5}
                                    color={'white'}>Recharge Now</Button>
                            </Flex>
                        </Box>
                    </Box>
                    <Box
                        height={'400px'}
                        bg={`url(${JioFiberBanner})`}
                        backgroundSize={{ base: 'cover', md: 'cover' }}
                        backgroundPosition='top center'
                        backgroundRepeat='no-repeat'
                        paddingTop={5}>
                        <Box
                            ml={{ base: "0", md: "55" }}
                            maxW={{ base: "100%", md: "42%" }}>
                            <Text
                                color={'white'}
                                fontSize={{ base: '4xl', md: '6xl' }}
                                fontWeight={'bold'}
                                mt={8}
                                maxW={{ base: "100%", md: "90%" }}>
                                Introducing  JioFiber
                            </Text>
                            <Text
                                color={'white'}
                                fontSize={'6l'}
                                fontWeight={'bold'}>Experience the future of home entertainment with 15+ OTT
                                apps and 550+ digital TV channels.</Text>
                            <br />
                            <Flex gap={2}>
                                <Button
                                    bg={'#0f3cc9'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={5}
                                    color={'white'}>Know More</Button>
                                <Button
                                    bg={'transparent'}
                                    border={'1px solid white'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={5}
                                    color={'white'}>Book Now</Button>
                            </Flex>
                        </Box>
                    </Box>

                    <Box
                        height={'400px'}
                        bg={`url(${JioBharatBanner})`}
                        backgroundSize='cover'
                        backgroundPosition='center'>
                        <Box
                            ml={{ base: "0", md: "55" }}
                            maxW={{ base: "100%", md: "42%" }}>
                            <Text
                                color={'white'}
                                fontSize={{ base: '4xl', md: '6xl' }}
                                fontWeight={'bold'}
                                lineHeight={'1.2'}
                                mt={8}
                                maxW={{ base: "100%", md: "90%" }}>
                                It's time to
                                embrace digital
                                life
                            </Text>
                            <Text
                                color={'white'}
                                fontSize={'6l'}
                                fontWeight={'bold'}>An affordable range of 4G phones, JioBharat Series is packed
                                with incredible features.</Text>
                            <br />
                            <Flex gap={2}>
                                <Button
                                    bg={'#0f3cc9'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={5}
                                    color={'white'}>Explore Now</Button>
                                <Button
                                    bg={'transparent'}
                                    border={'1px solid white'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={5}
                                    color={'white'}>Book Now</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Slider>

                <Flex
                    w={"100%"}
                    justify={"center"}
                    gap={"1rem"}
                    mt={20}
                    mb={20}
                    wrap={"wrap"}>
                    <Box
                        w={"120px"}
                        h={"120px"}
                        _hover={{ cursor: "pointer", bg: "#e7ebf8", borderRadius: "2rem", transition: "background-color 2s ease", transform: "translate(0, 0)", }}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}>
                        <Box
                            bg={"#e7ebf8"}
                            w={"70px"}
                            h={"70px"}
                            p={"0.8rem"}
                            mb={3}
                            borderRadius={"100%"}
                            display={"flex"}
                            justifyContent={"center"}>
                            <Image src={recharge} w={"100%"} h={"100%"}></Image>
                        </Box>
                        <Text color={"black"} fontSize={"0.9rem"} fontFamily={"sans-serif"}>Recharge</Text>
                    </Box>
                    <Box
                        w={"120px"}
                        h={"120px"}
                        _hover={{ cursor: "pointer", bg: "#e7ebf8", borderRadius: "2rem", transition: "background-color 2s ease", transform: "translate(0, 0)", }}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}>
                        <Box
                            bg={"#e7ebf8"}
                            w={"70px"}
                            h={"70px"}
                            p={"0.8rem"}
                            mb={3}
                            borderRadius={"100%"}
                            display={"flex"}
                            justifyContent={"center"}>
                            <Image src={paybills} w={"100%"} h={"100%"}></Image>
                        </Box>
                        <Text color={"black"} fontSize={"0.9rem"} fontFamily={"sans-serif"}>Pay Bills</Text>
                    </Box>
                    <Box
                        w={"120px"}
                        h={"120px"}
                        _hover={{ cursor: "pointer", bg: "#e7ebf8", borderRadius: "2rem", transition: "background-color 2s ease", transform: "translate(0, 0)", }}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        position={"relative"}>
                        <Text
                            bg={"#e30513"}
                            color={"white"}
                            borderRadius={"1.5rem"}
                            fontWeight={"bold"}
                            height={"20px"}
                            align={"center"}
                            w={"50px"}
                            fontSize={"0.7rem"}
                            position="absolute"
                            top="-2"
                            fontFamily={"sans-serif"}
                            left="80%"
                            transform="translateX(-50%)"
                            _hover={{ cursor: 'pointer' }}
                        >
                            New
                        </Text>
                        <Box
                            bg={"#e7ebf8"}
                            w={"70px"}
                            h={"70px"}
                            p={"0.8rem"}
                            mb={3}
                            borderRadius={"100%"}
                            display={"flex"}
                            justifyContent={"center"}>
                            <Image src={getjioairfiber} w={"100%"} h={"100%"}></Image>
                        </Box>
                        <Text color={"black"} fontSize={"0.9rem"} fontFamily={"sans-serif"}>Get JioAirFiber</Text>
                    </Box>
                    <Box
                        w={"120px"}
                        h={"120px"}
                        _hover={{ cursor: "pointer", bg: "#e7ebf8", borderRadius: "2rem", transition: "background-color 2s ease", transform: "translate(0, 0)", }}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}>
                        <Box
                            bg={"#e7ebf8"}
                            w={"70px"}
                            h={"70px"}
                            p={"0.8rem"}
                            mb={3}
                            borderRadius={"100%"}
                            display={"flex"}
                            justifyContent={"center"}>
                            <Image src={getjiosim} w={"100%"} h={"100%"}></Image>
                        </Box>
                        <Text color={"black"} fontSize={"0.9rem"} fontFamily={"sans-serif"}>Get Jio SIM</Text>
                    </Box>
                    <Box
                        w={"120px"}
                        h={"120px"}
                        _hover={{ cursor: "pointer", bg: "#e7ebf8", borderRadius: "2rem", transition: "background-color 2s ease", transform: "translate(0, 0)", }}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}>
                        <Box
                            bg={"#e7ebf8"}
                            w={"70px"}
                            h={"70px"}
                            p={"0.8rem"}
                            mb={3}
                            borderRadius={"100%"}
                            display={"flex"}
                            justifyContent={"center"}>
                            <Image src={getjiofiber} w={"100%"} h={"100%"}></Image>
                        </Box>
                        <Text color={"black"} fontSize={"0.9rem"} fontFamily={"sans-serif"}>Get Jio Fiber</Text>
                    </Box>
                    <Box
                        w={"120px"}
                        h={"120px"}
                        _hover={{ cursor: "pointer", bg: "#e7ebf8", borderRadius: "2rem", transition: "background-color 2s ease", transform: "translate(0, 0)", }}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}>
                        <Box
                            bg={"#e7ebf8"}
                            w={"70px"}
                            h={"70px"}
                            p={"0.8rem"}
                            mb={3}
                            borderRadius={"100%"}
                            display={"flex"}
                            justifyContent={"center"}>
                            <Image src={porttojio} w={"100%"} h={"100%"}></Image>
                        </Box>
                        <Text color={"black"} fontSize={"0.9rem"} fontFamily={"sans-serif"}>Port to Jio</Text>
                    </Box>
                </Flex>

                <Box
                    bg={"white"}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        textAlign={"center"}
                    >
                        <Text
                            color={"#141414"}
                            fontSize={{ base: "3xl", md: "4rem" }}
                            fontWeight={"bold"}
                            lineHeight={"1.1"}
                            w={{ base: "100%", md: "60%" }}>Look what's new and noteworthy</Text>
                    </Box>
                    <Flex
                        w={"90%"}
                        margin={"auto"}
                        p={5}
                        gap={5}
                        direction={{ base: "column", md: "row" }}
                    >
                        <Box
                            borderRadius={"1.5rem"}
                            backgroundImage={`url(${True5GBanner})`}
                            backgroundSize='cover'
                            backgroundPosition='center'>
                            <Box
                                p={5}
                                h={"400px"}>
                                <Image w={{ base: "50%", md: "auto" }} src={true5GIcon}></Image>
                                <br />
                                <Text
                                    color={'white'}
                                    fontWeight={"bold"}
                                    fontSize={{ base: "3xl", md: "5xl" }}
                                    maxW={{ base: "100%", md: "60%" }}
                                    lineHeight={'1'}>Now in 7,764 locations in India</Text>
                                <br />
                                <Button
                                    color={"#cd3d00"}
                                    bg={"white"}
                                    borderRadius={"2rem"}
                                    p={"1.5rem"}
                                    _hover={{ color: "white", bg: "#fa7d19" }}>Check Availability</Button>
                            </Box>
                        </Box>
                        <Box
                            borderRadius={"1.5rem"}
                            backgroundImage={`url(${AirFibreBanner})`}
                            backgroundSize='cover'
                            backgroundPosition='center'>
                            <Box
                                p={5}
                                h={"400px"}
                            >
                                <Image w={{ base: "50%", md: "auto" }} src={airFiberIcon}></Image>
                                <br />
                                <Text
                                    color={'white'}
                                    fontWeight={"bold"}
                                    fontSize={{ base: "3xl", md: "5xl" }}
                                    maxW={{ base: "100%", md: "60%" }}
                                    lineHeight={'1'}>Available across 514 towns in India</Text>
                                <br />
                                <Button
                                    color={"#263d8a"}
                                    bg={"white"}
                                    borderRadius={"2rem"}
                                    p={"1.5rem"}
                                    _hover={{ color: "white", bg: "#587cec" }}>Know More</Button>
                            </Box>
                        </Box>
                    </Flex>
                </Box>

                <Box
                    bg={"white"}
                    mt={10}
                >
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        textAlign={"center"}
                    >
                        <Text
                            color={"#141414"}
                            fontSize={{ base: "3xl", md: "4rem" }}
                            fontWeight={"bold"}
                            lineHeight={"1.1"}
                        >Enrich your digital life</Text>
                        <br />
                        <Text
                            color={"#595959"}
                            fontFamily={"sans-serif"}>Stream, shop, connect, and do much more on the go with Jio apps and services.</Text>
                        <br />
                    </Box>
                    <Flex
                        bg={"#d9008d"}
                        justify={{ md: "space-between" }}
                        flexDir={{ base: "column", md: "row" }}>
                        <Box
                            w={{ base: "100%", md: "40%" }}>
                            <Box
                                pt={{ md: 20 }}
                                pl={{ md: "8rem" }}
                                p={{ base: 5 }}>
                                <Image src={JioCinema}></Image>
                                <br />
                                <Text
                                    color={'white'}
                                    fontWeight={"bold"}
                                    fontSize={"2.5rem"}
                                    maxW={{ base: "100%", md: "90%" }}
                                    lineHeight={'1'}>Premieres exclusive as well as trending video content</Text>
                                <br />
                                <Button
                                    bg={'#FF99DB'}
                                    borderRadius={"1.8rem"}
                                    fontWeight={"bold"}
                                    p={6}
                                    w={{ base: "100%", md: "30%" }}
                                    color={'#62003f'}
                                    _hover={{ bg: "#fff7fc" }}>Know More</Button>
                            </Box>
                        </Box>
                        <Box
                            w={{ base: "100%", md: "60%" }}
                            p={{ base: 5, md: 0 }}

                            h={"80%"}>
                            <video autoPlay loop muted controls>
                                <source src={JioVideo} type="video/mp4" />
                            </video>
                        </Box>
                    </Flex>
                </Box>

                <Box
                    bg={"white"}
                    mt={10}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}

                >
                    <Image src={ajiologo}></Image>
                    <br />
                    <Text
                        color={"#141414"}
                        fontSize={{ base: "3xl", md: "2rem" }}
                        fontWeight={"bold"}
                        textAlign={"center"}
                        lineHeight={"1.1"}>Celebrate in timeless ethnic styles</Text>
                    <br />

                    <Box
                        w={{ base: "100%", md: "60%" }}
                        p={{ base: 5, md: 0 }}

                        h={"80%"}>
                        <video autoPlay loop muted controls id='myVideo'>
                            <source src={AjioVideo} type="video/mp4" />
                        </video>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Home