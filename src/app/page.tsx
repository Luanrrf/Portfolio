import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Header from "./Header";
import Introduction from "./Introduction";
import NavigationBar from "./NavigationBar";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-24 relative">
        <NavigationBar />
        <Introduction />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
