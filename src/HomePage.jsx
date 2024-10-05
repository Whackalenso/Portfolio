import "./HomePage.css";

export default function HomePage({ changePage, innerRef, speed, content }) {
  return (
    <div
      className="home scroll-child"
      style={{ transitionDuration: `${speed == "fast" ? 0.5 : 1}s` }}
      ref={innerRef}
      onClick={() => {
        changePage("home");
      }}
    >
      <div
        className="center"
        style={{ visibility: content ? "visible" : "hidden" }}
      >
        <img src={"./me.png"} className="portrait"></img>
        <div className="right">
          <div className="name">
            <h1 className="text">Nigel</h1>
            <h1 className="text">Weiss</h1>
          </div>
          <div className="description">
            <h3 className="text">maker</h3>
            <h3 className="text">student</h3>
            <h3 className="text">musician</h3>
          </div>
        </div>
      </div>
      <div
        className="footer"
        style={{ visibility: content ? "visible" : "hidden" }}
      >
        Last Updated: 10/4/24
      </div>
    </div>
  );
}
