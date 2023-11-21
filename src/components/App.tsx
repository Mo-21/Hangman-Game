import { useState } from "react";
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

  const incorrectLetters = guessedLetters?.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  return (
    <div className="main-container">
      <h1>Hello</h1>
      <HangmanDrawing numberOfWrongGuesses={incorrectLetters?.length} />
      <Letters guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard />
    </div>
  );
}

export default App;
