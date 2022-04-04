import { useAuth } from '@/lib/auth'
import { createSite } from '@/lib/db'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Input,
    FormLabel,
    Button,
    useToast
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const AddSiteModal = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm()
    const toast = useToast()
    const auth = useAuth()

    const onSubmit = async (values) => {
        const res = await createSite({
            createdAt: new Date().toISOString(),
            authorId: auth.user.uid,
            ...values
        })
        if (res) {
            toast({
                title: 'Success!',
                isClosable: true,
                duration: 5000,
                status: 'success',
                description: "We've added your site."
            })
        } else {
            toast({
                title: 'Oops!',
                isClosable: true,
                duration: 5000,
                status: 'error',
                description: 'An unexpected error occured.'
            })
        }
        onClose()
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                borderColor="gray.400"
                                placeholder="My Site"
                                {...register('site-name', {
                                    required: true
                                })}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                borderColor="gray.400"
                                placeholder="https://my-site.com/"
                                {...register('site-link', {
                                    required: true
                                })}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} fontWeight="medium">
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            colorScheme="cyan"
                            fontWeight="medium"
                            ml={3}
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddSiteModal
