import React from 'react'
import {
    Flex,
    useDisclosure,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Box,
    Button
} from '@chakra-ui/react'
import Navbar from './Navbar'
import AddSiteModal from './AddSiteModal'
import { AiOutlinePlus } from 'react-icons/ai'

const DashboardShell = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex flexDirection="column" height="100vh">
            <Navbar />
            <Flex
                backgroundColor="gray.100"
                p={30}
                justifyContent="center"
                height="100%"
                w="100%"
            >
                <Flex>
                    <Flex
                        flexDirection="column"
                        ml="auto"
                        mr="auto"
                        width="1000px"
                        mt={10}
                    >
                        <Flex justifyContent="space-between" w="100%">
                            <Box>
                                <Breadcrumb>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink color="gray.600">
                                            Sites
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                                <Heading size="xl">My Sites</Heading>
                            </Box>
                            <Button
                                variant="solid"
                                size="md"
                                backgroundColor="black"
                                color="white"
                                mt="20px"
                                _hover={{ bg: '#3c3c3c' }}
                                _active={{ bg: 'black' }}
                                fontWeight="medium"
                                onClick={onOpen}
                                leftIcon={<AiOutlinePlus />}
                            >
                                Add site
                            </Button>
                            <AddSiteModal isOpen={isOpen} onClose={onClose} />
                        </Flex>
                        <Flex
                            color="black"
                            backgroundColor="white"
                            p={16}
                            boxShadow="sm"
                            mt={10}
                            flexDirection="column"
                            alignItems="center"
                            borderRadius={10}
                        >
                            {children}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DashboardShell
