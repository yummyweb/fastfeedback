import DashboardShell from './DashboardShell'
import { Heading, Button, Text, useDisclosure } from '@chakra-ui/react'
import AddSiteModal from './AddSiteModal'

const PaidPlanEmptyState = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <DashboardShell>
            <>
                <Heading as="h3" size="md" color="#000000">
                    You haven't added any sites.
                </Heading>
                <Text size="sm" mt="15px">
                    Welcome 👋, let's get you started.
                </Text>
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
                >
                    Add your first site
                </Button>
                <AddSiteModal isOpen={isOpen} onClose={onClose} />
            </>
        </DashboardShell>
    )
}

export default PaidPlanEmptyState
