import { Box, Flex, Stack, Link, Avatar } from '@chakra-ui/react'
import Logo from './Logo'
import { useAuth } from '@/lib/auth'

const Navbar = () => {
    const auth = useAuth()

    return (
        <>
            <Box bg="#33f6ff" w="100vw" h="5px" />
            <Flex
                flexDirection="row"
                justifyContent="space-between"
                backgroundColor="white"
                alignItems="center"
                p={4}
                px={44}
            >
                <Stack
                    spacing={4}
                    isInline
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Logo h="30px" w="30px" />
                    <Link>Sites</Link>
                    <Link>Feedback</Link>
                </Stack>
                <Stack spacing={5} isInline alignItems="center">
                    <Avatar h="40px" w="40px" src={auth?.user?.photo} />
                </Stack>
            </Flex>
        </>
    )
}

export default Navbar
