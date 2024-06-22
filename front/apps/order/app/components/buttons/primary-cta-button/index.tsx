import { Flex, HStack, Text } from "@chakra-ui/react";
import CTAButton from "../../../../../../packages/ui/button/cta-button";
import NumberInCircle from "../../../../../../packages/ui/number-in-circle";

type PrimaryCTAButtonType = {
  className?: string;
  count?: number;
  onClick: () => void;
  price: number;
  text: string;
};

const PrimaryCTAButton = ({
  className = "bg-red",
  count = 0,
  onClick,
  price,
  text,
}: PrimaryCTAButtonType) => {
  const countElement = count ? <NumberInCircle number={count} /> : null;

  const content = (
    <HStack h="70%" justifyContent="space-between" px="5%" w="100%">
      <Flex flexBasis={0} flexGrow={1} h="100%" justifyContent="flex-start">
        {countElement}
      </Flex>
      <Flex
        alignItems="center"
        flexBasis={0}
        flexGrow={1}
        justifyContent="center"
      >
        <Text fontSize="xl" fontWeight={900}>
          {text}
        </Text>
      </Flex>
      <Flex flexBasis={0} flexGrow={1} justifyContent="flex-end">
        <Text fontSize="md" fontWeight="extrabold">
          {price}원
        </Text>
      </Flex>
    </HStack>
  );

  return (
    <CTAButton className={className} content={content} onClick={onClick} />
  );
};

export default PrimaryCTAButton;
