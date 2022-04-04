import DashboardShell from './DashboardShell'
import { Heading, Button, Text } from '@chakra-ui/react'

const FreePlanEmptyState = () => {
    return (
        <DashboardShell>
            <>
                <Heading as="h3" size="md" color="#000000">
                    Get feedback on your site instantly.
                </Heading>
                <Text size="sm" mt="20px">
                    Start today, then grow with us 🌱
                </Text>
                <Button
                    variant="solid"
                    size="md"
                    backgroundColor="black"
                    color="white"
                    mt="20px"
                    _hover={{ bg: 'black' }}
                    _active={{ bg: 'black' }}
                    fontWeight="medium"
                >
                    Upgrade to starter
                </Button>
            </>
        </DashboardShell>
    )
}

export default FreePlanEmptyState
