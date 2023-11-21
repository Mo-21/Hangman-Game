interface LettersProps {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}

export function Letters({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: LettersProps) {
  return (
    <div className="letters-group">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="letter">
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",

              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
