"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { useLayoutEffect } from "react";

const AppUIProvider = ({ children }: { children: React.ReactNode }) => {
  const CSSLazyImport = () => {
    import("../../app/styles/global.css");
    import("../../app/styles/order-page.css");
  };

  useLayoutEffect(() => {
    CSSLazyImport();
  }, []);

  return (
    <CacheProvider>
      <ChakraProvider resetCSS>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default AppUIProvider;
