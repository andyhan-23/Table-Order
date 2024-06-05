import {
  Stack,
  VStack,
  Text,
  Flex,
  useToast,
  useMenuItem,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { menuCategoriesStore, menuItemsScore } from "../../stores/menu";
import useGetMenuItem from "../../hooks/use-get-menu-item";
import useGetMenuCategories from "../../hooks/use-get-menu-categories";
import { useEffect, useState } from "react";
import Menu from "./menu";
import MenuSkeleton from "./skeleton";

const MenuContainer = () => {
  const [menuCategories, setMenuCategories] =
    useRecoilState(menuCategoriesStore);
  const [menuItems, setMenuItemes] = useRecoilState(menuItemsScore);
  const [isLoading, setIsLoading] = useState(true);
  const { data: menuCategoriesData, isLoading: menuCategoreisLoading } =
    useGetMenuCategories();
  const { data: menuItemsData, isLoading: menuItemsLoading } = useGetMenuItem();

  useEffect(() => {
    if (menuCategoriesData) setMenuCategories(menuCategoriesData);
  }, [menuCategoriesData]);

  useEffect(() => {
    if (menuItemsData) setMenuItemes(menuItemsData);
  }, [menuItemsData]);

  useEffect(() => {
    if (!(menuCategoreisLoading || menuItemsLoading)) setIsLoading(false);
  }, [menuCategoreisLoading, menuItemsLoading]);

  return isLoading ? (
    <MenuSkeleton />
  ) : (
    <VStack alignItems="center" justifyContent="center" mb="1rem">
      <Stack alignItems="center" gap="2vh" w="100%">
        {Object.entries(menuCategories)?.map(([category, menuIds]) => (
          <VStack key={category} bgColor="white" position="relative" w="100%">
            <Flex
              bgColor="white"
              borderBottom="4px lightgray solid"
              h="100%"
              justifyContent="flex-start"
              pl="6%"
              position="sticky"
              py="1vh"
              top="7vh"
              w="100%"
              zIndex={1}
            >
              <Text fontSize="2xl" fontWeight={900}>
                {category}
              </Text>
            </Flex>
            <VStack my="2vh" w="100%">
              {Object.values(menuIds).map((menuId: string) => (
                <Menu key={menuId}>
                  <Menu.ItemArea {...{ id: menuId, ...menuItems[menuId] }} />
                </Menu>
              ))}
            </VStack>
          </VStack>
        ))}
      </Stack>
    </VStack>
  );
};

export default MenuContainer;
