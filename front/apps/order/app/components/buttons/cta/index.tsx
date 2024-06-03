import { Button } from "@chakra-ui/react";

interface CTAButtonProps {
  className: string;
  content: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
}

const CTAButton = ({
  className,
  content,
  disabled = false,
  onClick,
}: CTAButtonProps): JSX.Element => {
  return (
    <Button
      _hover={{ bgColor: null }}
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
};

export default CTAButton;
