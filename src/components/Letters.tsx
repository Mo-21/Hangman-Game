interface LettersProps {
  guessedLetters: string[] | undefined;
  wordToGuess: string;
}

export function Letters({ guessedLetters, wordToGuess }: LettersProps) {
  return (
    <div className="letters-group">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="letter">
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
