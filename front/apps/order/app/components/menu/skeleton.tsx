import { Skeleton, VStack } from "@chakra-ui/react";

const MenuSkeleton = () => (
  <VStack
    alignItems="center"
    justifyContent="center"
    maxW="560px"
    mb={12}
    mx="auto"
    px="2%"
    w="100%"
  >
    {[...Array(10).keys()].map((index: number) => (
      <Skeleton
        key={`skeleton-${index}`}
        borderRadius="8px"
        h="24"
        marginBottom="6px"
        w="94%"
      />
    ))}
  </VStack>
);

export default MenuSkeleton;
