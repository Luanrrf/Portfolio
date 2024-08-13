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
        <h1 className="text-6xl leading-tight">
          {introductionTexts?.["Title"][0]}
          <br />
          {introductionTexts?.["Title"][1]}
          <span className={style.name}>&nbsp;Luan Ribeiro</span>
        </h1>

        <div className="text-2xl mt-8">
          {introductionTexts.Subtitle.map((subtitle) => (
            <p key={subtitle}>{subtitle}</p>
          ))}
        </div>
        <div className="text-1xl">
          {introductionTexts.Description.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
