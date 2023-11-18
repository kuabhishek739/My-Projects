import { ReactNode } from 'react';
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Image,
    Link,
    textDecoration,
} from '@chakra-ui/react';


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={"#375d75"}
            color={"#dbf1ff"}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr 1fr' }}
                    spacing={8}
                >
                    <Stack spacing={6}>
                        <Box>
                            <Image src='https://assets-global.website-files.com/64148069036e35d5954d1323/64148069036e351c984d171e_Logo-300px.png' />
                        </Box>
                        <Text fontSize={'sm'}>© 2023 My Hours.
                            All rights reserved.</Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Product</ListHeader>
                        <Box as="a" href={'https://myhours.com/how-it-works'}>
                            How it works
                        </Box>
                        <Box as="a" href={'https://myhours.com/mobile-time-tracking-app'}>
                            Mobile app
                        </Box>
                        <Box as="a" href={'https://myhours.com/free-chrome-time-tracking-browser-extension'}>
                            Browser extension
                        </Box>
                        <Box as="a" href={'https://myhours.com/timesheet-ai-chatbot'}>
                            AI Chatbot Assistant
                        </Box>
                        <Box as="a" href={'https://myhours.com/use-cases'}>
                            Use case collection
                        </Box>
                        <Box as="a" href={'https://myhours.com/pricing'}>
                            Pricing
                        </Box>
                        <Box as="a" href={'https://myhours.com/articles'}>
                            Articles
                        </Box>
                        <Box as="a" href={'https://help.myhours.com/en/'}>
                            Guides
                        </Box>
                        <Box as="a" href={'https://myhours.com/customers'}>
                            Customer Reviews
                        </Box>
                        <Box as="a" href={'https://app.myhours.com/#/signup/trial/1'}>
                            Start Free
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Resources</ListHeader>
                        <Box as="a" href={'https://myhours.com/time-tracking-library'}>
                            Time Tracking Library
                        </Box>
                        <Box as="a" href={'https://myhours.com/about'}>
                            About
                        </Box>
                        <Box as="a" href={'https://myhours.com/legal/terms-of-use'}>
                            Terms of Use
                        </Box>
                        <Box as="a" href={'https://myhours.com/sitemap'}>
                            Sitemap
                        </Box>
                        <Box as="a" href={'https://myhours.com/free-timesheet-templates-excel-word-sheets'}>
                            Free Timesheet Templates
                        </Box>
                        <Box as="a" href={'https://myhours.com/top-time-management-apps-2023'}>
                            Time Management Apps
                        </Box>
                        <Box as="a" href={'https://myhours.com/best-time-tracking-apps'}>
                            Best Time Tracking Apps for 2023
                        </Box>
                        <Box as="a" href={'https://myhours.com/articles/time-management-skills-techniques-strategies-list'}>
                            Time Management Skills, Techniques and Strategies
                        </Box>
                        <Box as="a" href={'https://myhours.com/free-time-card-calculator'}>
                            Free Time Card Calculator
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Use Cases</ListHeader>
                        <Box as="a" href={'https://myhours.com/project-billing'}>
                            Project billing
                        </Box>
                        <Box as="a" href={'https://myhours.com/time-reports-and-project-analyticshttps://myhours.com/time-reports-and-project-analytics'}>
                            Time reports and Project analytics
                        </Box>
                        <Box as="a" href={'https://myhours.com/attendance-absence-tracking'}>
                            Attendance and Absence tracking
                        </Box>
                        <Box as="a" href={'https://myhours.com/expense-tracking'}>
                            Expense tracking
                        </Box>
                        <Box as="a" href={'https://myhours.com/calculating-project-profitability'}>
                            Calculating project profitability
                        </Box>
                        <Box as="a" href={'https://myhours.com/timesheet-time-tracking'}>
                            Timesheet time tracking
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Integrations</ListHeader>
                        <Box as="a" href={'https://myhours.com/quickbooks-time-tracking-integration'}>
                            QuickBooks
                        </Box>
                        <Box as="a" href={'https://myhours.com/integrations-zapier'}>
                            Zapier
                        </Box>
                        <Box as="a" href={'https://documenter.getpostman.com/view/8879268/TVmV4YYU#intro'}>
                            API Documentation
                        </Box>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Social</ListHeader>
                        <Box as="a" href={'https://www.facebook.com/myHoursTeam/'}>
                            Facebook
                        </Box>
                        <Box as="a" href={'https://twitter.com/MyHoursTeam'}>
                            Twitter
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Text textAlign={'center'}
                fontSize={"25px"} >Looking for employee attendance and absence tracking? Visit
                <Link color={'white'}
                    textDecoration={'underline'}> All Hours.</Link></Text>
        </Box >
    );
}
