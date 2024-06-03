import { HStack, Text } from "@chakra-ui/react";
import { CallStaff } from ".";
import OpenBill from "./open-bill";

export const Header = () => {
  return (
    <HStack
      alignItems="center"
      bgColor="white"
      gap={0}
      h="7vh"
      justifyContent="space-between"
      position="sticky"
      px="4%"
      top={0}
      w="100%"
      zIndex={2}
    >
      <CallStaff />
      <Text
        fontSize="calc(min(1.5rem + 1vw, 2rem))"
        fontWeight={900}
        letterSpacing="0.5rem"
        overflow="hidden"
        whiteSpace="nowrap"
      >
        메뉴판
      </Text>
      <OpenBill />
    </HStack>
  );
};

export default Header;
