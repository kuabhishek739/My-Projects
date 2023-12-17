import React from 'react'
import { Box } from '@chakra-ui/react'
const Pricing = () => {
    return (
        <div className='Pricing'>
            <Box
                maxW='100%'
                h={"100%"}
                minH={'100vh'}
                borderWidth='1px'
                overflow='visible'
                bg={"#eff2f5"}
                display="flex"
                alignItems="center"
                justifyContent="center"
                position='relative'
            >
                <Box
                    maxW={'60%'}
                                        textAlign="center"
                    m={"auto"}
                    mt={"150px"}
                    alignItems={"center"}
                >
                    This is Pricing Page
                </Box>
            </Box>
        </div>
    )
}

export default Pricing