import CTAButton from "../buttons/cta";
import { Box, Text } from "@chakra-ui/react";

const OpenBill = () => {
  return (
    <Box flexBasis="130px" h="2.5rem" maxW="30%">
      <CTAButton
        className="bg-blue"
        content={
          <Text
            fontSize="calc(min(1rem + 0.5vw, 1.5rem))"
            fontWeight={800}
            mx="10px"
          >
            주문 내역
          </Text>
        }
      />
    </Box>
  );
};

export default OpenBill;
