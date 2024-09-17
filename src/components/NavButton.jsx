import ArrowDown from "../icons/arrow_down.svg?react";

export default function NavButton({ text, value, side, callback }) {
  return (
    <div
      className={`nav-button nav-${side}`}
      onClick={() => {
        callback(value);
      }}
    >
      <div className="nav-text">{text}</div>
      <ArrowDown className="nav-arrow" />
    </div>
  );
}
