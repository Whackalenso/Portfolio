import ArrowDown from "../icons/arrow_down.svg?react";

export default function NavButton({text, value, side, callback}) {
  return <div className={`nav-button nav-${side}`} onClick={() => {
    callback(value)
  }}>
    <div>{text}</div>
    <ArrowDown className="nav-arrow"/>
  </div>
}