import { Button } from "@chakra-ui/react";

interface CTAButtonPropsType {
  className: string;
  content: JSX.Element;
  disabled?: boolean;
  onClick: () => void;
}

const CTAButton = ({
  className,
  content,
  disabled = false,
  onClick,
}: CTAButtonPropsType): JSX.Element => {
  return (
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
};

export default CTAButton;
