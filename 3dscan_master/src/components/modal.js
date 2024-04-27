import React from "react";
import { Modal, ModalContent, Image, ModalOverlay, FormErrorMessage, ModalHeader, ModalFooter, ModalBody, FormControl, FormLabel, FormHelperText, Input, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Login() {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
    const { t } = useTranslation();

    const options5 = {
        method: "GET",
        url: "http://localhost:8000/sitepass",
    };
    //GETS Website password from node backend

    async function validateName(value) {
        let error;
        let pass = await axios.request(options5).then(function (password) {
            return password.data;
        });
        if (String(value).localeCompare(pass) !== 0) {
            error = t("err");
        }
        return error;
    }

    return (
        <Modal closeOnOverlayClick={false} closeOnEsc={false} isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
            <ModalContent
                width={[
                    "80%", // 0-30em
                    "100%", // 30em+
                ]}
            >
                <ModalHeader>
                    <Image src="/logo_myrina_checkout_x25@2x.png" alt="myrina-logo" w={[100, 160]} pt={5} />
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            password: "",
                        }}
                        onSubmit={(values) => {
                            //console.log(values);
                            onClose();
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form id="new-form" onSubmit={handleSubmit}>
                                <FormControl isInvalid={!!errors.password && touched.password}>
                                    <FormLabel htmlFor="password">{t("enter")}</FormLabel>
                                    <Field as={Input} id="password" name="password" type="password" variant="outline" validate={validateName} />
                                    <FormHelperText>{t("helper")}</FormHelperText>
                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                </FormControl>
                            </form>
                        )}
                    </Formik>
                </ModalBody>
                <ModalFooter py={6}>
                    <Button
                        type="submit"
                        form="new-form"
                        rounded={"full"}
                        fontSize={"md"}
                        fontWeight={600}
                        color={"white"}
                        bg={"pink.400"}
                        _hover={{
                            bg: "pink.600",
                        }}
                    >
                        {t("btn35")}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
