import style from "./header.module.scss";
import ThemeButton from "./theme/ThemeButton";

const Header = () => {
    return (
      <header className={style.header} style={{background: "var(--color-palette-1)"}}>
        <ThemeButton />
      </header>
    );
  };
  
  export default Header;
  