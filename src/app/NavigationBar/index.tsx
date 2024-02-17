"use client";
import style from "./navigation.module.scss";

import AboutMeSVG from "./assets/AboutMeSVG";
import IntroductionSVG from "./assets/IntroductionSVG";
import ProjectsSVG from "./assets/ProjectsSVG";
import { navigateTo } from "./navigateTo";

const NavigationBar = () => {
  return (
    <section className={style.navigation}>
      <div className={style.navigationLinks}>
        <div
          className={style.navigationLink}
          onClick={() => {
            navigateTo("Introduction");
          }}
          role="none"
        >
          <IntroductionSVG color="white" width="40px" height="40px" />
        </div>
        <div
          className={style.navigationLink}
          onClick={() => {
            navigateTo("AboutMe");
          }}
          role="none"
        >
          <AboutMeSVG color="white" width="40px" height="40px" />
        </div>
        <div
          className={style.navigationLink}
          onClick={() => {
            navigateTo("Projects");
          }}
          role="none"
        >
          <ProjectsSVG color="white" width="40px" height="40px" />
        </div>
      </div>
      <div className={style.navigation__bg}>
        <span className={style.navigation__bg__circle__top} />
        <span className={style.navigation__bg__circle__bottom} />
      </div>
    </section>
  );
};

export default NavigationBar;
