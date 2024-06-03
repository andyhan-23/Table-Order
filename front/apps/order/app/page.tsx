"use client";

import { Stack } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Suspense } from "react";
import MenuSkeleton from "./components/menu/skeleton";
const Page: () => JSX.Element = () => {
  return (
    <>
      <Stack position="relative">
        <Header />
        <Suspense fallback={<MenuSkeleton />}></Suspense>
      </Stack>
    </>
  );
};

export default Page;
