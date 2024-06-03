import { HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

const Menu = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <HStack
      alignItems="center"
      backgroundColor="white"
      border="1px solid lightgray"
      borderRadius="8px"
      gap={0}
      h="24"
      marginBottom="6px"
      mx="auto"
      w="92%"
    >
      {children}
    </HStack>
  );
};

export { Menu };
