"use client";

// import { useQuery } from "@tanstack/react-query";
// import { loadData, URL } from "../api";

// const useGetMenuCategories = () => {
//   const getMenuCategories = async () => {
//     const response = await loadData(`${URL.menuCategories}`);
//     return response.data;
//   };
//   return useQuery({
//     queryKey: ["menuCategories"],
//     queryFn: getMenuCategories,
//   });
// };

// export default useGetMenuCategories;

import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../api/fetcher";

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
