import { Box, Image as ChakraImage } from "@chakra-ui/react";

type ItemImageT = {
  alt: string;
  src: string;
};
const Image = ({ alt, src }: ItemImageT): JSX.Element => {
  if (!src) {
    return null;
  }

  return (
    <Box aspectRatio={1} boxSizing="border-box" h="100%" position="relative">
      <ChakraImage
        alt={alt}
        bgColor="#F1F1F1"
        borderRadius="14px 8px 10px 14px"
        boxSizing="border-box"
        fit="cover"
        h="100%"
        src={src}
        w="100%"
      />
    </Box>
  );
};

export default Image;
