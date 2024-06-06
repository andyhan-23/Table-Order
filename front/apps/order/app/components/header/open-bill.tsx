import CTAButton from "../buttons/cta";
import { Box, Text } from "@chakra-ui/react";
import useModal from "../../hooks/use-modal";

const OpenBill = () => {
  const { onOpen } = useModal("bill");
  return (
    <Box flexBasis="130px" h="2.5rem" maxW="30%">
      <CTAButton
        className="bg-green"
        content={
          <Text
            fontSize="calc(min(1rem + 0.5vw, 1.5rem))"
            fontWeight={800}
            mx="10px"
          >
            주문 내역
          </Text>
        }
        onClick={onOpen}
      />
    </Box>
  );
};

export default OpenBill;
