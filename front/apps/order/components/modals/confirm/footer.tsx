import { useRecoilValue } from "recoil";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import CTAButton from "../../../../../packages/ui/button/cta-button";
import { basketItemsStore } from "../../../app/stores/basket";

type FooterType = {
  onClose: () => void;
  onConfirm: () => void;
};
const Footer = ({ onClose, onConfirm }: FooterType) => {
  const { sumPrice, sumCount } = useRecoilValue(basketItemsStore);
  return (
    <VStack
      alignItems="center"
      borderTop="4px lightgray solid"
      gap={0}
      h="0"
      justifyContent="center"
      minH="22vh"
      pb="4vh"
      pt="1vh"
      w="100%"
    >
      <Flex
        alignItems="center"
        flexGrow={1}
        justifyContent="space-between"
        px="4%"
        w="100%"
      >
        <Flex flexBasis="30%">
          <Text fontSize="2xl" fontWeight={800}>
            합계
          </Text>
        </Flex>
        <Flex alignItems="center" flexBasis="10%" justifyContent="flex-end">
          <Text fontSize="md" fontWeight={800}>
            {`${sumCount}개`}
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          flexBasis="30%"
          gap={0}
          justifyContent="flex-end"
        >
          <Text fontSize="lg" fontWeight={800}>
            {sumPrice || 0}원
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" flexGrow={1} my="1vh">
        <Text fontSize="xl" fontWeight={700}>
          이렇게 주문하시겠어요?
        </Text>
      </Flex>
      <HStack alignItems="center" flexGrow={1} minH="50px" w="100%">
        <Flex h="80%" px="10%" w="50%">
          <CTAButton
            className="bg-skyblue"
            content={
              <Text fontSize="xl" fontWeight={700} px="2.5vw">
                돌아가기
              </Text>
            }
            onClick={onClose}
          />
        </Flex>
        <Flex h="85%" px="10%" w="50%">
          <CTAButton
            className="bg-red"
            content={
              <Text fontSize="2xl" fontWeight={700} px="2.5vw">
                주문하기
              </Text>
            }
            onClick={onConfirm}
          />
        </Flex>
      </HStack>
    </VStack>
  );
};

export default Footer;
