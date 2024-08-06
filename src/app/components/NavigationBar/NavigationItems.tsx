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

  //TODO: Colocar pra variar de acordo com o tema
  const svgColor = "#fff";

  const NAVIGATION_LINKS = [
    { id: "Introduction", label: "Introduction", Icon: IntroductionSVG },
    { id: "AboutMe", label: "AboutMe", Icon: AboutMeSVG },
    { id: "Projects", label: "Projects", Icon: ProjectsSVG },
  ];

  return (
    <div className={style.navigationLinks}>
      {NAVIGATION_LINKS.map(({id, Icon}) => (
        <div
          key={id}
          className={`${style.navigationLink} ${
            activeLink === id && style.navigationLink__active
          }`}
          onClick={() => navigateTo(id, setActiveLink)}
          role="none"
        >
          <Icon color={svgColor} width="40px" height="40px" />
        </div>
      ))}
    </div>
  );
};

export default NavigationItems;
