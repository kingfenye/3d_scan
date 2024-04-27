// LEGACY NAVBAR - DO NOT USE

import React from "react";
import { Flex, Box, Button, ButtonGroup, Image, Spacer } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Navbar() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <Flex minWidth="max-content" alignItems="center" gap="2" py={[2, 5, 7]} px={[2, 10, 35]}>
            <Box>
                <Image src="/logo_myrina_checkout_x25@2x.png" alt="myrina-logo" w={[100, 200, 250]} />
            </Box>
            <Spacer />
            <ButtonGroup spacing="6">
                <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    colorScheme={"red"}
                    bg={"pink.400"}
                    _hover={{ bg: "pink.600" }}
                    leftIcon={<ExternalLinkIcon></ExternalLinkIcon>}
                    onClick={() => openInNewTab("https://www.myrinaworld.com/en")}
                >
                    myrinaworld
                </Button>
            </ButtonGroup>
        </Flex>
    );
}
