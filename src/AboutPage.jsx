import "./AboutPage.css";
import CornerRightUp from "./icons/corner-right-up.svg?react";
import CornerRightDown from "./icons/corner-right-down.svg?react";

export default function AboutPage({ changePage, visible }) {
  return (
    <div
      className="about-page"
      style={{ visibility: visible ? "visible" : "hidden" }}
      onClick={() => {
        changePage("about");
      }}
    >
      <div className="about-page-inner">
        <div className="about-content">
          <div className="title">About Me</div>
          <div className="about-body-text">
            Hi, I'm Nigel. I'm currently a senior at El Cerrito High School, CA.
            I love programming and making stuff, such as websites, apps, and
            electronics. In addition, I love playing music, and play sax and
            clarinet in the high school band program. Aside from that, I like
            playing tennis, biking, and going on adventures with my friends.
          </div>
        </div>
        <div
          className="image"
          style={{
            translate: "-35vw",
            display: visible ? "block" : "none",
          }}
        >
          <img src={"./dunkin.jpg"} />
          <p>
            Dunkin' Donuts Detector <CornerRightUp className="corner-arrow" />
          </p>
        </div>
        <div
          className="image"
          style={{ translate: "35vw", display: visible ? "block" : "none" }}
        >
          <p>
            Jazz performance in Barcelona{" "}
            <CornerRightDown className="corner-arrow" />
          </p>
          <img src={"./jazz_2.JPG"} style={{ height: "50vh" }} />
        </div>
      </div>
    </div>
  );
}
