import { HeaderProps } from "../../models/HeaderProps.model";
import "./Header.css";

const Header = ({ size, text }: HeaderProps) => {
  if (size === 1) {
    return <h1>{text}</h1>;
  }
  if (size === 2) {
    return <h2>{text}</h2>;
  }
  if (size === 3) {
    return <h3>{text}</h3>;
  }
  if (size === 4) {
    return <h4>{text}</h4>;
  }
  if (size === 5) {
    return <h5>{text}</h5>;
  }
  if (size === 6) {
    return <h6>{text}</h6>;
  }
};

export default Header;
