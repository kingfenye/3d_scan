import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden, Image } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function SmallWithLogoLeft() {
    const { t } = useTranslation();
    return (
        <Box bg={"#F6C6D4"} color={useColorModeValue("gray.700", "gray.200")}>
            <Container as={Stack} maxW={"6xl"} py={10} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
                <Image src="/logo_myrina_checkout_x25@2x.png" alt="myrina-logo" w={[120, 150, 180]} />
                <Text>
                    © 2023 <a href="https://www.myrinaworld.com/en">Myrina.</a> {t("rights")}
                </Text>
                <Stack direction={"row"} spacing={6}>
                    <SocialButton label={"Twitter"} href={"https://twitter.com/myrina_world"}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={"Facebook"} href={"https://facebook.com/myrinaworld"}>
                        <FaFacebook />
                    </SocialButton>
                    <SocialButton label={"Instagram"} href={"http://instagram.com/myrina_world"}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}
