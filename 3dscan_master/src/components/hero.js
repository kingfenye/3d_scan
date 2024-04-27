import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Box, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, Textarea } from "@chakra-ui/react";
import UseFetch from "../hooks/useFetch";

export default function Hero() {
    return (
        <Wrap>
            <Button variant="solid" onClick={UseFetch}>
                Start Scanning
            </Button>

            <Wrap justify="center" align="center">
                <WrapItem>
                    <Box bg="white" borderRadius="lg" width={[300, 500]} shadow="base">
                        <Box m={10} color="#0B0E3F">
                            <VStack spacing={5}>
                                <FormControl id="name">
                                    <FormLabel>Your Name</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <Input type="text" size="md" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name">
                                    <FormLabel>Mail</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <Input type="text" size="md" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name">
                                    <FormLabel>Mail</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <Input type="text" size="md" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name">
                                    <FormLabel>Message</FormLabel>
                                    <Textarea
                                        borderColor="gray.300"
                                        _hover={{
                                            borderRadius: "gray.300",
                                        }}
                                        placeholder="message"
                                    />
                                </FormControl>
                                <FormControl id="name" float="right">
                                    <Button variant="solid" bg="pink" color="black" _hover={{}}>
                                        Send Message
                                    </Button>
                                </FormControl>
                            </VStack>
                        </Box>
                    </Box>
                </WrapItem>
            </Wrap>
        </Wrap>
    );
}
