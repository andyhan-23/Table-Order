"use client";

import { useQuery } from "@tanstack/react-query";
import fetcher from "../api/fetcher";

const useMenuCategories = () => {
  try {
    return useQuery({
      queryKey: ["menu-categories"],
      queryFn: () => fetcher("/categories"),
      staleTime: 1000 * 60 * 10,
    });
  } catch {
    return null;
  }
};

export default useMenuCategories;
