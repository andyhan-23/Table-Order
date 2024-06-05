import { useQuery } from "@tanstack/react-query";
import { loadData, URL } from "../api";

const useGetMenuCategories = () => {
  const getMenuCategories = async () => {
    const response = await loadData(`${URL.menuCategories}`);
    return response.data;
  };
  return useQuery({
    queryKey: ["menuCategories"],
    queryFn: getMenuCategories,
  });
};

export default useGetMenuCategories;
