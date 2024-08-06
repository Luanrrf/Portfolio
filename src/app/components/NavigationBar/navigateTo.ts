import { Dispatch, SetStateAction } from "react";

export function navigateTo(id: string, setActiveLink: Dispatch<SetStateAction<string>>) {
  const element = document.getElementById(id);
  const screenTotalHeight = window.screen.height;

  if (element) {
    setActiveLink(id);
    const actualOffset = window.scrollY;
    const offsetTop = element.offsetTop - ((screenTotalHeight / 2 - element.offsetHeight / 2) - 50);
    
    const difference = Math.abs(actualOffset - offsetTop);

    for (let i = 0; i < 60; i++) {
      setTimeout(() => {
        window.scrollTo({
          top:
            actualOffset < offsetTop
              ? actualOffset + (difference / 60) * i
              : actualOffset - (difference / 60) * i,
        });
      }, i * 10);
    }
  }
}
