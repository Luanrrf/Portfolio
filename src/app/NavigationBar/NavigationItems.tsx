import { Dispatch, SetStateAction } from "react";
import { navigateTo } from "./navigateTo";

import style from "./navigation.module.scss";
import AboutMeSVG from "./assets/AboutMeSVG";
import IntroductionSVG from "./assets/IntroductionSVG";
import ProjectsSVG from "./assets/ProjectsSVG";

interface INavigationItems {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
}

const NavigationItems = ({ activeLink, setActiveLink }: INavigationItems) => {

  const NAVIGATION_LINKS = [
    { id: "Introduction", label: "Introduction", icon: IntroductionSVG },
    { id: "AboutMe", label: "AboutMe", icon: AboutMeSVG },
    { id: "Projects", label: "Projects", icon: ProjectsSVG },
  ];

  return (
    <div className={style.navigationLinks}>
      {NAVIGATION_LINKS.map((link) => (
        <div
          key={link.id}
          className={`${style.navigationLink} ${
            activeLink === link.id && style.navigationLink__active
          }`}
          onClick={() => navigateTo(link.id, setActiveLink)}
          role="none"
        >
          <link.icon color="white" width="40px" height="40px" />
        </div>
      ))}
    </div>
  );
};

export default NavigationItems;
