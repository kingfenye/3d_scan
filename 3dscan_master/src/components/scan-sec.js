import React from "react";
import { VStack, Container, Heading, Text, Button, Box, Stack, SimpleGrid, HStack, Icon, useColorModeValue, createIcon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
//mport UseFetch from "../hooks/useFetch";
import { useTranslation } from "react-i18next";
import NewFetch from "../newFetch";
//import eventBus from "../eventBus";

import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Image, Spinner } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function ScanSec() {
    const { t } = useTranslation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isDisabled, setIsDisabled] = React.useState(false);
    const [notcompleted, setCompleted] = React.useState(true);

    const features = [
        {
            id: 1,
            title: t("ft1"),
            text: t("fx1"),
        },
        {
            id: 2,
            title: t("ft2"),
            text: t("fx2"),
        },
        {
            id: 3,
            title: t("ft3"),
            text: t("fx3"),
        },
        {
            id: 4,
            title: t("ft4"),
            text: t("fx4"),
        },
    ];

    const Arrow = createIcon({
        displayName: "Arrow",
        viewBox: "0 0 72 24",
        path: (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
                fill="currentColor"
            />
        ),
    });

    return (
        <Container maxW={"7xl"}>
            <VStack spacing={{ base: 4, sm: 7 }} pt={50} pb={100}>
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
                        {t("step2")}
                    </Text>
                    <Text as={"span"} color={"black"}>
                        {t("scan")}
                    </Text>
                </Heading>
                <Text color={"gray.600"} maxWidth={"70%"} fontSize={"xl"}>
                    {t("step3copy")}
                </Text>
                <Box pt={5} pb={30}>
                    <Stack spacing={{ base: 2, md: 4 }} as={Container} maxW={"3xl"} textAlign={"center"}>
                        <Heading fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}>{t("require")}</Heading>
                    </Stack>

                    <Container maxW={"5xl"} mt={10}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {features.map((feature) => (
                                <HStack key={feature.id} align={"top"}>
                                    <Box color={"green.400"} px={2}>
                                        <Icon as={CheckIcon} />
                                    </Box>
                                    <VStack align={"start"}>
                                        <Text fontWeight={600} fontSize={"xl"}>
                                            {feature.title}
                                        </Text>
                                        <Text color={"gray.600"} fontSize={"lg"}>
                                            {feature.text}
                                        </Text>
                                    </VStack>
                                </HStack>
                            ))}
                        </SimpleGrid>
                    </Container>
                </Box>
                <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"} pt={5}>
                    <Button
                        id="hellobutton"
                        rounded={"full"}
                        size={"lg"}
                        px={6}
                        color="white"
                        bg={"pink.400"}
                        _hover={{ bg: "pink.600" }}
                        disabled={isDisabled}
                        onClick={() => {
                            onOpen();
                            NewFetch(setCompleted);
                            setIsDisabled(true);
                            console.log("hello");
                        }}
                    >
                        {t("startscan")}
                        {/* change to NewFetch later */}
                    </Button>
                    <Box>
                        <Icon as={Arrow} color={useColorModeValue("gray.800", "gray.300")} w={71} position={"absolute"} right={-71} top={"40px"} />
                        <Text fontSize={"lg"} fontFamily={"Georgia"} position={"absolute"} right={"-125px"} top={"-10px"} transform={"rotate(10deg)"}>
                            {t("once")}
                        </Text>
                    </Box>
                </Stack>
                {notcompleted ? (
                    <Modal closeOnOverlayClick={false} closeOnEsc={false} isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
                        <ModalContent>
                            <ModalHeader>
                                <Image src="/logo_myrina_checkout_x25@2x.png" alt="myrina-logo" w={[100, 160]} />
                            </ModalHeader>
                            <ModalBody>
                                <Text fontWeight="bold" mb="1rem">
                                    {t("p-title")}
                                </Text>
                                <Spinner size="xl" mb="1rem" />
                                <Text mb="1rem">{t("p-body")}</Text>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                ) : (
                    <Modal closeOnOverlayClick={false} closeOnEsc={false} isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
                        <ModalContent>
                            <ModalHeader>
                                <Image src="/logo_myrina_checkout_x25@2x.png" alt="myrina-logo" w={[100, 160]} />
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text fontWeight="bold" mb="1rem">
                                    {t("c-title")}
                                </Text>
                                <CheckCircleIcon boxSize={50} color="green.400" pb={2} />
                                <Text mb="1rem">{t("c-body")}</Text>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                )}
            </VStack>
        </Container>
    );
}
