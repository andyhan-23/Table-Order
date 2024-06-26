import { Box, Image as ChakraImage } from "@chakra-ui/react";

type ImagePropsType = {
  alt: string;
  src: string;
};

const Image = ({ alt, src }: ImagePropsType) =>
  src ? (
    <Box aspectRatio={1} h="100%" maxH="20vh" position="relative">
      <ChakraImage
        alt={alt}
        borderRadius="12px"
        fit="cover"
        h="100%"
        src={src}
        w="100%"
      />
      {/* <NextImage alt={alt} borderRadius="0 12px 12px 0" fill sizes="(max-height: 600px) 25vw" src={src} /> */}
    </Box>
  ) : null;

export default Image;
