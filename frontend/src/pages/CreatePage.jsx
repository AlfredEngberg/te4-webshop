import {
    Box, Container, Heading, useColorModeValue, Button, Input, Stack, Checkbox, Text, Card, useDisclosure,
    CardHeader,
    Center,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    VStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    useRadioGroup,
    useToast,
    Radio,
    RadioGroup,

} from '@chakra-ui/react'
import { useState } from 'react'
import { useProductStore } from '../store/product'
import { ChevronDownIcon } from '@chakra-ui/icons'

const CreatePage = () => {

    const { getDisclosureProps, getButtonProps, } = useDisclosure()

    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        imageRed: "",
        imageBlue: "",
        imageGreen: "",
        imageYellow: "",
        description: "",
        category: "",
    })
    const toast = useToast()


    const { createProduct } = useProductStore()

    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct)
        if (!success) {
            toast({
                "title": "Error",
                description: message,
                status: "error",
                isClosable: true
            })
        } else {
            toast({
                "title": "Success",
                description: message,
                status: "success",
                isClosable: true
            })
        }
        setNewProduct({ name: "", price: "", imageRed: "", imageYellow: "", imageGreen: "", imageBlue: "", description: "", category: "", })
    }


    return <Container maxW={"container.sm"}>
        <VStack
            spacing={8}
        >
            <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
                Create New Product
            </Heading>

            <Box
                w={"full"} bg={useColorModeValue("white", "gray.800")}
                p={6} rounded={"lg"} shadow={"md"}
            >

                <VStack spacing={4}>

                    <Input
                        placeholder='Product Name'
                        name='name'
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />

                    <Input
                        placeholder='Price'
                        name='price'
                        type='number'
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />


                    <Input
                        placeholder='Product Description'
                        name='description'
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    />

                    <Text>Color</Text>




                    <Button {...buttonProps} colorScheme='red'> Red</Button>
                    <Input {...disclosureProps}
                        placeholder='Image URL'
                        name='imageRed'
                        value={newProduct.imageRed}
                        onChange={(e) => setNewProduct({ ...newProduct, imageRed: e.target.value })}
                    />
                    <Button {...buttonProps} colorScheme='green'> Green</Button>
                    <Input {...disclosureProps}
                        placeholder='Image URL'
                        name='imageGreen'
                        value={newProduct.imageGreen}
                        onChange={(e) => setNewProduct({ ...newProduct, imageGreen: e.target.value })}
                    />

                    <Button {...buttonProps} colorScheme='blue'> Blue</Button>
                    <Input {...disclosureProps}
                        placeholder='Image URL'
                        name='imageBlue'
                        value={newProduct.imageBlue}
                        onChange={(e) => setNewProduct({ ...newProduct, imageBlue: e.target.value })}
                    />
                    <Button {...buttonProps} colorScheme='yellow'> Yellow</Button>
                    <Input {...disclosureProps}
                        placeholder='Image URL'
                        name='imageYellow'
                        value={newProduct.imageYellow}
                        onChange={(e) => setNewProduct({ ...newProduct, imageYellow: e.target.value })}
                    />





                    <HStack >
                        <RadioGroup >
                            <Radio value={newProduct.category = "barn"}> Barn</Radio>

                            <Radio value={newProduct.category = "herr"}> Herr</Radio>

                            <Radio value={newProduct.category = "Dam"}> Dam </Radio>

                        </RadioGroup>
                    </HStack>





                    <HStack spacing={"3rem"}>
                        <RadioGroup>
                            <Radio value={newProduct.type = "T-shirt"}> T-shirt</Radio>

                            <Radio value={newProduct.type = "Byxor"}> Byxor</Radio>

                            <Radio value={newProduct.type = "Hoodie"}> Hoodie </Radio>
                            <Radio value={newProduct.type = "Accessoarer"}> Accessoarer </Radio>



                            <Radio value={newProduct.type = "Skor"}> Skor </Radio>
                        </RadioGroup>
                    </HStack>








                    <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>
                        Add Product
                    </Button>

                </VStack>
            </Box>

        </VStack>
    </Container>
}

export default CreatePage