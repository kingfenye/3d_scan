import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

export default function Carousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = useState(0);
    // const [slider, setSlider] = (useState() < Slider) | (null > null);
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: "90%", md: "50%" });
    const side = useBreakpointValue({ base: "30%", md: "10px" });

    // These are the images used in the slide
    const cards = ["/measure-bust.png", "/measure-band.png"];

    return (
        <Box position={"relative"} width={{ base: "85%", lg: "48%" }}>
            {/* CSS files for react-slick */}
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            {/* Left Icon */}
            <IconButton aria-label="left-arrow" colorScheme="gray" borderRadius="full" position="absolute" left={side} top={top} transform={"translate(0%, -50%)"} zIndex={2} onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton aria-label="right-arrow" colorScheme="gray" borderRadius="full" position="absolute" right={side} top={top} transform={"translate(0%, -50%)"} zIndex={2} onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt />
            </IconButton>
            {/* Slider */}
            <Slider ref={(slider) => setSlider(slider)}>
                {cards.map((url, index) => (
                    <Box key={index} height={{ base: "md", lg: "2xl" }} position="relative" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="contain" backgroundImage={`url(${url})`} />
                ))}
            </Slider>
        </Box>
    );
}
