import Logo from "../assets/logo.png";
import "./header.css";
export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <a href="/">Home </a>
    </header>
  );
};
