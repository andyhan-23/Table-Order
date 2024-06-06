import { ModalBody } from "@chakra-ui/react";

const Body = ({ content }: { content: JSX.Element }) => {
  return (
    <ModalBody maxH="35vh" p={0}>
      {content}
    </ModalBody>
  );
};

export default Body;