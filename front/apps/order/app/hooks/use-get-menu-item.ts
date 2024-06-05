"use client";

// import { useQuery } from "@tanstack/react-query";
// import { loadData, URL } from "../api";

// const useGetMenuItem = () => {
//   const getMenuItem = async () => {
//     const response = await loadData(`${URL.menuItem}`);
//     return response.data;
//   };
//   return useQuery({
//     queryKey: ["menuItems"],
//     queryFn: getMenuItem,
//   });
// };

// export default useGetMenuItem;

import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../api/fetcher";

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
