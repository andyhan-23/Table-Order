"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  );
};

export default DataProvider;
