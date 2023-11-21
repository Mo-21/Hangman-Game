const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface KeyboardProps {
  activeLetters: string[];
  inactiveLetters: string[];
  addingGuessedLetters: (letter: string) => void;
}

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addingGuessedLetters,
}: KeyboardProps) {
  return (
    <div className="keyboard-group">
      {KEYS.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addingGuessedLetters(key)}
            className={`key ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            key={index}
            disabled={isActive || isInactive}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
