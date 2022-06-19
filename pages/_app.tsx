import type { AppProps } from "next/app";
import { ChakraProvider } from "../providers/chakra";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
