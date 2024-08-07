import { useRecoilValue } from "recoil";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { orderHistoryStore } from "../../../app/stores/history";

const BillItems = () => {
  const { sumPrice, ...basketItems } = useRecoilValue(orderHistoryStore);
  const sortedBasketItems = Object.values(basketItems).sort(
    (a, b) => a.order - b.order
  );
  return sumPrice ? (
    Object.entries(sortedBasketItems)?.map(([id, data]) => (
      <HStack
        key={id}
        borderTop="1px solid lightgray"
        justifyContent="space-between"
        px="4%"
        py="10px"
        w="100%"
      >
        <VStack alignItems="flex-start" flexBasis="40%" gap={0}>
          <Text fontSize="lg" fontWeight={900}>
            {data.name}
          </Text>
          <Text fontSize="md" fontWeight={500}>
            {data.price}원
          </Text>
        </VStack>
        <Flex alignItems="center" flexBasis="10%" justifyContent="flex-end">
          <Text fontSize="md" fontWeight={700}>
            {data.count}개
          </Text>
        </Flex>
        <VStack alignItems="flex-end" flexBasis="40%" gap={0}>
          <Text fontSize="lg" fontWeight={700}>
            {data.totalPrice}원
          </Text>
        </VStack>
      </HStack>
    ))
  ) : (
    <Flex alignItems="center" justifyContent="center" my="30px">
      <Text fontSize="lg" fontWeight={700}>
        아직 주문하신 내역이 없어요.
      </Text>
    </Flex>
  );
};

export default BillItems;
