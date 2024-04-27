import { Container, Stack, Flex, Box, Heading, Text, Button, Image, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export default function ProxyServe() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    const { t } = useTranslation();

    return (
        <Container maxW={"7xl"}>
            <VStack spacing={{ base: 4, sm: 7 }} pt={50} pb={77}>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }} align={{ sm: "center", lg: "left" }}>
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
                        {t("enable")}
                    </Text>
                </Heading>
                <Text color={"gray.600"} maxWidth={"70%"} fontSize={"xl"}>
                    {t("step2copy")}
                </Text>
                <Flex flex={1} justify={"center"} align={"center"} position={"relative"} width={{ base: "85%", xl: "100%" }} pt={10}>
                    <Box position={"relative"} rounded={"lg"} boxShadow={"2xl"} width={"full"} overflow={"hidden"}>
                        <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"100%"} h={"100%"} src={"/activate_server.png"} />
                    </Box>
                </Flex>
                <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }} pt={20}>
                    <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} colorScheme={"red"} bg={"pink.400"} _hover={{ bg: "pink.600" }} onClick={() => openInNewTab("https://cors-anywhere.herokuapp.com/corsdemo")}>
                        {t("activate")}
                    </Button>
                    <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} leftIcon={<ExternalLinkIcon></ExternalLinkIcon>} onClick={() => openInNewTab("https://github.com/Rob--W/cors-anywhere#readme")}>
                        {t("hiw")}
                    </Button>
                </Stack>
            </VStack>
        </Container>
    );
}
