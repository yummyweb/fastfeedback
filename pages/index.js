import FreePlanEmptyState from '@/components/FreePlanEmptyState'
import { useAuth } from '@/lib/auth'
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    IconButton
} from '@chakra-ui/react'
import { AiOutlineGithub } from 'react-icons/ai'

export default function Home() {
    const auth = useAuth()

    return (
        <div>
            <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                h="100vh"
                w="full"
            >
                <Flex gap="15px" alignItems="center">
                    <Icon h="50px" w="50px" viewBox="0 0 46 32">
                        <path
                            d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
                            fill="currentColor"
                        ></path>
                    </Icon>
                    <Heading>Fast Feedback</Heading>
                </Flex>

                <Flex mt="30px" as="main" justifyContent="center">
                    {auth.user ? null : (
                        <Button
                            leftIcon={<AiOutlineGithub size={25} />}
                            _hover={{ bgColor: 'black' }}
                            _active={{ bgColor: 'black' }}
                            color="white"
                            bgColor="black"
                            onClick={() => auth.signinWithGithub()}
                        >
                            Sign In With GitHub
                        </Button>
                    )}
                </Flex>

                <div>
                    <Button>Go to Dashboard</Button>
                </div>
            </Flex>
        </div>
    )
}
