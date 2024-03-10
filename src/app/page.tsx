import React from "react";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Header from "./Header";
import Introduction from "./Introduction";
import NavigationBar from "./NavigationBar";
import Projects from "./Projects";
import style from "./home.module.scss";

export default function Home() {

  return (
    <>
      <Header />
      <NavigationBar />
      <main
        className={`dark flex min-h-screen flex-col p-24 pl-48 relative gap-12 ${style.mainSection}`}
      >
        <Introduction />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
