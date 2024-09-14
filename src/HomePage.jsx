// import "./HomePage.css";

export default function HomePage({top}) {
  return <div className="home" style={{ top: top}}>
    <div className="center">
      <div className="portrait"></div>
      <div className="right">
        <div className="name">
          <h1 className="text">Nigel</h1>
          <h1 className="text">Weiss</h1>
        </div>
        <div className="description">
          <h3 className="text">maker</h3>
          <h3 className="text">developer</h3>
          <h3 className="text">something else</h3>
        </div>
      </div>
    </div>
  </div>
}