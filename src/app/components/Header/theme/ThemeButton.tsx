"use client";

import { useTheme } from "next-themes";
import style from "./themeButton.module.scss";
import DarkThemeSVG from "./assets/DarkThemeSVG";
import LightThemeSVG from "./assets/LightThemeSVG";
import "../../../../styles/tokens.scss";

const ThemeButton = () => {  
  const { theme, setTheme } = useTheme();

  const isDarkTheme = (theme !== "light");

  function changeTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className={style.themeGroup}>
      <button
        onClick={changeTheme}
        className={`${isDarkTheme ? style.dark : style.light} ${
          style.themeButton
        }`}
        aria-label="Theme Button"
      >
        <DarkThemeSVG color={"#fff"} width={"20px"} height={"20px"} />
        <LightThemeSVG color={"#000"} width={"20px"} height={"20px"} />
        <span className={style.ball} />
      </button>
    </div>
  );
};

export default ThemeButton;
