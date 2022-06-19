import { ChakraProvider as Provider, extendTheme } from "@chakra-ui/react";

const mainColors = {
  dark: "#3E3E52",
  softGray: "#F6F7F9",
};

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Montserrat, Arial, sans-serif",
    heading: "Montserrat, Arial, sans-serif",
    mono: "Montserrat, Arial, monospace",
    logo: "Ubuntu, Arial",
  },
  colors: {
    dark: {
      200: mainColors.dark, // on click
      500: mainColors.dark, // main color
      600: mainColors.dark, // hover
      700: mainColors.dark, // active
    },
    success: "#27aa80",
    warning: "#f3cc3c",
    softGray: mainColors.softGray,
  },
  customColors: {
    dark: mainColors.dark,
  },
});

const ChakraProvider = ({ children }: { children: JSX.Element }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export { ChakraProvider };
