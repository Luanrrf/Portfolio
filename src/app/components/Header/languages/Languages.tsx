"use client";

import Image from "next/image";
import { LanguageProps } from "./types";
import { AllLanguages } from "./AllLanguages";
import style from "./languages.module.scss";
import { useState } from "react";
import { changeLanguage } from "./changeLanguage";

const Languages = ({ allLanguages }: { allLanguages?: LanguageProps[] }) => {
  const [actualLanguage, setActualLanguage] = useState<string>(
    AllLanguages[0].label
  );
  if (!allLanguages) allLanguages = AllLanguages;

  return (
    <div className={style.languages}>
      {allLanguages &&
        allLanguages.map((language) => (
          <button
            key={language.label}
            onClick={() => changeLanguage(language.label, setActualLanguage)}
            className={`${style.language} ${
              language.label === actualLanguage && style.selected
            }`}
          >
            <Image
              src={language.urlImage}
              alt={language.label}
              width={30}
              height={30}
            />
          </button>
        ))}
    </div>
  );
};

export default Languages;
