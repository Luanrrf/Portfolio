"use client";
import { navigate } from "./navigate";
import style from "./navigation.module.scss";

const NavigationBar = () => {
  return (
    <section className={style.navigation}>
      <div onClick={() => navigate("Introduction")}>This navigates to Introduction.</div>
      <div onClick={() => navigate("AboutMe")}>This navigates to About Me.</div>
      <div onClick={() => navigate("Projects")}>This navigates to Projects.</div>
    </section>
  );
};

export default NavigationBar;
