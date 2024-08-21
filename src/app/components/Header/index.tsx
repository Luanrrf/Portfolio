import SocialMedia from "../SocialMedia";
import style from "./header.module.scss";
import Languages from "./languages/Languages";
import ThemeButton from "./theme/ThemeButton";

const Header = () => {

  return (
    <header
      className={style.header}
      style={{ background: "var(--color-palette-1)" }}
    >
      <ThemeButton />
      <SocialMedia />
      <Languages />
    </header>
  );
};

export default Header;
