import { ButtonProps } from "../../models/ButtonProps.model";
import "./Button.css";

const Button = ({ text, func }: ButtonProps) => {
  return (
    <>
      <button type="button" onClick={(e) => func(e)}>
        {text}
      </button>
    </>
  );
};

export default Button;
