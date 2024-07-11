import { Box, Text, useToast, ToastId } from "@chakra-ui/react";
import { useRef } from "react";
import CTAButton from "../../../../packages/ui/button/cta-button"

const CallStaff = () => {
  console.log("test");
  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);
  const onClick = () => {
    if (toastIdRef.current && toast.isActive(toastIdRef.current)) {
      toast.update(toastIdRef.current, {
        colorScheme: "gray",
        containerStyle: {
          marginTop: "7.5vh",
        },
        duration: 1200,
        isClosable: true,
        position: "top",
        status: "warning",
        title: "잠시만 기다려주세요!",
      });
    } else {
      toast.closeAll();
      toastIdRef.current = toast({
        colorScheme: "red",
        containerStyle: {
          marginTop: "7.5vh",
        },
        duration: 1000,
        isClosable: true,
        position: "top",
        status: "warning",
        title: "직원을 호출했어요!",
      });
    }
  };
  return (
    <Box flexBasis="130px" h="2.5rem" maxW="30%">
      <CTAButton
        className="bg-red"
        content={
          <Text
            fontSize="calc(min(1rem + 0.5vw, 1.5rem))"
            fontWeight={800}
            mx="10px"
          >
            직원 호출
          </Text>
        }
        onClick={onClick}
      />
    </Box>
  );
};

export default CallStaff;
