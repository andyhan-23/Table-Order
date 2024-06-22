import React from "react";
import { Button } from "@chakra-ui/react";

type CTAButtonProps = {
  className: string;
  content: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
};

const CTAButton = ({
  className,
  content,
  disabled = false,
  onClick,
}: CTAButtonProps): JSX.Element => (
  <Button
    _hover={{ bgColor: null }}
    // boxShadow="xl"
    className={className}
    color="white"
    h="100%"
    isDisabled={disabled}
    onClick={onClick}
    p={0}
    w="100%"
  >
    {content}
  </Button>
);

export default CTAButton;
