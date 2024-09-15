// import "./HomePage.css"
import HomePage from "./HomePage";
import WorkPage from "./WorkPage";
import AboutPage from "./AboutPage";
import NavButton from "./components/NavButton";
import { useState, useRef } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const pageLayout = { about: "100vh", home: "0", work: "-100vh" };
  const navButtonLayout = {
    about: [
      <NavButton
        text="home"
        value="home"
        side="bottom"
        callback={changePage}
        key={0}
      />,
      <NavButton
        text="my work"
        value="work"
        side="bottom offset"
        callback={changePage}
        key={2}
      />,
    ],
    home: [
      <NavButton
        text="about me"
        value="about"
        side="top"
        callback={changePage}
        key={1}
      />,
      <NavButton
        text="my work"
        value="work"
        side="bottom"
        callback={changePage}
        key={2}
      />,
    ],
    work: [
      <NavButton
        text="home"
        value="home"
        side="top"
        callback={changePage}
        key={3}
      />,
      <NavButton
        text="about me"
        value="about"
        side="top offset"
        callback={changePage}
        key={1}
      />,
    ],
  };

  const homeRef = useRef(null);
  const homeSpeed = useRef("fast");
  const homeContent = useRef(true);
  const [backgroundPage, setBackgroundPage] = useState("about");
  // const pages = {
  //   about: <AboutPage changePage={changePage} />,
  //   work: <WorkPage changePage={changePage} />,
  // };

  function changePage(page) {
    homeSpeed.current = currentPage == "home" ? "fast" : "slow";
    homeContent.current =
      currentPage == "home" || page == "home" ? true : false;
    if (page != "home") {
      var interval = setInterval(() => {
        var top = getComputedStyle(homeRef.current).top;
        top = Number(top.substring(0, top.indexOf("px")));
        if ((top > 0 && page == "about") || (top < 0 && page == "work")) {
          setBackgroundPage(page);
          clearInterval(interval);
        }
      });
    }
    setCurrentPage(page);
  }

  return (
    <div>
      <AboutPage changePage={changePage} visible={backgroundPage == "about"} />
      ,
      <WorkPage changePage={changePage} visible={backgroundPage == "work"} />
      ,
      <HomePage
        innerRef={homeRef}
        top={pageLayout[currentPage]}
        speed={homeSpeed.current}
        content={homeContent.current}
      />
      {navButtonLayout[currentPage].map((button) => button)}
    </div>
  );
}
