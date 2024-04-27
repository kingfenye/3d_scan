import React from "react";
import { Box, Flex, Select, Text, IconButton, Button, Stack, Collapse, Icon, Link, useColorModeValue, useDisclosure, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import i18next from "i18next";

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    // const [value, setValue] = React.useState("");

    return (
        <Box>
            <Flex
                bg={"#fffefa"}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                py={{ base: 4, md: 6 }}
                px={{ base: 6, md: 10 }}
                // borderBottom={1}
                // borderStyle={"solid"}
                // borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
            >
                <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
                    <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                    <Image src="/logo_myrina_checkout_x25@2x.png" alt="myrina-logo" w={[100, 200, 250]} />

                    {/* <Flex display={{ base: "none", xl: "flex" }} ml={10}>
                        <DesktopNav />
                    </Flex> */}
                </Flex>

                <Stack flex={{ base: 1, md: 1 }} justify={"flex-end"} direction={"row"} spacing={6}>
                    <Select
                        display="inline-flex"
                        width={{ base: "69px", md: "130px" }}
                        onChange={(e) => {
                            i18next.changeLanguage(e.target.value);
                        }}
                    >
                        <option value="en">🇬🇧 English</option>
                        <option value="es">🇪🇸 Español</option>
                    </Select>
                    <Button
                        display={{ base: "none", md: "inline-flex" }}
                        rounded={"full"}
                        fontSize={"md"}
                        fontWeight={600}
                        color={"white"}
                        bg={"pink.400"}
                        // href={"https://www.myrinaworld.com/en"}
                        onClick={() => openInNewTab("https://www.myrinaworld.com/en")}
                        _hover={{
                            bg: "pink.600",
                        }}
                        leftIcon={<ExternalLinkIcon></ExternalLinkIcon>}
                    >
                        myrinaworld
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

// const DesktopNav = () => {
//     const linkColor = useColorModeValue("gray.600", "gray.200");
//     const linkHoverColor = useColorModeValue("gray.800", "white");
//     const popoverContentBgColor = useColorModeValue("white", "gray.800");

//     return (
//         <Stack direction={"row"} spacing={4}>
//             {NAV_ITEMS.map((navItem) => (
//                 <Box key={navItem.label}>
//                     <Popover trigger={"hover"} placement={"bottom-start"}>
//                         <PopoverTrigger>
//                             <Link
//                                 p={2}
//                                 href={navItem.href ?? "#"}
//                                 fontSize={"sm"}
//                                 fontWeight={500}
//                                 color={linkColor}
//                                 _hover={{
//                                     textDecoration: "none",
//                                     color: linkHoverColor,
//                                 }}
//                             >
//                                 {navItem.label}
//                             </Link>
//                         </PopoverTrigger>

//                         {navItem.children && (
//                             <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"xl"} minW={"sm"}>
//                                 <Stack>
//                                     {navItem.children.map((child) => (
//                                         <DesktopSubNav key={child.label} {...child} />
//                                     ))}
//                                 </Stack>
//                             </PopoverContent>
//                         )}
//                     </Popover>
//                 </Box>
//             ))}
//         </Stack>
//     );
// };

// const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//         <Link href={href} role={"group"} display={"block"} p={2} rounded={"md"} _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}>
//             <Stack direction={"row"} align={"center"}>
//                 <Box>
//                     <Text transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
//                         {label}
//                     </Text>
//                     <Text fontSize={"sm"}>{subLabel}</Text>
//                 </Box>
//                 <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0} _groupHover={{ opacity: "100%", transform: "translateX(0)" }} justify={"flex-end"} align={"center"} flex={1}>
//                     <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//                 </Flex>
//             </Stack>
//         </Link>
//     );
// };

const MobileNav = () => {
    return (
        <Stack bg={"#fffefa"} px={6} py={4} display={{ md: "none" }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
                    {label}
                </Text>
                {children && <Icon as={ChevronDownIcon} transition={"all .25s ease-in-out"} transform={isOpen ? "rotate(180deg)" : ""} w={6} h={6} />}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
                <Stack mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")} align={"start"}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    // {
    //     label: "Inspiration",
    //     children: [
    //         {
    //             label: "Explore Design Work",
    //             subLabel: "Trending Design to inspire you",
    //             href: "#",
    //         },
    //         {
    //             label: "New & Noteworthy",
    //             subLabel: "Up-and-coming Designers",
    //             href: "#",
    //         },
    //     ],
    // },
    {
        label: "Go to: myrinaworld.com",
        href: "https://www.myrinaworld.com/en",
    },
];
