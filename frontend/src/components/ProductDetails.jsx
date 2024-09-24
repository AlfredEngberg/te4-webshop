import {
    Box,
    Button,
    Heading,
    HStack,
    Stack,
    IconButton,
    Image,
    Input,
    Modal,
    Chakra,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    ModalFooter,
    useRadioGroup,
    useRadio,
    Radio,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorModeValue,
    useDisclosure,
    useToast,
    VStack,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { MdOutlineAddShoppingCart } from "react-icons/md";



const ProductDetails = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    function CustomRadio(props) {
        const { image, ...radioProps } = props
        const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
            useRadio(radioProps)

        return (
            <chakra.label {...htmlProps} {...getLabelProps()}>
                <input {...getInputProps({})} hidden />
                <Box
                    {...getRadioProps()}
                    bg={state.isChecked ? 'green.200' : 'transparent'}
                    w={12}
                    p={1}
                    rounded='full'
                >
                    <Image src={image} rounded='full' {...getLabelProps()} />
                </Box>
            </chakra.label>
        )
    }

    const colors = [
        { name: 'röd', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
        { name: 'grön', image: 'https://randomuser.me/api/portraits/men/86.jpg' },
        { name: 'blå', image: 'https://randomuser.me/api/portraits/men/29.jpg' },
        { name: 'gul', image: 'https://randomuser.me/api/portraits/women/95.jpg' },
    ]

    const handleChange = (value) => {
        toast({
            title: `The value got changed to ${value}!`,
            status: 'success',
            duration: 2000,
        })
    }

    const { value, getRadioProps, getRootProps } = useRadioGroup({
        defaultValue: 'röd',
        onChange: handleChange,
    })



    return (
        <Box
            overflow='hidden'
            bg={bg}
            p={35}
        >
            <HStack> // Titeln
                <VStack align="start">
                    <Heading as='h1' size="3xl" color={textColor}>
                        {product.name}
                    </Heading>

                    <HStack> // Bilderna
                        <Tabs defaultIndex={1}>
                            <TabPanels>
                                <TabPanel>
                                    <Image
                                        boxSize='200px'
                                        fit='cover'
                                        src=''
                                    />
                                </TabPanel>
                                <TabPanel>
                                    <Image
                                        boxSize='200px'
                                        fit='cover'
                                        src=''
                                    />
                                </TabPanel>
                            </TabPanels>
                            <TabList>
                                <Tab>Naruto</Tab>
                                <Tab>Sasuke</Tab>
                            </TabList>
                        </Tabs>
                    </HStack>

                    <Text color={textColor} fontSize={'4xl'}>
                        Pris: {product.price}:-
                    </Text>


                    // Färg
                    <HStack>
                        <Text>
                            Färg:
                        </Text>
                        <Stack {...getRootProps()}>
                            <Text>The selected radio is: {value}</Text>
                            <HStack>
                                {colors.map((colors) => {
                                    return (
                                        <CustomRadio
                                            key={colors.name}
                                            image={colors.image}
                                            {...getRadioProps({ value: colors.name })}
                                        />
                                    )
                                })}
                            </HStack>
                        </Stack>
                    </HStack>

                    // antal
                    <HStack>
                        <Text>
                            Antal:
                        </Text>
                        <NumberInput defaultValue={1} min={1} max={5}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </HStack>

                        // Lägg till i varukorgen
                    <Box boxSize={'250px'}>
                        <HStack spacing={4} bg={bg}>
                            <Button>
                                <Text>
                                    Lägg till i varukorgen
                                </Text>
                                <MdOutlineAddShoppingCart size={'28px'} />
                            </Button>
                        </HStack>
                        <Text p={4} w={'full'}>
                            {product.description}
                        </Text>
                    </Box>
                </VStack>
            </HStack>
        </Box>
    );
}
export default ProductDetails;