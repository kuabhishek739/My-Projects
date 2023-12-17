import { Box, Button, Image, Flex, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className='home'>
            <Box
                maxW='100%'
                h={"100%"}
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
                    <h1 style={{ fontSize: "50px" }}>Free <span style={{ color: "#3b8fc2", fontWeight: "bold" }}>Project time tracking</span><br />software for teams</h1>

                    <p style={{ fontSize: "20px" }}>Automate time tracking of employees and contractors.<br />Track projects, collect timesheets, and stay on budget with real-time insights.</p>
                    <Link to="/signup">
                        <Button bg={"#3b8fc2"} color={"white"} mt={10} p={8} fontSize={"20px"} _hover={{ bg: "#397294" }}>Get Started - It's Free</Button>
                    </Link>
                    <Image
                        mt={10}
                        style={{ marginBottom: '-10%', boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}
                        src='https://assets-global.website-files.com/64148069036e35d5954d1323/64148069036e35e0134d1956_free%20online%20timesheet%20app%20for%20employees.png' />
                </Box>
            </Box>

            <Box
                maxW='100%'
                h={"100%"}
                borderWidth='1px'
                overflow='hidden'
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
            >
                <Box
                    maxW={'90%'}
                    textAlign="center"
                    m={"auto"}
                    mt={"150px"}
                    mb={50}
                    alignItems={"center"}
                >
                    <h1 style={{ fontSize: "50px" }}>Trusted by more than <br /><span style={{ color: "#3b8fc2", fontWeight: "bold" }}>100.000 businesses </span>worldwide</h1>
                    <Image mt={10} src='https://assets-global.website-files.com/64148069036e35d5954d1323/642e758e323b33fb3eeead40_Group%201030(1).svg' />
                    <Flex
                        p={4}
                        maxW={"100%"}
                        mt={30}>
                        <Image width="10%" height="10%" src='https://assets-global.website-files.com/64148069036e35d5954d1323/642a9641b5393188913c5a9a_AUTOCAD%20logo%20grey%202.png' /><Spacer />
                        <Image width="10%" height="10%" src='https://assets-global.website-files.com/64148069036e35d5954d1323/64148069036e35e1214d17c2_kpmg_logo%201.png' /><Spacer />
                        <Image width="10%" height="10%" src='https://assets-global.website-files.com/64148069036e35d5954d1323/64148069036e352d5d4d17c6_logo_heading.png' /><Spacer />
                        <Image width="10%" height="10%" src='https://assets-global.website-files.com/64148069036e35d5954d1323/64148069036e355f174d17c3_typefox%201.png' /><Spacer />
                        <Image width="5%" height="5%" src='https://assets-global.website-files.com/64148069036e35d5954d1323/642a95f2be797c08750dbb82_Mayo%20Clinic%20logo%20grey%201.png' /><Spacer />
                        <Image width="5%" height="5%" src='https://assets-global.website-files.com/64148069036e35d5954d1323/642a9583ca4db26da31bf727_parlor%20logo%20grey%201.png' />
                    </Flex>
                </Box>
            </Box>


            <Box
                maxW='100%'
                h={"100%"}
                borderWidth='1px'
                overflow='visible'
                bg={"#f6f4f3"}
                display="flex"
                flexDir={"column"}
                alignItems="center"
                justifyContent="center"
                position='relative'
                pb={40}
            >
                <Flex
                    maxW={'90%'}
                    mt={"100px"}
                    flexDirection={{ base: 'column-reverse', md: 'row' }}
                >
                    <Image
                        maxW={{ base: "90%", md: "60%" }}
                        maxH={"500px"}
                        src='https://assets-global.website-files.com/64148069036e35d5954d1323/642fcd101df41e461270c3b3_2023-4-7_MyHours-homepage-Most-intuitive-timesheet%201-p-800.png' /> <Spacer />
                    <Box
                        maxW={"100%"}
                        alignItems={"center"}
                        m={10}
                        p={-20}

                    >
                        <h1 style={{ fontSize: "50px", }}>The most <span style={{ color: "#3b8fc2", fontWeight: "bold" }}>intuitive  </span>timesheet</h1>
                        <p>Ditch Excel spreadsheets and switch to timesheets in My Hours, complete with an optional stopwatch. Your team will appreciate how quickly they can log their time & costs on Projects & tasks.</p>
                    </Box>
                </Flex>

                <Flex
                    maxW={'90%'}
                    mt={"120px"}
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <Box
                        maxW={"100%"}
                        alignItems={"center"}
                        m={10}
                        p={-20}

                    >
                        <h1 style={{ fontSize: "50px", }}><span style={{ color: "#3b8fc2", fontWeight: "bold" }}>Analyze </span>time & costs</h1>
                        <p>Create and send professional-looking reports with custom billing or payroll rates. Customize and export with all details or integrate with other apps.</p>
                    </Box>
                    <Image
                        maxW={{ base: "90%", md: "60%" }}
                        maxH={"500px"}
                        src='https://assets-global.website-files.com/64148069036e35d5954d1323/642c207eb6a844207e320d3e_2023-4-4_MyHours-homepage_Analyze-time%26costs%201-p-800.png' /> <Spacer />

                </Flex>


                <Flex
                    maxW={'90%'}
                    mt={"120px"}
                    flexDirection={{ base: 'column-reverse', md: 'row' }}
                >
                    <Image
                        maxW={{ base: "90%", md: "60%" }}
                        maxH={"500px"}
                        src='https://assets-global.website-files.com/64148069036e35d5954d1323/642c20acc2550b7b06e0169f_2023-4-4_MyHours-homepage_Organize-your-projects%201-p-800.png' /> <Spacer />

                    <Box
                        maxW={"100%"}
                        alignItems={"center"}
                        m={10}
                        p={-20}

                    >
                        <h1 style={{ fontSize: "50px", }}><span style={{ color: "#3b8fc2", fontWeight: "bold" }}>Organize </span>your projects</h1>
                        <p>Organize your projects with tasks and assign them to your team. Keep an eye on project profitability with hourly rates, budgets or estimates.</p>
                    </Box>

                </Flex>

                <Flex
                    maxW={{ base: "90%", md: "60%" }}
                    mt={"120px"}
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <Box
                        maxW={"100%"}
                        alignItems={"center"}
                        m={10}
                        p={-20}

                    >
                        <h1 style={{ fontSize: "50px", }}><span style={{ color: "#3b8fc2", fontWeight: "bold" }}>Manage  </span>your team</h1>
                        <p>Invite your team to manage or fill out timesheets. Define precise roles and approval workflows. See who’s got too much or not enough on their plate.</p>
                    </Box>
                    <Image
                        maxW={{ base: "90%", md: "60%" }}
                        maxH={"500px"}
                        src='https://assets-global.website-files.com/64148069036e35d5954d1323/642c20f5f0aed97b8d862f94_2023-4-4_MyHours-homepage_Manage-your-team%201-p-800.png' /> <Spacer />

                </Flex>
            </Box>

            <Box
                textAlign={"center"}
                mt={"10%"}
                maxW={"90%"}
                margin={"auto"}
            >
                <h1 style={{ fontSize: "50px", }}>A flexible tool for <span style={{ color: "#3b8fc2", fontWeight: "bold" }}>all types of organizations</span></h1>
                <Flex
                    maxW={"100%"}
                    mt={"5%"}
                    justifyContent={"space-evenly"}
                    alignContent={"center"}
                    border={"1px soli red"}
                    flexWrap="wrap"
                    mb={"50px"}>
                    <Box
                        mb="20px"
                        maxW={"300px"}
                        maxH={"200px"}
                        textAlign={"left"}>
                        <Image src='https://assets-global.website-files.com/64148069036e35d5954d1323/642beeffe90ab5088496b561_Group%201019.svg' /> <br />
                        <h1>Client billing</h1><br />
                        <p>Choose the billing method that is fair for your client and represents your actual work.</p><br />
                        <a style={{ color: "#3b8fc2", textDecoration: "underline", fontSize: "20px" }} href="https://myhours.com/security">Here's how →</a>
                    </Box>
                    <Box
                        mb="20px"
                        maxW={"300px"}
                        maxH={"200px"}
                        textAlign={"left"}>
                        <Image src='https://assets-global.website-files.com/64148069036e35d5954d1323/642beeffe90ab5088496b561_Group%201019.svg' /><br />
                        <h1>Client billing</h1><br />
                        <p>Choose the billing method that is fair for your client and represents your actual work.</p><br />
                        <a style={{ color: "#3b8fc2", textDecoration: "underline", fontSize: "20px" }} href="https://myhours.com/security">Here's how →</a>
                    </Box>
                    <Box
                        mb="20px"
                        maxW={"300px"}
                        maxH={"200px"}
                        textAlign={"left"}>
                        <Image src='https://assets-global.website-files.com/64148069036e35d5954d1323/642beeffe90ab5088496b561_Group%201019.svg' /><br />
                        <h1>Client billing</h1><br />
                        <p>Choose the billing method that is fair for your client and represents your actual work.</p><br />
                        <a style={{ color: "#3b8fc2", textDecoration: "underline", fontSize: "20px" }} href="https://myhours.com/security">Here's how →</a>
                    </Box>
                    <Box
                        mb="20px"
                        maxW={"300px"}
                        maxH={"200px"}
                        textAlign={"left"}>
                        <Image src='https://assets-global.website-files.com/64148069036e35d5954d1323/642beeffe90ab5088496b561_Group%201019.svg' /><br />
                        <h1>Client billing</h1><br />
                        <p>Choose the billing method that is fair for your client and represents your actual work.</p><br />
                        <a style={{ color: "#3b8fc2", textDecoration: "underline", fontSize: "20px" }} href="https://myhours.com/security">Here's how →</a>
                    </Box>
                </Flex>
            </Box>



            <Box
                maxW='100%'
                borderWidth='1px'
                pt={"8%"}
                textAlign={"center"}
                bg={"#f6f4f3"}
                display={"flex"}
                flexDirection={"column"}
                alignItems='center'
            >
                <Box
                    maxW={"60%"}
                    textAlign={"center"}
                >
                    <h1 style={{ fontSize: "40px" }}>My Hours has <span style={{ color: "#3b8fc2", fontWeight: "bold" }}>changed the way </span>our customers work</h1> <br />
                    <p style={{ fontSize: "20px" }}>We've helped <span style={{ color: "#3b8fc2", fontWeight: "bold" }}>250.000+ people </span>track their work since 2002.</p>
                    <p style={{ fontSize: "20px" }}>Our software <span style={{ color: "#3b8fc2", fontWeight: "bold" }}>does not include employee monitoring </span>and never will.</p>
                </Box>

                <Box
                    maxW={"80%"}
                    textAlign={"center"}
                    mt={"5%"}>
                    <h1 style={{ fontSize: "40px" }}><span style={{ fontSize: "80px", fontWeight: "bold", color: "#3b8fc2" }}>"</span>Simple to use, perfect for the price, <span style={{ backgroundColor: "#91d8ab", borderRadius: "10px" }}>genuinely the best hour tracker I've used yet.</span>"</h1> <br />
                    <p style={{ fontSize: "25px" }}>Leah M., Engineer</p>
                </Box>
            </Box>





            <Box
                maxW='100%'
                h={"100%"}
                borderWidth='1px'
                overflow='hidden'
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
            >
                <Box
                    maxW={'100%'}
                    textAlign="center"
                    m={"auto"}
                    mt={"100px"}
                    mb={50}
                    alignItems={"center"}
                >
                    <h1 style={{ fontSize: "50px" }}>Enterprise-grade <span style={{ color: "#3b8fc2", fontWeight: "bold" }}>security & support</span></h1>
                    <Flex
                        maxW={'100%'}
                        m={"auto"}
                        alignContent={"center"}
                        justifyContent={"center"}
                    >
                        <Box
                            maxW={"30%"}
                            mr={50}
                            textAlign={"center"}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}>
                            <Image maxH={"60%"} maxW={"50%"} src='https://assets-global.website-files.com/64148069036e35d5954d1323/642c011b61ba26948d4fb726_Enterprise%20security%20and%20support-41%201.svg' />
                            <p
                                style={{
                                    fontSize: "20px",
                                }}
                            >
                                Built on top of a secure Microsoft cloud and supported by a team of product experts.</p><br />
                            <a style={{ color: "#3b8fc2", textDecoration: "underline", fontSize: "20px" }} href="https://myhours.com/security">Learn more ⇾</a>
                        </Box>
                        <Box
                            maxW={"30%"}
                            mr={50}
                            textAlign={"center"}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}>
                            <Image maxH={"60%"} maxW={"50%"} src='https://assets-global.website-files.com/64148069036e35d5954d1323/642c0147b6cdb761d04d2896_Enterprise%20security%20and%20support-42%201.svg' />
                            <p
                                style={{
                                    fontSize: "20px",
                                }}
                            >
                                It's always nice to have someone to talk to when facing new software. Get in touch and we'll help you out.</p><br />
                            <a style={{ color: "#3b8fc2", textDecoration: "underline", fontSize: "20px" }} href="https://myhours.com/support">Learn more ⇾</a>
                        </Box>
                    </Flex>
                </Box>
            </Box >



            <Flex
                maxW={'100%'}
                bg={"#e5f6ef"}
                textAlign="center"
                m={"auto"}
                pt={"100px"}
                alignItems="center"
                pb={50}
                justifyContent={"center"}
                flexDirection={{ base: "column", md: "row" }}
            >
                <Box
                    maxW={"40%"}
                    mr={50}
                    textAlign={"left"}>
                    <h1 style={{ fontSize: "50px" }}><span style={{ color: "#3b8fc2", fontWeight: "bold" }}>Waste no more time,</span><br />jump right in!</h1>
                    <p style={{ fontSize: "20px" }}>My Hours is Free to use for teams of any size.</p>
                    <br />
                    <p style={{ fontSize: "20px" }}>Pro paid plan comes with additional features like invoicing, admin controls and priority support.</p>
                </Box>
                <Link to="/signup">
                    <Button bg={"#3b8fc2"} color={"white"} mt={10} p={8} fontSize={"20px"} _hover={{ bg: "#397294" }}>Get Started - It's Free</Button>
                </Link>
            </Flex>

        </div >
    )
}
