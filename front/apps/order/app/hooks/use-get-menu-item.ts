import { useQuery } from "@tanstack/react-query";
import { loadData, URL } from "../api";

const useGetMenuItem = () => {
  const getMenuItem = async () => {
    const response = await loadData(`${URL.menuItem}`);
    return response.data;
  };
  return useQuery({
    queryKey: ["menuItems"],
    queryFn: getMenuItem,
  });
};

export default useGetMenuItem;
