import { Stack, VStack, Text, Flex, useToast } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { menuCategoriesStore, menuItemsStore } from "../../stores/menu";
import useGetMenuItem from "../../hooks/use-get-menu-item";
import useGetMenuCategories from "../../hooks/use-get-menu-categories";
import { useEffect, useState } from "react";
import Menu from "./menu";
import MenuSkeleton from "./skeleton";
import ResetStateButton from "./reset-state-button";
import { basketItemsStore } from "../../stores/basket";
import { addItemInBasket } from "../../stores/basket";

const MenuContainer = () => {
  const [menuCategories, setMenuCategories] =
    useRecoilState(menuCategoriesStore);
  const [menuItems, setMenuItemes] = useRecoilState(menuItemsStore);
  const [isLoading, setIsLoading] = useState(true);

  const useQueryCategoriesResult = useGetMenuCategories();
  const useQueryItemsResult = useGetMenuItem();

  const basketItems = useRecoilValue(basketItemsStore);
  const addItem = useSetRecoilState(addItemInBasket);
  const toast = useToast();

  const getQuantity = (id: string) => basketItems[id]?.count ?? 0;

  console.log("아이템 데이터", useQueryItemsResult.data);
  console.log("카테고리 데이터", useQueryCategoriesResult.data);

  const activeToastID = "onAddItemClick-Toast";
  const onAddItemClick = (id: string) => {
    addItem(id);
    if (toast.isActive(activeToastID)) {
      toast.update(activeToastID, {
        title: "장바구니에 메뉴를 더 담았어요.",
        description: "하단의 장바구니 보기를 눌러 확인해주세요.",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
        containerStyle: {
          marginTop: "7.5vh",
        },
      });
      return;
    }
    toast.closeAll();
    toast({
      title: "장바구니에 메뉴를 담았어요.",
      description: "하단의 장바구니 보기를 눌러 확인해주세요.",
      status: "success",
      duration: 1500,
      isClosable: true,
      id: activeToastID,
      position: "top",
      containerStyle: {
        marginTop: "7.5vh",
      },
    });
  };

  useEffect(() => {
    if (useQueryCategoriesResult?.data)
      setMenuCategories(useQueryCategoriesResult.data);
  }, [useQueryCategoriesResult]);

  useEffect(() => {
    if (useQueryItemsResult?.data) setMenuItemes(useQueryItemsResult.data);
  }, [useQueryItemsResult]);

  useEffect(() => {
    if (
      !(useQueryCategoriesResult?.isLoading || useQueryItemsResult?.isLoading)
    )
      setIsLoading(false);
  }, [useQueryCategoriesResult, useQueryItemsResult]);

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
                  <Menu.ButtonArea
                    onClick={() => onAddItemClick(menuId)}
                    quantity={getQuantity(menuId)}
                  />
                </Menu>
              ))}
            </VStack>
          </VStack>
        ))}
      </Stack>
      <ResetStateButton />
    </VStack>
  );
};

export default MenuContainer;
