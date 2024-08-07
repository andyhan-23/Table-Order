import { Flex, Text as ChakraText, HStack, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import Text from "./text";
import Image from "./image";
import { menuDetailModalStore } from "../../../../app/stores/modal";
import { AddButton, SubtractButton } from "./button";

type MenuDetailItemPropsType = {
  detail: string;
  imgSrc: string;
  name: string;
  price: number;
};
const Item = ({ detail, imgSrc, name, price }: MenuDetailItemPropsType) => {
  const { quantity } = useRecoilValue(menuDetailModalStore);
  return (
    <VStack w="100%">
      <HStack
        aspectRatio={2.2}
        justifyContent="space-between"
        mt="2vh"
        px="4%"
        w="100%"
      >
        <Flex h="100%" mr="2%" mt="2vh" w="100%">
          <Text detail={detail} name={name} price={price} />
        </Flex>
        <Flex h="100%">
          <Image alt={name} src={imgSrc} />
        </Flex>
      </HStack>
      <HStack
        h="4vh"
        justifyContent="space-evenly"
        mb="2.5vh"
        mt="1vh"
        w="100%"
      >
        <ChakraText flexGrow="2" fontSize="2xl" fontWeight={900} pl="10%">
          수량
        </ChakraText>
        <Flex flexGrow="2" justifyContent="space-evenly">
          <SubtractButton />
          <ChakraText fontSize="2xl" fontWeight={900}>
            {quantity}
          </ChakraText>
          <AddButton />
        </Flex>
      </HStack>
    </VStack>
  );
};

export default Item;
