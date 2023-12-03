import React from 'react';
import { Box, Text, Image, Link, Button, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import myhrs from '../assets/myhrs.png';
import superheroresume from '../assets/superheroresume.png';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id='projects'>
      <Box
        textAlign='center'
        pt={100}
        pb={100}
      >
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight={"bold"}
        >My Projects</Text>
        <Box h={1} w={"5%"} margin={"auto"} bg={"#7b66ff"} borderRadius={"full"} mb={5}></Box>
        <br />
        <Box w={"80%"} margin={"auto"}>
          <Slider {...settings}>
            <Box
              key='myHours'
              border='2px'
              borderColor='gray.200'
              margin={"auto"}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image src={myhrs} alt='MyHours' />
              <Text fontWeight={"bold"} fontSize={"2xl"}>MyHours</Text>
              <Flex justify={"center"}>
                <Link href='https://myhours-abhishekkukreti9-gmailcom-abhisheks-projects-212dc6e2.vercel.app/'>
                  <Button mt={8} mb={8} mr={8} bg={"#7B66FF"}>Visit Site</Button>
                </Link>
                <Link href='https://myhours-abhishekkukreti9-gmailcom-abhisheks-projects-212dc6e2.vercel.app/'>
                  <Button mt={8} mb={8} bg={"#7B66FF"}>Visit Code</Button>
                </Link>
              </Flex>
            </Box>

            <Box
              key='superHeroResume'
              border='2px'
              borderColor='gray.200'
              margin={"auto"}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image src={superheroresume} alt='superheroresume' />
              <Text fontWeight={"bold"} fontSize={"2xl"}>Super Hero Resume</Text>
              <Flex justify={"center"}>
                <Link href='https://glittering-brigadeiros-18cbcc.netlify.app/'>
                  <Button mt={8} mb={8} mr={8} bg={"#7B66FF"}>Visit Site</Button>
                </Link>

                <Link href='https://glittering-brigadeiros-18cbcc.netlify.app/'>
                  <Button mt={8} mb={8} bg={"#7B66FF"}>Visit Code</Button>
                </Link>
              </Flex>
            </Box>
          </Slider>
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
