import "../styles/App.css";

const HEAD = <div className="head" />;
const BODY = <div className="body" />;
const LEFT_ARM = <div className="left-arm" />;
const RIGHT_ARM = <div className="right-arm" />;
const LEFT_LEG = <div className="left-leg" />;
const RIGHT_LEG = <div className="right-leg" />;

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

interface HangmanDrawingProp {
  numberOfWrongGuesses: number | undefined;
}

export function HangmanDrawing({ numberOfWrongGuesses }: HangmanDrawingProp) {
  return (
    <div className="hangman-drawing">
      {BODY_PARTS.slice(0, numberOfWrongGuesses)}
      <div className="small-column" />
      <div className="row" />
      <div className="column" />
      <div className="base" />
    </div>
  );
}
