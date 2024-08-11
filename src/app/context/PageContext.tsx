"use client";
import { createContext, useMemo, useState } from "react";
import { ContextInsideProps, ContextMessages, ContextProps } from "./types";

const PageContext = createContext({} as ContextProps);

const PageProvider = ({
  lang,
  messages,
  children,
}: {
  lang: string;
  messages: ContextMessages;
  children: React.ReactNode;
}) => {

  const [info, setInfo] = useState<ContextInsideProps>({
    language: lang ?? "pt-br",
    messages,
  });

  const memoizedProps = useMemo(() => ({ info, setInfo }), [info, setInfo]);

  return (
    <PageContext.Provider value={memoizedProps}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
