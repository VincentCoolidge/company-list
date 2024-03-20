import { Button } from "./styled";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isIcon?: boolean;
}

const ButtonComponent = (props: Props) => {
  const { children, isIcon, ...otherProps } = props;

  return (
    <Button isIcon={isIcon} type="button" {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
