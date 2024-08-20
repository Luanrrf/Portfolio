"use client";

import { PageContext } from "@/app/context/PageContext";
import style from "./introduction.module.scss";
import { useContext } from "react";

const Introduction = () => {
  const { info } = useContext(PageContext);

  const introductionTexts = info?.messages?.["Introduction"];

  if (!introductionTexts) {
    return null;
  }

  return (
    <section className={`${style.introduction} Screen`} id="Introduction">
      <div className={style.introductionTexts}>
        <h2 className="text-2xl lg:text-6xl leading-tight lg:leading-normal">
          {introductionTexts?.["Title"][0]}
        </h2>
        <h1 className="text-2xl lg:text-6xl leading-tight lg:leading-normal">
          {introductionTexts?.["Title"][1]}&nbsp;
          <span className={`${style.name} ${style.typeWriter}`} id="typewriter">
            Luan Ribeiro
          </span>
        </h1>

        <div className={`${style.introductionSubtitle} text-1xl lg:text-3xl leading-normal`}>
          {introductionTexts.Subtitle.map((subtitle) => (
            <p key={subtitle}>{subtitle}</p>
          ))}
        </div>
        <div className="text-1xl lg:text-2xl leading-relaxed mt-4 lg:mt-8">
          {introductionTexts.Description.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
