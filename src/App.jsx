// import "./HomePage.css"
import HomePage from "./HomePage";
import WorkPage from "./WorkPage";
import AboutPage from "./AboutPage";
import NavButton from "./components/NavButton";
import { useState, useRef, useEffect } from "react";

// import createHistory from "history/createBrowserHistory";

// export const history = createHistory();

export default function App() {
  // const [currentPage, setCurrentPage] = useState("home");
  const currentPage = useRef("home");
  // const [homePosition, setHomePosition] = useState(0);
  // const pageLayout = { about: 100, home: 0, work: -100 };
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
  const [backgroundPage, setBackgroundPage] = useState();
  const bgPageRef = useRef();
  const [workFull, setWorkFull] = useState(false);
  const workFullRef = useRef();
  // const pages = {
  //   about: <AboutPage changePage={changePage} />,
  //   work: <WorkPage changePage={changePage} />,
  // };

  function changePage(page) {
    // homeSpeed.current = currentPage.current == "home" ? "fast" : "slow";
    // homeContent.current =
    //   currentPage.current == "home" || page == "home" ? true : false;
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
    // setHomePosition(pageLayout[page]);
  }

  function onScroll(e) {
    // setHomePosition(e.target.scrollTop);
    console.log(workFullRef.current);
    var scrollPos = window.scrollY / window.innerHeight;
    if (scrollPos <= 1.0 && bgPageRef.current != "about") {
      setBackgroundPage("about");
    }
    if (scrollPos > 1.0 && bgPageRef.current != "work") {
      setBackgroundPage("work");
    }
    if (scrollPos >= 2 != workFullRef.current) {
      setWorkFull(scrollPos >= 2);
    }
  }

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, window.innerHeight);
    window.addEventListener("scroll", onScroll);
    console.log("sdf");
  }, []);

  useEffect(() => {
    bgPageRef.current = backgroundPage;
    workFullRef.current = workFull;
  }, [backgroundPage, workFull]);

  return (
    <div className="app">
      {/* <div className="spacer-page"></div> */}
      <AboutPage changePage={changePage} visible={backgroundPage == "about"} />
      <HomePage
        innerRef={homeRef}
        speed={homeSpeed.current}
        content={homeContent.current}
      />
      <WorkPage
        changePage={changePage}
        visible={backgroundPage == "work"}
        full={workFull}
      />
      <div className="spacer-page"></div>
      {/* {navButtonLayout[currentPage.current].map((button) => button)} */}
    </div>
  );
}
