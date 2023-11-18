import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const HowItWorks = () => {
    return (
        <div className='HowItWorks'>
            <Box
                maxW='100%'
                h={"100%"}
                minH={'100vh'}
                borderWidth='1px'
                overflow='visible'
                bg={"#ffffff"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                position='relative'
            >
                <Box
                    maxW={'90%'}
                    textAlign="center"
                    m={"auto"}
                    mt={"50px"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                >
                    <Text
                        fontSize={60}>
                        How it works
                    </Text>
                    <Text
                        fontSize={40}
                        color={"#375d75"}
                        fontWeight={"bold"}>
                        & why you should switch to My Hours
                    </Text>
                    <Text
                        fontSize={30}
                        color={"#375d75"}
                        mt={3}>
                        Time tracking was a pain. We fixed it and made time tracking worth the effort.
                    </Text>
                    <Text
                        fontSize={30}
                        color={"#375d75"}
                        maxW={"90%"}
                    >
                        My Hours is easy to use and makes teams more productive, efficient and organized.
                    </Text>

                    <Link to="/signup">
                        <Button bg={"#3b8fc2"} color={"white"} mt={10} p={8} fontSize={"20px"} _hover={{ bg: "#397294" }}>Get Started - It's Free</Button>
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default HowItWorks