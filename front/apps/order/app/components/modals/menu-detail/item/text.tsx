import { Text as ChakraText, VStack } from "@chakra-ui/react";

type MenuDetailTextType = {
  detail: string;
  name: string;
  price: number;
};
const Text = ({ detail, name, price }: MenuDetailTextType) => {
  return (
    <VStack alignItems="flex-start" gap={0} ml="4%" w="100%">
      <ChakraText fontSize="2xl" fontWeight={900}>
        {name}
      </ChakraText>
      <ChakraText fontSize="lg" fontWeight={700}>
        {price}원
      </ChakraText>
      <ChakraText fontSize="md" fontWeight={600} mt="1rem" wordBreak="keep-all">
        {detail}
      </ChakraText>
    </VStack>
  );
};

export default Text;
