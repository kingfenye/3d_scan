import React from "react";
import { Box, VStack, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
    const { t } = useTranslation();
    return (
        <Box bg={"#F6C6D4"}>
            <VStack spacing={{ base: 4, sm: 6 }} py={50}>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }} align={{ sm: "center", lg: "left" }}>
                    <Text as={"span"} position={"relative"}>
                        {t("faq")}
                    </Text>
                </Heading>
                <Accordion allowMultiple width={{ base: "85%", md: "60%" }}>
                    <AccordionItem py={2} borderTopColor={"black"}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left">
                                    <Text color={"gray.600"} fontSize={"xl"}>
                                        {t("q1")}
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>{t("a1")}</AccordionPanel>
                    </AccordionItem>

                    <AccordionItem py={2} borderTopColor={"black"}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left">
                                    <Text color={"gray.600"} fontSize={"xl"}>
                                        {t("q2")}
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>{t("a2")}</AccordionPanel>
                    </AccordionItem>

                    <AccordionItem py={2} borderTopColor={"black"}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left">
                                    <Text color={"gray.600"} fontSize={"xl"}>
                                        {t("q3")}
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>{t("a3")}</AccordionPanel>
                    </AccordionItem>

                    <AccordionItem py={2} borderTopColor={"black"} borderBottomColor={"black"}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left">
                                    <Text color={"gray.600"} fontSize={"xl"}>
                                        {t("q4")}
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>{t("a4")}</AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </VStack>
        </Box>
    );
}
