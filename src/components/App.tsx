import { useCallback, useEffect, useState } from "react";
import words from "../assets/worList.json";
import "../styles/App.css";
import { HangmanDrawing } from "./HangmanDrawing";
import { Letters } from "./Letters";
import { Keyboard } from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  //useCallback is used to prevent setting new value of guessed letter
  //every time a letter is pressed
  //And only when a new key is pressed ([guessedLetters]).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addingGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  //Setting A new guessed letter every time a letter is pressed
  //And only when a new key is pressed ([guessedLetters]).
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      console.log(e.key);
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addingGuessedLetters(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div className="main-container">
      <h1>Hello</h1>
      <HangmanDrawing numberOfWrongGuesses={incorrectLetters?.length} />
      <Letters guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addingGuessedLetters={addingGuessedLetters}
      />
    </div>
  );
}

export default App;
