"use client";

import { PageContext } from "@/app/context/PageContext";
import style from "./introduction.module.scss";
import { useContext } from "react";

const Introduction = () => {
  const { info } = useContext(PageContext);

  const introductionTexts = info?.messages?.["Introduction"];

  if(!introductionTexts) {
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

        <p className="text-2xl mt-8">{introductionTexts.Subtitle.toString()}</p>
        <p className="text-2xl">{introductionTexts.Description.toString()}</p>
      </div>
    </section>
  );
};

export default Introduction;
