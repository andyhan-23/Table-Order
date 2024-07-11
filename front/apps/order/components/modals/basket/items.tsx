import { useRecoilValue } from "recoil";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { basketItemsStore } from "../../../app/stores/basket";
import {
  AddButton,
  SubtractButton,
  DeleteButton,
} from "../../buttons/edit-item-count";

type BasketItemType = {
  count: number;
  name: string;
  order: number;
  price: number;
  totalPrice: number;
};
type BasketItemsType = { [key: string]: BasketItemType } & {
  sumCount: number;
  sumPrice: number;
};

const BasketItems = () => {
  console.log("test");
  const { sumCount, sumPrice, ...basketItems }: BasketItemsType =
    useRecoilValue(basketItemsStore);

  return sumCount ? (
    Object.entries(basketItems)?.map(([id, data]: [string, BasketItemType]) => (
      <HStack
        key={id}
        borderTop="1px solid lightgray"
        justifyContent="space-between"
        px="4%"
      >
        <HStack>
          <DeleteButton id={id} />
          <VStack alignItems="flex-start" gap="0.25rem" ml="10px" py="6px">
            <Text fontSize="lg" fontWeight={900}>
              {data.name ?? ""}
            </Text>
            <Text fontSize="md" fontWeight={500}>
              {data.totalPrice || 0}원
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent="space-evenly" w="40%">
          <SubtractButton id={id} />
          <Flex flexBasis="40%" justifyContent="center">
            <Text fontSize="2xl" fontWeight={900}>
              {data.count || 0}
            </Text>
          </Flex>
          <AddButton id={id} />
        </HStack>
      </HStack>
    ))
  ) : (
    <Flex alignItems="center" justifyContent="center" my="auto" w="100%">
      <Text fontSize="2xl" fontWeight={700}>
        장바구니가 비었습니다.
      </Text>
    </Flex>
  );
};

export default BasketItems;
