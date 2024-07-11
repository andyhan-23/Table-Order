import { useSetRecoilState } from "recoil";
import { Stack, Text, useToast } from "@chakra-ui/react";
import CTAButton from "../../../../packages/ui/button/cta-button";
import { basketItemsStore } from  "../../app/stores/basket"
import { orderHistoryStore } from "../../app/stores/history";

const ResetStateButton = () => {
  const setBasketItems = useSetRecoilState(basketItemsStore);
  const setOrderHistory = useSetRecoilState(orderHistoryStore);
  const toast = useToast();
  const resetBasket = () => {
    setBasketItems({ sumCount: 0, sumPrice: 0 });
    setOrderHistory({ sumPrice: 0 });
    toast({
      position: "top",
      containerStyle: {
        marginTop: "7.5vh",
      },
      duration: 1000,
      isClosable: true,
      status: "success",
      title: "초기화 되었습니다.",
    });
  };

  return (
    <Stack alignItems="center" h="5vh" mt="2vh" w="92%">
      <CTAButton
        className="bg-skyblue"
        content={
          <Text fontSize="xl" fontWeight="extrabold">
            초기화 (FOR DEVELOP)
          </Text>
        }
        onClick={resetBasket}
      />
    </Stack>
  );
};

export default ResetStateButton;
