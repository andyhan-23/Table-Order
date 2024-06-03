"use client";

import { Stack } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Suspense } from "react";
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
