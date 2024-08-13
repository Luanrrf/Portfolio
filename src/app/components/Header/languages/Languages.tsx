"use client";

import Image from "next/image";
import style from "./languages.module.scss";
import { useContext } from "react";
import { setCookie } from "cookies-next";
import { PageContext } from "@/app/context/PageContext";
import { pageLanguages } from "./pageLanguages";
import getMessages from "@/app/utils/getMessages";

const Languages = () => {
  const { info, setInfo } = useContext(PageContext);

  async function changeLanguage(acronym: string) {
    const allMessages = await getMessages(acronym);
    setInfo({
      language: acronym,
      messages: allMessages,
    });
    setCookie("lang", acronym);
    setCookie("messages", JSON.stringify(allMessages));
  }

  return (
    <div className={style.languages}>
      {pageLanguages &&
        pageLanguages.map((language) => (
          <button
            key={language.label}
            onClick={() => changeLanguage(language.acronym)}
            className={`${style.language} ${
              language.acronym === info.language ? style.selected : ""
            }`}
          >
            <Image
              src={language.urlImage}
              alt={`${language.label}-flag`}
              width={30}
              height={30}
              loading="eager"
            />
          </button>
        ))}
    </div>
  );
};

export default Languages;
