import "../styles/App.css";

const HEAD = <div className="head"></div>;
const BODY = <div className="body"></div>;
const LEFT_ARM = <div className="left-arm"></div>;
const RIGHT_ARM = <div className="right-arm"></div>;
const LEFT_LEG = <div className="left-leg"></div>;
const RIGHT_LEG = <div className="right-leg"></div>;

export function HangmanDrawing() {
  return (
    <div className="hangman-drawing">
      <div className="base"></div>
      <div className="column"></div>
      <div className="row"></div>
      <div className="small-column"></div>
      {HEAD}
      {BODY}
      {LEFT_ARM}
      {RIGHT_ARM}
      {LEFT_LEG}
      {RIGHT_LEG}
    </div>
  );
}
