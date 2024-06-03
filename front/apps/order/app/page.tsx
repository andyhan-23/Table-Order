"use client";

import { Stack } from "@chakra-ui/react";
import { Header } from "./components/header";
const Page: () => JSX.Element = () => {
  return (
    <>
      <Stack position="relative">
        <Header />
      </Stack>
    </>
  );
};

export default Page;
