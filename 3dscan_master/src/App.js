import { ChakraProvider } from "@chakra-ui/react";
import WithSubnavigation from "./components/nav-bar";
import CallToActionWithVideo from "./components/form";
import ScanSec from "./components/scan-sec";
import FAQ from "./components/FAQ";
import SmallWithLogoLeft from "./components/footer";
import Login from "./components/modal";

function App() {
    return (
        <ChakraProvider>
            <Login></Login>
            <WithSubnavigation></WithSubnavigation>
            <CallToActionWithVideo></CallToActionWithVideo>
            <ScanSec></ScanSec>
            <FAQ></FAQ>
            <SmallWithLogoLeft></SmallWithLogoLeft>
        </ChakraProvider>
    );
}

export default App;
