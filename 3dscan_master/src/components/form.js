import { Container, Stack, Select, Box, Heading, Text, Button, useToast } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, InputGroup, Textarea, FormHelperText } from "@chakra-ui/react";
import Carousel from "./carousel";
import React from "react";

import emailjs from "@emailjs/browser";
import axios from "axios";
import { useTranslation } from "react-i18next";

//https://www.youtube.com/watch?v=4UIbOoySiXw <- watch for form

// currently using sharon's template and service id, connceted to uci email

// make variable change check to detect if the user information form has been submitted

// before they can start scanning
// we're going to send two emails
// one with the scan, and one with the user information
// both should have a unique ID associated with them
//const [formData, updateFormData] =

const initialFormData = Object.freeze({
    name: "n/a",
    email: "n/a",
    height: "1",
    bust: "2",
    band: "3",
    brasize: "S",
    notes: "n/a",
});

export default function CallToActionWithVideo() {
    const [formData, updateFormData] = React.useState(initialFormData);
    const [isDisabled, setIsDisabled] = React.useState(false);
    const toast = useToast();
    const { t } = useTranslation();

    const options = {
        method: "GET",
        url: "http://localhost:8000/pubkey",
    };

    //make another useState for post_submission toast

    const sendFeedback = (serviceID, templateId, variables) => {
        axios.request(options).then(function (response) {
            console.log(serviceID);
            emailjs
                .send(serviceID, templateId, variables, response.data)
                .then((res) => {
                    console.log("Email successfully sent!");
                    toast({
                        title: t("success"),
                        description: t("success-sub"),
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                        variant: "left-accent",
                    });
                })
                .catch((err) => {
                    console.error("There has been an Error.", err);
                    toast({
                        title: t("failure"),
                        description: t("failure-sub"),
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                        variant: "left-accent",
                    });
                });
        });
    };

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim(),
        });
    };

    function handleSize(size) {
        updateFormData({
            ...formData,

            brasize: size.target.value.trim(),
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(`Thank you for your message. Your query has been forwarded.`);
        const templateId = "template_uui0qmd";
        const serviceID = "service_9kipkhb";

        console.log(formData);

        sendFeedback(serviceID, templateId, { name: formData.name, email: formData.email, height: formData.height, bust: formData.bust, band: formData.band, brasize: formData.brasize, notes: formData.notes });
        setIsDisabled(true);
    };

    return (
        <Container maxW={"7xl"}>
            <VStack spacing={{ base: 4, sm: 6 }} pt={{ base: 50, md: 100 }}>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
                    <Text
                        as={"span"}
                        position={"relative"}
                        _after={{
                            content: "''",
                            width: "full",
                            height: "30%",
                            position: "absolute",
                            bottom: 1,
                            left: 0,
                            bg: "pink.200",
                            zIndex: -1,
                        }}
                    >
                        {t("step1")}
                    </Text>
                    <Text as={"span"} color={"black"}>
                        {t("measure")}
                    </Text>
                </Heading>
                <Text color={"gray.600"} maxWidth={"70%"} fontSize={"xl"}>
                    {t("step1copy")}
                </Text>
            </VStack>
            <Stack spacing={{ base: 8, sm: 10 }} py={{ base: 5, lg: 10 }} align={"center"} direction={{ base: "column", lg: "row" }}>
                <Carousel></Carousel>
                <Box bg="white" borderRadius="lg" shadow="base" width={{ base: "85%", lg: "60%" }}>
                    <Box m={10} color="#0B0E3F">
                        <VStack spacing={5}>
                            <FormControl id="name" isRequired>
                                <FormLabel>{t("name")}</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <Input type="text" size="md" onChange={handleChange} name="name" placeholder="e.g. Jane Doe" />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel>{t("email")}</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <Input onChange={handleChange} type="email" name="email" size="md" placeholder="e.g. janedoe@gmail.com" />
                                </InputGroup>
                                <FormHelperText>{t("sub-email")}</FormHelperText>
                            </FormControl>
                            <FormControl id="height" isRequired>
                                <FormLabel>{t("height")}</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <Input onChange={handleChange} type="number" name="height" size="md" placeholder="e.g. 153 cm" />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="bust">
                                <FormLabel>{t("bust")}</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <Input onChange={handleChange} type="number" name="bust" size="md" placeholder="e.g. 97 cm" />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="band">
                                <FormLabel>{t("band")}</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <Input onChange={handleChange} type="number" name="band" size="md" placeholder="e.g. 92 cm" />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="brasize">
                                <FormLabel>{t("bra")}</FormLabel>
                                <Select
                                    display="inline-flex"
                                    onChange={(e) => {
                                        handleSize(e);
                                    }}
                                >
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </Select>
                            </FormControl>
                            <FormControl id="notes">
                                <FormLabel>{t("add_notes")}</FormLabel>
                                <Textarea
                                    onChange={handleChange}
                                    name="notes"
                                    borderColor="gray.300"
                                    _hover={{
                                        borderRadius: "gray.300",
                                    }}
                                    placeholder={t("msg")}
                                />
                            </FormControl>
                            <FormControl id="name" float="right">
                                <Button
                                    onClick={handleSubmit}
                                    variant="solid"
                                    type="submit"
                                    bg="pink.400"
                                    color="white"
                                    rounded={"full"}
                                    disabled={!(formData.band && formData.bust && formData.email && formData.height && formData.name) || isDisabled}
                                    _hover={{
                                        bg: "pink.600",
                                    }}
                                >
                                    {t("submit")}
                                </Button>
                            </FormControl>
                        </VStack>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
}
