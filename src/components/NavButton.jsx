import { useEffect, useState } from "react";
import ArrowDown from "../icons/arrow_down.svg?react";

export default function NavButton({ currentPage, localScroll, callback, id }) {
  var pageTexts = { about: "about me", home: "home", work: "my work" };
  var pageLayouts = {
    about: [{ side: "bottom", page: "home" }, { side: "bottom offset", page: "work" }],
    home: [{ side: "top", page: "about" }, { side: "bottom", page: "work" }],
    work: [{ side: "top offset", page: "about" }, { side: "top", page: "home" }]
  };
  var side = pageLayouts[currentPage][id].side;
  var page = pageLayouts[currentPage][id].page;
  var otherSide = pageLayouts[currentPage][id == 0 ? 1 : 0].side;

  const [text, setText] = useState(pageTexts[page]);

  // useEffect(() => {
  //   var newPage = pageTexts[page]
  //   for (var i = 0; i < Math.max(text.length, newPage.length); i++) {
  //     var newText = text;
  //     if (i >= text.length) {
  //       nextText += newPage[i];
  //     }
  //     nextText[i] = newPage[i];
  //   }
  //   setText(pageTexts[page]);
  // }, [currentPage]);

  const height = "125px";
  var style = {};
  if (localScroll == 0 || (currentPage == "work" && localScroll >= 0)) {
    style = {
      top: side.includes("top") ? "0vh" : `calc(100vh - ${height})`
    };
    if (side.includes("offset")) {
      style.left = "calc(50% + 200px)"
    }
  } else {
    if (localScroll < 0) {
      if (side == "top") {
        style = { top: `min(${-localScroll * 100}vh, calc(100vh - ${height}))` }
      }
      if (side == "top offset") {
        style = { top: "0vh", left: `calc(50% + ${(1 + localScroll) * 200}px)` };
      }
      if ((side == "bottom" && otherSide == "top") || (side == "bottom offset")) {
        style = { top: `calc(100vh - ${height})`, left: `calc(50% + ${-localScroll * 200}px)` };
      }
    }
    if (localScroll > 0) {
      if (side == "bottom") {
        style = { top: `max(calc(${(1 - localScroll) * 100}vh - ${height}), 0px)` }
      }
      if (side == "bottom offset") {
        style = { top: `calc(100vh - ${height})`, left: `calc(50% + ${(1 - localScroll) * 200}px)` };
      }
      if ((side == "top" && otherSide == "bottom") || (side == "top offset")) {
        style = { top: "0vh", left: `calc(50% + ${localScroll * 200}px)` };
      }
    }
  }
  return (
    <div
      className={`nav-button nav-${side}`}
      style={style}
      onClick={() => {
        callback(page);
      }}
    >
      <div className="nav-text">{pageTexts[page]}</div>
      <ArrowDown className="nav-arrow" />
    </div>
  );
}
