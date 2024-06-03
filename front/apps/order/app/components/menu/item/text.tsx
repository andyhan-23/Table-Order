import { Text as ChakraText, VStack } from "@chakra-ui/react";

type ItemTextT = {
  name: string;
  price: number;
};

const Text = ({ name, price }: ItemTextT): JSX.Element => {
  return (
    <VStack alignItems="flex-start" ml="6%">
      <ChakraText fontSize="xl" fontWeight={900}>
        {name ?? ""}
      </ChakraText>
      <ChakraText fontSize="md" fontWeight={500}>
        {price}원
      </ChakraText>
    </VStack>
  );
};

export default Text;
