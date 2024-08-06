import React from "react";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";
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
