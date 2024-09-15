import "./AboutPage.css";

export default function AboutPage({ visible }) {
  return (
    <div
      className="about-page"
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div className="title">About Me</div>
      <div className="about-body-text">
        Hi, I'm Nigel. I'm currently a senior at El Cerrito High School, CA. I
        love programming and making stuff, such as websites, apps, and
        electronics. In addition, I love playing music, and play sax and
        clarinet in the high school band program. Aside from that, I like
        playing tennis, biking, and going on adventures with my friends.
      </div>
      <img
        className="image"
        src={"./dunkin.jpg"}
        style={{ translate: "-35vw" }}
      />
    </div>
  );
}
