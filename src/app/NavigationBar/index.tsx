"use client";
import NavigationItems from "./NavigationItems";
import style from "./navigation.module.scss";
import { useEffect, useState } from "react";

const NavigationBar = () => {

  const [activeLink, setActiveLink] = useState("Introduction");

  useEffect(() => {
    const handleScroll = () => {
      const introduction = document.getElementById("Introduction");
      const aboutMe = document.getElementById("AboutMe");
      const projects = document.getElementById("Projects");

      if (introduction && aboutMe && projects) {
        const introductionOffset = introduction.offsetTop;
        const aboutMeOffset = aboutMe.offsetTop;

        const difference = (aboutMeOffset - introductionOffset) / 5;

        const scrollY = window.scrollY;

        if (scrollY < introductionOffset + difference) {
          setActiveLink("Introduction");
        } else if (scrollY < aboutMeOffset + difference) {
          setActiveLink("AboutMe");
        } else {
          setActiveLink("Projects");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={style.navigation}>
      <div className={style.navigationLinks}>
        <NavigationItems activeLink={activeLink} setActiveLink={setActiveLink}/>
      </div>
      <div className={style.navigation__bg}>
        <span className={style.navigation__bg__circle__top} />
        <span className={style.navigation__bg__circle__bottom} />
      </div>
    </section>
  );
};

export default NavigationBar;
