import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header/Header";
import { ThemeProviderT } from "@/Context/ThemeContext";
import { PaginationProvider } from "@/Context/PaginationContext";
import { SearchProvider } from "@/Context/SearchContext";
import Footer from "./Footer/Footer";
import Head from "next/head";
import { BasketProvider } from "@/Context/BasketContext";

export default function App({ Component, pageProps }) {
  return (
    <div className="max-w-[1920px] bg-[#0b052d] m-auto">
      <ThemeProviderT>
        <SearchProvider>
          <PaginationProvider>
            <ChakraProvider>
              <BasketProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
              </BasketProvider>
            </ChakraProvider>
          </PaginationProvider>
        </SearchProvider>
      </ThemeProviderT>
    </div>
  );
}
