"use client";

import { useQuery } from "@tanstack/react-query";
import fetcher from "../api/fetcher";

const useMenuItems = () => {
  try {
    return useQuery({
      queryKey: ["menu-items"],
      queryFn: () => fetcher("/item"),
      staleTime: 1000 * 60 * 10,
    });
  } catch {
    return null;
  }
};

export default useMenuItems;
