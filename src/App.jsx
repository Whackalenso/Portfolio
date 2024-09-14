// import "./HomePage.css"
import HomePage from "./HomePage"
import WorkPage from "./WorkPage";
import AboutPage from "./AboutPage";
import NavButton from "./components/NavButton"
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const pageLayout = {"about": "100vh", "home": "0", "work": "-100vh"}
  
  const [backgroundPage, setBackgroundPage] = useState(null);

  function changePage(page) {
    const pages = {"about": <AboutPage changePage={changePage}/>, "work": <WorkPage changePage={changePage}/>}
    if (page != "home") {
      setBackgroundPage(pages[page]);
    }
    setCurrentPage(page);
  }

  const navButtons = useRef([]);
  useEffect(() => {
    console.log(currentPage);
    if (currentPage == "home") {
      navButtons.current = [<NavButton text="about me" value="about" side="top" callback={changePage} key={0}/>, <NavButton text="my work" value="work" side="bottom" callback={changePage} key={1}/>];
    }
    if (currentPage == "about") {
      navButtons.current = [<NavButton text="home" value="home" side="bottom" callback={changePage}/>]
    }
    if (currentPage == "work") {
      navButtons.current = [<NavButton text="home" value="home" side="top" callback={changePage}/>]
    }
  });

  // const navButtons = [<NavButton text="about me" value="about" side="top" callback={changePage}/>, <NavButton text="my work" value="work" side="bottom" callback={changePage} />]

  console.log(navButtons.current);

  return (
    <div>
      {backgroundPage}
      <HomePage top={pageLayout[currentPage]} />
      {navButtons.current.map(button => button)}
    </div>
  )
}
