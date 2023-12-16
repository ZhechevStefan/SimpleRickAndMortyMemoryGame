import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import MainGame from "./components/main/MainGame.jsx";
import Modal from "./components/modal/Modal.jsx";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  if (currentScore === 16) {
    setCurrentScore("max! 16!");
    endGame();
  }

  function scoreHandler() {
    setCurrentScore(state => state + 1);
  }

  function endGame() {
    setGameEnded(true);
    const highscore = localStorage.getItem("highscore");
    if (currentScore > highscore) {
      localStorage.setItem("highscore", currentScore);
    }

    if (currentScore === "max! 16!") {
      localStorage.setItem("highscore", 16);
    }
  }

  return (
    <>
      <Header score={currentScore} />
      <MainGame scoreHandler={scoreHandler} endGame={endGame} />
      {gameEnded ? (
        <Modal
          score={currentScore}
          setCurrentScore={setCurrentScore}
          setGameEnded={setGameEnded}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
