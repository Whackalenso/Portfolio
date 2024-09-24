// import "./HomePage.css"
import HomePage from "./HomePage";
import WorkPage from "./WorkPage";
import AboutPage from "./AboutPage";
import NavButton from "./components/NavButton";
import { useState, useRef, useEffect } from "react";

// import createHistory from "history/createBrowserHistory";

// export const history = createHistory();

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const currentPageRef = useRef("home");
  // const [homePosition, setHomePosition] = useState(0);
  // const pageLayout = { about: 100, home: 0, work: -100 };
  const pageLayout = { about: 0, home: 1, work: 2 };
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
  // const homeContent = useRef(true);
  const [homeContent, setHomeContent] = useState(true);
  const [backgroundPage, setBackgroundPage] = useState();
  const bgPageRef = useRef();
  const [workFull, setWorkFull] = useState(false);
  const workFullRef = useRef();
  // const pages = {
  //   about: <AboutPage changePage={changePage} />,
  //   work: <WorkPage changePage={changePage} />,
  // };

  const [localScroll, setLocalScroll] = useState(0);
  const scrollPos = useRef(0);

  function changePage(page) {
    homeSpeed.current = currentPage == "home" ? "fast" : "slow";
    setHomeContent(currentPage == "home" || page == "home" ? true : false);
    // if (page != "home") {
    //   var interval = setInterval(() => {
    //     var top = getComputedStyle(homeRef.current).top;
    //     top = Number(top.substring(0, top.indexOf("px")));
    //     if ((top > 0 && page == "about") || (top < 0 && page == "work")) {
    //       setBackgroundPage(page);
    //       clearInterval(interval);
    //     }
    //   });
    // }
    // currentPage.current = page;
    // setCurrentPage(page);
    // setHomePosition(pageLayout[page]);
    window.scrollTo(0, pageLayout[page] * window.innerHeight);
  }

  function _setCurrentPage(page) {
    setCurrentPage(page);
    currentPageRef.current = page;
  }

  function onScroll(e) {
    scrollPos.current = Math.floor(window.scrollY / window.innerHeight * 1000) / 1000; // this returns .999 on inital scroll to home
    // if ((Math.abs(scrollPos.current - Math.round(scrollPos.current)) <= 0.5) && (scrollPos.current != Math.round(scrollPos.current))) {
    //   window.scrollTo(0, Math.round(scrollPos.current));
    //   return;
    // }
    if (scrollPos.current <= 1.0 && bgPageRef.current != "about") {
      setBackgroundPage("about");
    }
    if (scrollPos.current > 1.0 && bgPageRef.current != "work") {
      setBackgroundPage("work");
    }
    if (scrollPos.current >= 2 != workFullRef.current) {
      setWorkFull(scrollPos.current >= 2);
    }

    if (currentPageRef.current == "home") {
      if (scrollPos.current == 0) {
        _setCurrentPage("about");
      }
      if (scrollPos.current >= 2) {
        _setCurrentPage("work");
      }
    }
    if (scrollPos.current >= 1 && currentPageRef.current == "about") {
      _setCurrentPage("home");
    }
    if (scrollPos.current <= 1 && currentPageRef.current == "work") {
      _setCurrentPage("home");
    }

    setLocalScroll(scrollPos.current - pageLayout[currentPageRef.current]); // this will return a number between -1 and 1 depending on the scroll of a page
  }

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: window.innerHeight, behavior: "instant" });
    window.addEventListener("scroll", onScroll);
    window.addEventListener("scrollend", () => {
      setHomeContent(true);
    });
  }, []);

  useEffect(() => {
    bgPageRef.current = backgroundPage;
    workFullRef.current = workFull;
    currentPageRef.current = currentPage;
  }, [backgroundPage, workFull, currentPage]);

  return (
    <div className="app">
      <AboutPage changePage={changePage} visible={backgroundPage == "about"} />
      <HomePage
        innerRef={homeRef}
        speed={homeSpeed.current}
        content={homeContent}
      />
      <WorkPage
        changePage={changePage}
        visible={backgroundPage == "work"}
        full={workFull}
      />
      <div className="spacer-page"></div>
      {/* {navButtonLayout[currentPage].map((button) => button)} */}
      <NavButton
        currentPage={currentPage}
        localScroll={localScroll}
        callback={changePage}
        id={0}
      />,
      <NavButton
        currentPage={currentPage}
        localScroll={localScroll}
        callback={changePage}
        id={1}
      />
    </div>
  );
}
