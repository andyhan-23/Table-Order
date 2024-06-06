import { Modal as ChakraModal } from "@chakra-ui/modal";
import { Flex, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

type ModalType = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const AbstractModal = ({ children, isOpen, onClose }: ModalType) => {
  let maxW;
  try {
    maxW = document.body.clientWidth * 0.92;
  } catch {
    maxW = "700px";
  }
  return (
    <ChakraModal
      isCentered
      isOpen={isOpen}
      motionPreset="slideInBottom"
      onClose={onClose}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <Flex px="4%" w="100%">
        <ModalContent borderRadius="3xl" maxW={maxW} minH="300px" mx="auto">
          {children}
        </ModalContent>
      </Flex>
    </ChakraModal>
  );
};

AbstractModal.Header = Header;
AbstractModal.Body = Body;
AbstractModal.Footer = Footer;

export default AbstractModal;
