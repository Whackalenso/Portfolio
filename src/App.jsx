import HomePage from "./HomePage";
import WorkPage from "./WorkPage";
import AboutPage from "./AboutPage";
import NavButton from "./components/NavButton";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const currentPageRef = useRef("home");
  const pageLayout = { about: 0, home: 1, work: 2 };

  const homeRef = useRef(null);
  const homeSpeed = useRef("fast");
  const [homeContent, setHomeContent] = useState(true);
  const [backgroundPage, setBackgroundPage] = useState();
  const bgPageRef = useRef();
  const [workFull, setWorkFull] = useState(false);
  const workFullRef = useRef();

  const [localScroll, setLocalScroll] = useState(0);
  const scrollPos = useRef(0);
  const scrollInterval = useRef();

  function changePage(page) {
    homeSpeed.current = currentPage == "home" ? "fast" : "slow";
    setHomeContent(
      currentPage == "home" || page == "home" || page == currentPage
    );
    window.scrollTo(0, pageLayout[page] * window.innerHeight);
  }

  function _setCurrentPage(page) {
    setCurrentPage(page);
    currentPageRef.current = page;
  }

  function onScroll(e) {
    scrollPos.current =
      Math.floor((window.scrollY / window.innerHeight) * 1000) / 1000; // this returns .999 on inital scroll to home

    clearInterval(scrollInterval.current);
    if (
      Math.abs(scrollPos.current - Math.round(scrollPos.current)) < 0.2 &&
      scrollPos.current != Math.round(scrollPos.current) &&
      scrollPos.current < 2
    ) {
      scrollInterval.current = setInterval(() => {
        window.scrollTo(0, Math.round(scrollPos.current) * window.innerHeight);
      }, 300);
    }

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
        changePage={changePage}
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
      />
      ,
      <NavButton
        currentPage={currentPage}
        localScroll={localScroll}
        callback={changePage}
        id={1}
      />
    </div>
  );
}
